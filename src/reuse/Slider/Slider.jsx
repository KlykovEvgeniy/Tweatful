import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../img/business-modern-woman-working-in-the-office-E3CC8GB.png';
import pictureTwo from '../../img/young-indian-busniess-woman.png';
import logitach from '../../img/Logitech.svg';
import { HiArrowLongRight } from 'react-icons/hi2';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/Container/Container';

export default function Slider() {
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledRemove, setisDisabledRemove] = useState(false);
  const arr = [
    {
      src: picture,
      text: 'Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process'
    },
    {
      src: pictureTwo,
      text: 'Nowadays, it isn’t uncommon'
    },
    {
      src: picture,
      text: 'Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process'
    },
    {
      src: pictureTwo,
      text: 'Nowadays, it isn’t uncommon'
    }
  ];
  const size = useWindowSize();

  useEffect(() => {
    if (total === arr.length - 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    if (total === 0) {
      setisDisabledRemove(true);
    } else {
      setisDisabledRemove(false);
    }
  }, [total]);

  const addTotal = () => {
    setTotal((prev) => prev + 1);
  };

  const removeTotal = () => {
    setTotal((prev) => prev - 1);
  };

  return (
    <section className="slider">
      <Container>
        <div className="text">
          <h2>Success Story</h2>
          <p>{arr[total].text}</p>
          <div className="text-contorls">
            <img src={logitach} alt="Logitach" />
            <Link to="/about" className="link">
              Read Complete Case Study
              <HiArrowLongRight />
            </Link>
          </div>
          <div className="controls">
            <button disabled={isDisabledRemove} onClick={removeTotal} type="button">
              <FaArrowLeft />
            </button>
            <button disabled={isDisabled} onClick={addTotal} type="button">
              <FaArrowRight />
            </button>
          </div>
        </div>
        {size.width > 1200 && <img className="slider-img" src={arr[total].src} alt="Pictute" />}
      </Container>
    </section>
  );
}
