<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

import { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import theme from "/theme.js";
import logo from "/logo.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextBox = styled.p`
  position: absolute;
  z-index: 999;
  color: black;
  text-align: center;
  width: 80%;
  font-size: ${({ fontSize }) => fontSize-30}px;
`;

function App() {
  const text =
    "AI를 활용하여 사용자와 닮은 동물을 매칭하는 시스템입니다. 시작 버튼을 눌러 동물 타투 스티커를 받아보세요.";
  const [displayText, setDisplayText] = useState("");
  const [loop, setLoop] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const bubbleRef = useRef(null);

  // 텍스트 애니메이션 효과
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        let newText = text.slice(0, index + 1);

        // 15번째 글자마다 줄바꿈 추가
        if ((index + 1) % 15 === 0) {
          newText += "\n";
        }

        setDisplayText(newText);
        index += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText("");
          setLoop((prev) => prev + 1);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loop]);

  // 말풍선 크기에 따라 텍스트 크기 조정
  useEffect(() => {
    const updateFontSize = () => {
      if (bubbleRef.current) {
        const bubbleWidth = bubbleRef.current.offsetWidth;
        setFontSize(Math.max(12, bubbleWidth * 0.1)); // 말풍선 너비의 10% 크기로 설정 (최소 12px)
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <Container>
      <Row className="one">
        <div className="App">
          <img className="cloudimg" src={cloud} />  
          <Col><img className="logoimg" src={logo} /></Col>
        </div>
      </Row>
      <Row className="two">
          <Col><img className="ch1img" src={ch1} /></Col>
          <Col><div style={{ position: "relative" }}>
            <img className="bubbleimg" src={bubble} ref={bubbleRef} />
            <TextBox fontSize={fontSize}>{displayText}</TextBox>
          </div></Col>

          <Col><img className="ch2img" src={ch2} /></Col>
          <div className="box">{/*초록색 박스*/}

          </div>
      </Row>

    </Container>
  );
}

export default App;

