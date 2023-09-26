import styled from "styled-components";
import AnimationContainer from "../feature/ScrollAnimaitionContainer/ScrollAnimationContainer";

function Home() {
  return (
    <HomeWrpper>
      <>
        <AnimationContainer animationType="opacity">
          <h1>아래로 스크롤 하세요</h1>
        </AnimationContainer>

        <AnimationContainer animationType="frameXIn">
          <h1>안녕</h1>
        </AnimationContainer>

        <AnimationContainer animationType="frameXOut">
          <h1>하세요</h1>
        </AnimationContainer>

        <AnimationContainer animationType="frameYIn">
          <h1>반갑습니다</h1>
        </AnimationContainer>
      </>
    </HomeWrpper>
  );
}

export default Home;

const HomeWrpper = styled.div`
  display: grid;
  place-items: center;
  max-width: 1920px;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
  background-color: black;
  color: white;
`;
