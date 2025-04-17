import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import leaf from "/leaf.png";
import cloud from "/cloud.png";
import minib1 from "/minibutton1.png";
import minib2 from "/minibutton2.png";
import bubble from "/말풍선.png";

import tatoo1 from "../tatoo/tatoo1.png";
import tatoo2 from "../tatoo/tatoo2.png";
import tatoo3 from "../tatoo/tatoo3.png";
import tatoo4 from "../tatoo/tatoo4.png";
import lettering from "../tatoo/lettering.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./page4.css";
import "../App.css";
import React from "react";

const App = () => {
const navigate = useNavigate();
const [selectedPicture, setSelectedPicture] = useState(null);
const [selectedTattoos, setSelectedTattoos] = useState([]);

useEffect(() => {
const savedPicture = sessionStorage.getItem("selectedPicture");
if (savedPicture) {
    setSelectedPicture(savedPicture);
}
}, []);

const tattooList = [tatoo1, tatoo2, tatoo3, tatoo4];

const handleTatooClick = (imgSrc) => {
if (selectedTattoos.includes(imgSrc)) {
    setSelectedTattoos(selectedTattoos.filter((item) => item !== imgSrc));
} else if (selectedTattoos.length < 4) {
    setSelectedTattoos([...selectedTattoos, imgSrc]);
}
};

return (
<div className="app4-background my-4">
    <img src={cloud} className="cloud-bg" alt="배경" />
    <div className="position-absolute top-0 end-0 p-3">
    <img src={leaf} alt="나뭇잎" className="leaf-img" />
    </div>

    <div className="row">
    {/* 좌측 패널 */}
    <div className="col-md-4 text-center category-panel">
        <div className="panel-shape">
        {selectedPicture && (
            <img
            src={selectedPicture}
            alt="선택한 사진"
            className="selected-panel-image"
            />
        )}
        </div>
        <div className="banner">
        <span>고양이</span>
        </div>
        <div className="bubble-wrapper">
        <img src={bubble} alt="말풍선" className="bubble-image" />
        <p className="bubble-text">마음에 드는 타투를 골라주세요!</p>
        </div>
    </div>

    {/* 이미지 카드 영역 1 */}
    <div className="col-md-4 text-center">
        <div className="row justify-content-center">
        {tattooList.map((imgSrc, i) => (
            <div key={i} className="col-6 col-sm-6 mb-3">
            <button
                className="image-button"
                onClick={() => handleTatooClick(imgSrc)}
            >
                <img
                src={imgSrc}
                alt={`타투 ${i + 1}`}
                className={`img-fluid tattoo-img ${
                    selectedTattoos.includes(imgSrc) ? "selected" : ""
                }`}
                />
            </button>
            </div>
        ))}
        </div>
    </div>

    {/* 이미지 카드 영역 2 */}
    <div className="col-md-4 text-center d-flex flex-column justify-content-start align-items-center">
        <div className="image-card_2 a5-box" data-count={selectedTattoos.length}>
        <div className={`tattoo-grid count-${selectedTattoos.length}`}>
            {selectedTattoos.map((tattoo, idx) => (
            <img
                key={idx}
                src={tattoo}
                alt={`선택된 타투 ${idx + 1}`}
                className="selected-tattoo"
            />
            ))}
        </div>
        <img src={lettering} alt="레터링" className="lettering-bottom" />
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
        onClick={() => navigate("/page3")}
    />
    </div>
</div>
);
};

export default App;
