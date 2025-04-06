import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import logo from "/logo.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import btimg from "/buttonimg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const TextBox = styled.p`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: #444;
  text-align: center;
  width: 80%;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 500;
  z-index: 3;
  white-space: pre-line;
`;

function App() {
  const navigate = useNavigate();
  const text = "당신의 성별을 선택해주세요!";
  const [displayText, setDisplayText] = useState("");
  const [loop, setLoop] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const bubbleRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        let newText = text.slice(0, index + 1);
        if ((index + 1) % 18 === 0) newText += "\n";
        setDisplayText(newText);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText("");
          setLoop((prev) => prev + 1);
        }, 2500);
      }
    }, 90);
    return () => clearInterval(interval);
  }, [loop]);

  useEffect(() => {
    const updateFontSize = () => {
      if (bubbleRef.current) {
        const width = bubbleRef.current.offsetWidth;
        setFontSize(Math.max(12, width * 0.05));
      }
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div className="app-background">
      <img src={cloud} className="cloud-bg" />
      <Container fluid className="text-center">
        <Row className="align-items-end justify-content-center mt-3 position-relative">
          <Col xs={4} sm={3} md={2}>
            <img src={ch1} alt="캐릭터1" className="char-img" />
          </Col>
          <Col xs={4} sm={3} md={2} className="d-flex justify-content-center gap-2">
            <img src={ch2} alt="캐릭터2" className="char-img" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={5} className="position-relative">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img src={bubble} alt="말풍선" className="bubble-img" ref={bubbleRef} />
              <TextBox fontSize={fontSize}>{displayText}</TextBox>

              {/* 시작 버튼 - 말풍선 우측 상단에 고정 */}
              <img
                src={btimg}
                alt="시작 버튼"
                className="start-btn"
                onClick={() => navigate("/page3")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
