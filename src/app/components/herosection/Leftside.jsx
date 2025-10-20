"use client";
import React from "react";
import styled from "styled-components";

const leftside = () => {
  return (
    <div className="space-y-5 max-w-lg mx-auto px-4 text-center md:text-left md:max-w-none">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">SAYMISLAMJIHAD</span>
          <span aria-hidden="true" className="hover-text">
            SAYMISLAMJIHAD
          </span>
        </button>
      </StyledWrapper>

      <div>
        <h1 className="text-5xl font-bold text-white">FULL STACK DEVELOER</h1>
        <br />
        <button className="group relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-green-600 opacity-75 blur transition duration-300 group-hover:opacity-100" />
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-green-600 opacity-75 blur transition duration-300 group-hover:opacity-100 animation-delay-200" />
          <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-green-500 to-green-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125" />
            <span className="inline-flex flex-col gap-1">
              <span className="text-sm font-medium text-white ">
                (BACKEND FOCUSED)
              </span>
              <span className="text-[10px] font-light tracking-wider text-cyan-300/80">
                CLICK TO SEE MY EXPERTISE
              </span>
            </span>
            <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <div className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full" />
          </span>
        </button>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #37ff8b;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

export default leftside;
