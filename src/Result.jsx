import 'bootstrap/dist/css/bootstrap.min.css';
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

const PrintSelection = () => {
  const [selected, setSelected] = useState(1);
  const options = [1, 2, 4];

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#b6eaff' }}>
      <div className="container py-5">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <img
                src="https://dodo.ac/np/images/thumb/d/d2/Raymond_NH.png/120px-Raymond_NH.png"
                alt="고양이"
                className="rounded-circle border border-warning me-3"
                width="80"
                height="80"
              />
              <div>
                <h4 className="fw-bold mb-1">닮은 동물은 고양이 입니다</h4>
                <span className="badge bg-danger"></span>
              </div>
            </div>

            <div className="row g-3 mb-4">
              {options.map((num) => (
                <div className="col-12 col-sm-4" key={num}>
                  <div
                    className={`card h-100 border-3 ${selected === num ? "border-primary" : "border-light"}`}
                    onClick={() => setSelected(num)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                      {[...Array(num)].map((_, i) => (
                        <img
                          key={i}
                          src="https://www.pngmart.com/files/21/Business-Man-PNG-Isolated-Photos.png"
                          alt="pose"
                          style={{ width: num === 1 ? '70px' : num === 2 ? '50px' : '35px' }}
                          className="m-1 img-fluid"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="alert alert-light text-center">
              원하는 도안을 골라주세요! 1장, 2장, 4장<br />
              많이 고를수록 크기가 작아집니다.
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-secondary">B</button>
              <button className="btn btn-warning fw-bold text-dark">A</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintSelection;
