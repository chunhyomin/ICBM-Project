import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "/logo.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState(""); // 표시될 텍스트 상태
  const text = "AI를 활용하여 사용자와 닮은 동물을 매칭하는 시스템입니다. 시작 버튼을 눌러 동물 타투 스티커를 받아보세요."; // 전체 텍스트

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]); // 한 글자씩 추가
      index += 1;
      if (index === text.length) {
        clearInterval(interval); // 모든 글자가 나타나면 interval을 종료
        setTimeout(() => {
          setDisplayText(""); // 글자를 지우고 다시 시작
        }, 1000); // 1초 뒤에 초기화
      }
    }, 100); // 0.1초마다 글자 추가

    return () => {
      clearInterval(interval); // cleanup
    };
  }, []); // 빈 배열을 넣어 한번만 실행되도록 함

  return (
    <div className="App">
      <img className="logoimg" src={ logo } />
      <img className="cloudimg" src={ cloud } />
      <img className="bubbleimg" src={ bubble } />
      <img className="ch1img" src={ ch1 } />
      <img className="ch2img" src={ ch2 } />
      <div className="box"></div>
      <div>
        <p>{displayText}</p> {/* 상태에 따라 글자 표시 */}
      </div>
    </div>
  );
}

export default App;
