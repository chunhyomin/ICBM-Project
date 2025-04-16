import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "/logo.png";
import leaf from "/leaf.png";
import ch1 from "/여울이.png";
import ch2 from "/너굴맨.png";
import cloud from "/cloud.png";
import bubble from "/말풍선.png";
import minib1 from "/minibutton1.png";
import minib2 from "/minibutton2.png";

import picture1 from "../picture/picture1.png";
import picture2 from "../picture/picture2.png";
import picture3 from "../picture/picture3.png";
import picture4 from "../picture/picture4.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./page4.css";
import "../App.css";
import React from "react";

const App = () => {
return (
<div className="container my-4">
    <img src={cloud} className="cloud-bg" alt="배경" />
    <div className="position-absolute top-0 end-0 p-3">
        <img src={leaf} alt="나뭇잎" className="leaf-img" />
    </div>
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
    <div className="text-center mt-4 buttons d-flex justify-content-center gap-3">
        <img
            src={minib1}
            alt="인쇄하기"
            className="btn-icon"
            onClick={() => navigate("/page5")}
        />
        <img
            src={minib2}
            alt="돌아가기"
            className="btn-icon"
            onClick={() => navigate("/page4")}
        />
    </div>
</div>
);
};

export default App;