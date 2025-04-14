import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import temp_back from "/img_background.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import btimg from "/buttonimg.png";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const TextBox = styled.p`
  position: absolute;
  z-index: 999;
  color: black;
  text-align: center;
  width: 80%;
  font-size: ${({ fontSize }) => fontSize - 30}px;
`;

function App() {
  const navigate = useNavigate();
  const text = "AI를 활용하여 사용자와 닮은 동물을 매칭하는 시스템입니다. 시작 버튼을 눌러 동물 타투 스티커를 받아보세요.";
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

  let videoRef = useRef(null)



  //사용자 웹캠에 접근
  const canvasRef = useRef(null); // 캡처용 캔버스 ref
  const [capturedImage, setCapturedImage] = useState(null); // 캡처 이미지 상태
  

  const getUserCamera = () =>{
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {
      //비디오 tag에 stream 추가
      let video = videoRef.current

      video.srcObject = stream

      video.play()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUserCamera()
  },[videoRef])



const handleCapture = () => { //화면 캡쳐쳐
  const video = videoRef.current;
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.translate(canvas.width, 0); // 좌우반전 설정
  ctx.scale(-1, 1);

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageDataUrl = canvas.toDataURL("image/png"); //PC다운로드 폴더에 png로 저장
  setCapturedImage(imageDataUrl);
};



const handleDownload = () => { // 이미지 다운로드
  const link = document.createElement("a");
  link.href = capturedImage;
  link.download = "capture.png";
  link.click();
};




  return (
    <Container style={{ minHeight: "120vh" }}>
      <Row className="one">
        <div className="App">
          <img className="cloudimg" src={cloud} />
        <Col>
        <video
          className="video_type"
          ref={videoRef}
          style={{ transform: "scaleX(-1)" }} // 좌우 반전 적용
        ></video>
        </Col>
        </div>
      </Row>
      <Row className="three" style={{ marginTop: "30px", textAlign: "center" }}>
        <Col>
          {/* 촬영 버튼 */}
          <button onClick={handleCapture} style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px" }}>
            촬영하기
          </button>

          {/* 저장 버튼 (캡처된 이미지 있을 때만 표시) */}
          {capturedImage && (
            <button onClick={handleDownload} style={{ padding: "10px 20px", fontSize: "16px" }}>
              이미지 저장
            </button>
          )}
        </Col>
      </Row>

      {capturedImage && (
      <Row className="four" style={{ marginTop: "20px", textAlign: "center" }}>
        <Col>
          <img src={capturedImage} alt="캡처 미리보기" style={{ maxWidth: "100%", border: "2px solid #ccc" }} />
        </Col>
      </Row>
      )}


{/* 비디오 캡처용 임시 코드 */}
<canvas ref={canvasRef} style={{ display: "none" }} />

      <Row className="two">
        <Col><img className="ch1img" src={ch1} /></Col>
        <Col>
          <div style={{ position: "relative" }}>
            <img className="bubbleimg" src={bubble} ref={bubbleRef} />
            <TextBox fontSize={fontSize}>{displayText}</TextBox>

            {/* 버튼 이미지 */}
            <img
              className="button-img"
              src={btimg}
              onClick={() => navigate("/Select")}
              style={{
                width: "150px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              alt="시작 버튼"
            />
          </div>
        </Col>
        <Col><img className="ch2img" src={ch2} /></Col>
      </Row>
    </Container>
  );
}

export default App;