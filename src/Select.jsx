import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // custom CSS
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* 좌측 패널 */}
        <div className="col-md-4 text-center category-panel">
          <div className="panel-shape"></div>
          <div className="banner">
            <span>고양이</span>
          </div>
        </div>

        {/* 이미지 카드 그리드 */}
        <div className="col-md-4 image-grid">
          <div className="row">
            {/* 반복 렌더링 */}
            {[...Array(4)].map((_, i) => (
                
              <Row>
              <Col>
              <div key={i} className="col-6 col-sm-6 mb-3">
                <div className="image-card">
                  <img src="your_image_url_here.png" alt="Character" className="img-fluid" />
                </div>
              </div>
              </Col>
              </Row>
              
            ))}
          </div>
        </div>

        <div className="col-md-4 image-grid">
          <div className="row">
            {/* 반복 렌더링 */}
            {[...Array(3)].map((_, i) => (
                
              <Row>
              <Col>
              <div key={i} className=" col-sm-12 mb-3">
                <div className="image-card_2">
                  <div className="temp"> 

                  </div>
                </div>
              </div>
              </Col>
              </Row>
              
            ))}
          </div>
        </div>

      </div>

      {/* 하단 버튼 */}
      <div className="text-center mt-4 buttons">
        <span className="btn-icon">X</span>
        <span className="btn-icon">B</span>
      </div>
    </div>
  );
};

export default App;
