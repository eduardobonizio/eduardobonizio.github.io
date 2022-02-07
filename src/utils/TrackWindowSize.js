import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateScreenSize } from '../store/actions/screenSize.actions';

export default function trackWindowSize() {
  const dispatch = useDispatch();

  function getWindowDimensions() {
    const { outerWidth: width, outerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function setWindowDimensions(windowSize) {
    dispatch(updateScreenSize(windowSize));
  }

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
}
