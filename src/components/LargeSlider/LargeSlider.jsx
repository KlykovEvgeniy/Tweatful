import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import Container from 'components/Container/Container';

export default function LargeSlider() {
  const [current, setCurrent] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const personal = {
    personal: [
      { name: 'Samuel Wilson', role: 'Digital Artist' },
      { name: 'Angelina Hellhop', role: 'Digital Artist' },
      { name: 'Kyle Generale', role: 'Digital Artist' },
      { name: 'Samuel Wilson', role: 'Digital Artist' },
      { name: 'Angelina Hellhop', role: 'Digital Artist' },
      { name: 'Kyle Generale', role: 'Digital Artist' }
    ]
  };

  const handlePlusClick = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (current >= 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    if (current === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [current]);

  const per = personal.personal;

  return (
    <section className="large-slider">
      <Container>
        <div className="large-slider-titles">
          <Link to="/">Meet Our Leadership</Link>
          <h2 className="large-slider-title">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline
          </h2>
        </div>
        <div className="slides-container">
          <div className="controls-large">
            <button disabled={isDisabled} onClick={handleMinusClick} type="button">
              <FaArrowLeft />
            </button>
            <button disabled={disabled} onClick={handlePlusClick} type="button">
              <FaArrowRight />
            </button>
          </div>
          <div className="large-slides-container">
            <div className="slide-1">
              <div className="large-image-faker"></div>
              <h3>{per[current].name}</h3>
              <p>{per[current].role}</p>
            </div>
            <div className="slide-1">
              <div className="large-image-faker"></div>
              <h3>{per[current + 1].name}</h3>
              <p>{per[current + 1].role}</p>
            </div>
            <div className="slide-1">
              <div className="large-image-faker"></div>
              <h3>{per[current + 2].name}</h3>
              <p>{per[current + 2].role}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
