import Container from 'components/Container/Container';
import picture from '../../img/business-modern-woman-working-in-the-office-E3CC8GB.png';
import Logitach from '../../img/Logitech.svg';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { data } from './sliderData.js';
import { useEffect, useState } from 'react';
import useIsDisabled from 'hooks/useIsDisbaled';

const { sliders } = data;

export default function SliderBig() {
  const [current, setCurrent] = useState(0);
  const dis = useIsDisabled(sliders, current);
  const cur = dis.current;

  const handleIncreaseClick = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleDecreaseClick = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <section className="slider-big">
      <Container>
        <button disabled={dis.isBtnDisbled} onClick={handleDecreaseClick} className="slider-big-control">
          <FaArrowLeft />
        </button>
        <div className="slider-big-slides">
          <img className="slider-big-image" src={picture} alt={picture} />
          <div className="slider-big-text">
            <h2 className="slider-big-title">{sliders[cur].title}</h2>
            <img src={Logitach} alt={Logitach} />
            <h3 className="slider-big-name">{sliders[cur].name}</h3>
            <p className="slider-big-desc">{sliders[cur].description}</p>
          </div>
        </div>
        <button disabled={dis.isDisbled} onClick={handleIncreaseClick} className="slider-big-control">
          <FaArrowRight />
        </button>
      </Container>
    </section>
  );
}
