import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import picture1 from '../images/IMG_1548.jpeg';
import picture2 from '../images/IMG_1208.jpeg';
import picture3 from '../images/03012006-IMG_5931.jpeg';

import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <Carousel className="Slider">
        <div classname="picture1">
          <img src={picture1} alt="picture1" width="50%" />
          <p className="legend">Legend 1</p>
        </div>
        <div classname="picture2">
          <img src={picture2} alt="picture2" />
          <p className="legend">Legend 2</p>
        </div>
        <div classname="picture3">
          <img src={picture3} alt="picture3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
