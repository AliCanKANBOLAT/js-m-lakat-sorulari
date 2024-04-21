import React, { useState } from 'react';
import { Button } from './button';

export default function CardLayout({ content }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {content.map((item, index) => (
                <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <div className="card text-bg-dark mb-3">
                    <div className="card-body fs-4">{item.question}</div>
                    <hr />
                    <div className="card-body fs-4">{item.answer}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button onClick={handlePrev}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </Button>
                      <Button onClick={handleNext}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
