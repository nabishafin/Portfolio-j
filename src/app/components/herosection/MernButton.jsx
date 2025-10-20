import React from 'react';
import styled from 'styled-components';
import { Server } from 'lucide-react';
const MernButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="icon">
          <span className="text-icon hide">DEVOPS</span>
          <Server />
        </div>
        <span className="title"> SERVER </span>
        <div className="padding-left hide">
          <div className="padding-left-line">
            <span className="padding-left-text">FRONTEND</span>
          </div>
        </div>
        <div className="padding-right hide">
          <div className="padding-right-line">
            <span className="padding-right-text">BACKEND</span>
          </div>
        </div>
        <div className="background hide">
          <span className="background-text">REST API</span>
        </div>
        <div className="border hide">
          <span className="border-text">MR. CODER</span>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    background-image: linear-gradient(#232323, #232323);
    color: white;
    border: solid 2px white;
    height: 50px;
    width: 300px;
    padding: 0px 20px;
    border-radius: 5px;
    font-weight: 600;
    transform: scale(0.89);
    position: relative;
  }
  .button:not(:hover) .hide,
  .button:not(:hover) .icon::before,
  .button:not(:hover) .icon::after {
    opacity: 0;
    visibility: hidden;
    transform: scale(1.4);
  }
  .hide {
    transition: all 0.2s ease;
  }
  .button:active {
    background-image: linear-gradient(#313ed7, #3470fa);
    border-color: #313ed7;
  }
  .icon {
    position: relative;
  }
  .icon::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: green;
    border-radius: 100%;
  }
  .icon::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-19%, -60%);
    width: 100px;
    height: 33px;
    background-color: transparent;
    border-radius: 12px 22px 2px 2px;
    border-right: solid 2px green;
    border-top: solid 2px transparent;
  }
  .icon .text-icon {
    color: green;
    position: absolute;
    font-size: 12px;
    left: -37px;
    top: -38px;
  }
  .icon svg {
    width: 20px;
    height: 20px;
    border: solid 2px transparent;
    display: flex;
  }
  .button:hover .icon svg {
    border: solid 2px green;
  }
  .padding-left {
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: green;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-left:before {
    content: "";
    width: 2px;
    height: 10px;
    background-color: green;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-left:after {
    content: "";
    width: 2px;
    height: 10px;
    background-color: green;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-left-line {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: green;
    left: -24px;
    top: 11px;
    transform: rotate(-50deg);
  }
  .padding-left-line::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: green;
    border-radius: 100%;
  }
  .padding-left-text {
    color: green;
    font-size: 12px;
    position: absolute;
    white-space: nowrap;
    transform: rotate(50deg);
    bottom: 30px;
    left: -67px;
  }

  .padding-right {
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: green;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-right:before {
    content: "";
    width: 2px;
    height: 10px;
    background-color: green;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-right:after {
    content: "";
    width: 2px;
    height: 10px;
    background-color: green;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-right-line {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: green;
    right: -24px;
    top: 11px;
    transform: rotate(50deg);
  }
  .padding-right-line::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: green;
    border-radius: 100%;
  }
  .padding-right-text {
    color: green;
    font-size: 12px;
    position: absolute;
    white-space: nowrap;
    transform: rotate(-50deg);
    bottom: 33px;
    left: 18px;
  }
  .background {
    position: absolute;
  }
  .background::before {
    content: "";
    position: absolute;
    right: 27px;
    bottom: -70px;
    width: 100px;
    height: 53px;
    background-color: transparent;
    border-radius: 0px 0px 22px 22px;
    border-right: solid 2px green;
    border-bottom: solid 2px transparent;
  }
  .background::after {
    content: "";
    position: absolute;
    right: 25px;
    bottom: -20px;
    width: 6px;
    height: 6px;
    background-color: green;
    border-radius: 100%;
  }
  .background-text {
    position: absolute;
    color: green;
    font-size: 12px;
    bottom: -70px;
    left: -115px;
  }
  .border {
    position: absolute;
    right: 0;
    top: 0;
  }
  .border:before {
    content: "";
    width: 15px;
    height: 15px;
    border: solid 2px green;
    position: absolute;
    right: 0%;
    top: 0;
    transform: translate(50%, -50%);
    border-radius: 100%;
  }
  .border:after {
    content: "";
    width: 2px;
    height: 25px;
    background-color: green;
    position: absolute;
    right: -10px;
    top: -15px;
    transform: translate(50%, -50%) rotate(60deg);
  }
  .border .border-text {
    position: absolute;
    color: green;
    font-size: 12px;
    right: -112px;
    top: -30px;
    white-space: nowrap;
  }`;

export default MernButton;
