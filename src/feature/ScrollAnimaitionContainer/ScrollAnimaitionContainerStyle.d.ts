import styled, { keyframes } from "styled-components";

export const animationStyles = {
  frameXIn: keyframes`
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  `,
  frameXOut: keyframes`
    0% {
      opacity: 0;
      transform: translateX(50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  `,
  frameYIn: keyframes`
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `,
  frameYOut: keyframes`
    0% {
      opacity: 0;
      transform: translateY(50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `,
  opacity: keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &.opacity {
    animation: ${animationStyles.opacity} 7s forwards;
  }
  &.frameXIn {
    animation: ${animationStyles.frameXIn} 2s forwards;
  }
  &.frameXOut {
    animation: ${animationStyles.frameXOut} 2s forwards;
  }
  &.frameYIn {
    animation: ${animationStyles.frameYIn} 2s forwards;
  }
  &.frameYOut {
    animation: ${animationStyles.frameYOut} 2s forwards;
  }
`;
