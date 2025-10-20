'use client'
import React from 'react'
import styled from 'styled-components';
import heroimage from '../../../../public/heroimage.png'
import Image from 'next/image';
import MernButton from './MernButton';

const RightSide = () => {
    return (
        <div>
            <StyledWrapper className=''>
                <div className="loader">
                    <div className="box">
                        <div className="logo">

                        </div>

                    </div>

                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />

                </div>
                <div className="image-wrapper flex-col">
                    <Image
                        src={heroimage}
                        alt="Hero"
                        width={400}
                        height={400}
                        className="hero-img"
                    />
                    <MernButton/>
                </div>
            </StyledWrapper>
        </div>
    )
}
const StyledWrapper = styled.div`
  position: relative;
  .loader {
    --size: 400px;
    --duration: 2s;
    --logo-color: grey;
    --background: linear-gradient(
      0deg,
      rgba(50, 50, 50, 0.2) 0%,
      rgba(100, 100, 100, 0.2) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .loader .box {
    position: absolute;
    background: rgba(100, 100, 100, 0.15);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgba(100, 100, 100, 1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: rgba(100, 100, 100, 0.8);
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: rgba(100, 100, 100, 0.6);
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: rgba(100, 100, 100, 0.4);
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: rgba(100, 100, 100, 0.2);
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
  }

  .loader .logo svg {
    fill: var(--logo-color);
    width: 100%;
    animation: color-change var(--duration) infinite ease-in-out;
  }

  .image-wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-img {
    width: 400px !important;
    height: auto !important;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .loader {
      --size: 300px;
    }
    .hero-img {
      width: 300px !important;
    }
  }

  @media (max-width: 480px) {
    .loader {
      --size: 200px;
    }
    .hero-img {
      width: 200px !important;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
  }

  @keyframes color-change {
    0% {
      fill: var(--logo-color);
    }
    50% {
      fill: white;
    }
    100% {
      fill: var(--logo-color);
    }
  }`;


export default RightSide