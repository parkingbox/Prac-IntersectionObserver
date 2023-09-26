import React from "react";
import { useScrollAnimation } from "../../hook/useScrollAnimation";
import { Container } from "./ScrollAnimaitionContainerStyle.d";

type AnimationType = {
  children: React.ReactNode;
  animationType: string;
};

const AnimationContainer = ({ children, animationType }: AnimationType) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <Container ref={ref} className={isInViewport ? animationType : ""}>
      {children}
    </Container>
  );
};

export default AnimationContainer;
