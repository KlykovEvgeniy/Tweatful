import { useState, useEffect } from 'react';

export default function useIsDisabled(slider, current) {
  const [isDisbled, setIsDisabled] = useState(false);
  const [isBtnDisbled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    const len = slider.length;
    if (current === len - 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    if (current === 0) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [current]);

  return { current, isDisbled, isBtnDisbled };
}
