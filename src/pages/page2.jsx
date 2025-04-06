import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from "/logo.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import btimg from "/buttonimg.png";

import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const TextBox = styled.p`
  position: absolute;
  z-index: 999;
  color: black;
  text-align: center;
  width: 80%;
  font-size: ${({ fontSize }) => fontSize - 30}px;
`;


export default function Page2() {
  const navigate = useNavigate();
  const text = "당신의 성별을 입력해주세요!";
  const [displayText, setDisplayText] = useState("");
  const [loop, setLoop] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const bubbleRef = useRef(null);

  // 타이핑 효과
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        let newText = text.slice(0, index + 1);
        if ((index + 1) % 15 === 0) newText += "\n";
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

  // 말풍선 크기에 따라 폰트 조절
  useEffect(() => {
    const updateFontSize = () => {
      if (bubbleRef.current) {
        const bubbleWidth = bubbleRef.current.offsetWidth;
        setFontSize(Math.max(12, bubbleWidth * 0.1));
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
        </div>
      </Row>
      <Row className="two">
        <Col>
          <img className="ch1img" src={ch1} />
        </Col>
        <Col>
          <img className="ch2img" src={ch2} />
        </Col>
      </Row>
      <Row>
        <div style={{ position: "relative" }}>
          <img className="bubbleimg" src={bubble} ref={bubbleRef} />
          <TextBox fontSize={fontSize}>{displayText}</TextBox>

          {/* 버튼 이미지 */}
          <img
            className="button-img"
            src={btimg}
            onClick={() => navigate("/page3")}
            style={{
              width: "150px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            alt="시작 버튼"
          />
        </div>
      </Row>
    </Container>
  );
}