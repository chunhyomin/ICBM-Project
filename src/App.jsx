import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "/logo.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import but from "/버튼.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 로고 */}
      <div className="text-center mt-3">
        <img className="logoimg" src={logo} alt="로고" />
      </div>

      {/* 구름 배경 */}
      <div className="cloud-container">
        <img className="cloudimg" src={cloud} alt="구름" />
      </div>

      {/* 초록색 배경 박스 (배경 역할만) */}
      <div className="info-box"></div>

      {/* 캐릭터 + 말풍선 + 버튼 */}
      <div className="content-wrapper">
        {/* 캐릭터 */}
        <div className="character-container">
          <img className="ch1img" src={ch1} alt="여울이" />
          <img className="ch2img" src={ch2} alt="너굴맨" />
        </div>

        {/* 말풍선 + 버튼 */}
        <div className="bubble-button-container">
          {/* 말풍선 */}
          <div className="bubble-box">
            <img className="bubbleimg" src={bubble} alt="말풍선" />
            <p className="bubble-text">
              AI를 활용하여 사용자와 닮은 동물을 매칭하는 시스템입니다.
              시작 버튼을 눌러 동물 타투 스티커를 받아보세요.
            </p>
          </div>
          {/* 버튼 */}
          <div className="button-box">
            <img className="button-img" src={but} alt="시작 버튼" />
            <span className="button-text">시작하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
