import React, { useState, useEffect } from 'react'
import React360Style from './React360.module.css'

const pixelsPerDegree = 3;

function React360(props) {
  const [state, setState] = useState({
    dragging: false,
    imageIndex: 0,
    dragStartIndex: 0
  });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
    document.addEventListener('pointermove', handleMouseMove, false);
    document.addEventListener('pointerup', handleMouseUp, false);

    return function cleaup() {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
      document.removeEventListener('pointermove', handleMouseMove, false);
      document.removeEventListener('pointerup', handleMouseUp, false);
    };
  }, [state.dragging, state.imageIndex, state.dragStartIndex]);

  const handleMouseDown = e => {
    e.persist();
    setState({
      ...state,
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex
    });
  };

  const handleMouseUp = () => {
    setState({ ...state, dragging: false });
  };

  const updateImageIndex = currentPosition => {
    let numImages = props.numImages;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    const { dragStart, imageIndex, dragStartIndex } = state;
    let dx = (dragStart - currentPosition) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index !== imageIndex) {
      setState({ ...state, imageIndex: index });
    }
  };

  const handleMouseMove = e => {
    if (state.dragging) {
      updateImageIndex(e.screenX);
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };

  const renderImage = () => {
    const { imageIndex } = state;

    return (
      <div 
        className={React360Style.react360} 
        onMouseDown={handleMouseDown}
        onPointerDown={handleMouseDown}
        onDragStart={preventDragHandler}
      >
        <img
          className='img-fluid'
          alt='Rotator Image'
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${props.dir}${imageIndex}.webp`}
          width='800'
          height='1204'
        />
      </div>
    );
  };

  return (
    renderImage()
  )
}

export default React360
