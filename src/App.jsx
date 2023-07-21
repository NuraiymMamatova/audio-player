// import logo from './logo.svg';
import epic from "./assets/audio/epic.mp3";
import './App.css';
import Button from "./components/UI/Button";
import { useRef } from "react";
import { styled } from "styled-components";

function App() {
  const player = useRef();

  const onPlay = () => {
    player.current.play();
  }

  const onPause = () => {
    player.current.pause();
  }
  return (
    <StyledApp>
      <h1>play/pause methods of audio with useRef hook</h1>
      <ButtonsWrapper>
      <Button onClick={onPlay}>Play</Button>
      <Button onClick={onPause}>Pause</Button>
      </ButtonsWrapper>
      <audio controls src={epic} ref={player}></audio>
    </StyledApp>
  );
}

export default App;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 20%;
  justify-content: center;
`

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  height: 50vh;
`