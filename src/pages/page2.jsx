import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import btimg from "/buttonimg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const TextBox = styled.p`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 500;
  color: #444;
  white-space: pre-line;
  margin: 0;
  word-break: keep-all;
`;

function App() {
  const navigate = useNavigate();
  const text = "당신의 성별을 입력해주세요!";
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
    const resizeObserver = new ResizeObserver(() => {
      if (bubbleRef.current) {
        const width = bubbleRef.current.offsetWidth;
        const calculatedFontSize = Math.max(12, Math.min(width * 0.035, 22));
        setFontSize(calculatedFontSize);
      }
    });

    if (bubbleRef.current) {
      resizeObserver.observe(bubbleRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="app-background">
      <img src={cloud} className="cloud-bg" alt="배경" />

      <Container fluid className="text-center">
        <Row className="justify-content-center mt-3">
          <Col xs={6} sm={4} md={3}>
            <img src={ch1} alt="캐릭터1" className="char-img char-left" />
          </Col>
          <Col xs={6} sm={4} md={3}>
            <img src={ch2} alt="캐릭터2" className="char-img char-right" />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={12} sm={10} md={8} lg={6} className="position-relative">
            <div className="bubble-container" ref={bubbleRef}>
              <img src={bubble} alt="말풍선" className="bubble-img" />
              <div className="bubble-text">
                <TextBox fontSize={fontSize}>{displayText}</TextBox>
              </div>
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
