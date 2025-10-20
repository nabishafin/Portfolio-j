'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};



const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);

const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad, { once: true });
        img.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0,0,0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 60,
    gap = 80,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    className,
    style,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const cssVars = {
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`,
      ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
    };

    const containerClasses = cx(
      'relative overflow-x-hidden group',
      '[--logoloop-gap:32px]',
      '[--logoloop-logoHeight:40px]',
      '[--logoloop-fadeColorAuto:#ffffff]',
      'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
      scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
      className
    );

    const handleEnter = useCallback(() => pauseOnHover && setIsHovered(true), [pauseOnHover]);
    const handleLeave = useCallback(() => pauseOnHover && setIsHovered(false), [pauseOnHover]);

    const renderLogo = useCallback(
      (item, key) => {
        const content = item.node ? (
          <span
            className={cx(
              'inline-flex items-center',
              scaleOnHover &&
                'transition-transform duration-300 ease-in-out group-hover/item:scale-110'
            )}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto object-contain select-none brightness-0 invert',
              scaleOnHover &&
                'transition-transform duration-300 ease-in-out group-hover/item:scale-110'
            )}
            src={item.src}
            alt={item.alt || ''}
            draggable={false}
          />
        );

        return (
          <li
            className={cx(
              'flex-none mr-[var(--logoloop-gap)] mb-20',
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
          >
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      },
      [scaleOnHover]
    );

    const logoCopies = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, i) => (
          <ul
            className="flex items-center"
            key={`copy-${i}`}
            ref={i === 0 ? seqRef : undefined}
            aria-hidden={i > 0}
          >
            {logos.map((item, idx) => renderLogo(item, `${i}-${idx}`))}
          </ul>
        )),
      [copyCount, logos, renderLogo]
    );

    return (
      <div
        ref={containerRef}
        className={containerClasses}
        style={{ width: toCssLength(width), ...cssVars, ...style }}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {fadeOut && (
          <>
            <div className="absolute inset-y-0 left-0 w-[clamp(24px,8%,120px)] bg-gradient-to-r from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[clamp(24px,8%,120px)] bg-gradient-to-l from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent pointer-events-none" />
          </>
        )}
        <div ref={trackRef} className="flex w-max will-change-transform select-none">
          {logoCopies}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
