import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const React360Wrapper = styled.div`
  cursor: grab;
  .react360 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: white;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .icon-react360 {
    height: 4em;
    position: relative;
    padding-top: 3em;
  }
`
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

    return function cleaup() {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
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
      <div className='react360'>
        <img
          className='react-360-img'
          alt=''
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${props.dir}/${imageIndex}.jpg`}
        />
      </div>
    );
  };

  return (
    <React360Wrapper
      className='react-360-img'
      onMouseDown={handleMouseDown}
      onDragStart={preventDragHandler}
    >
      {renderImage()}
    </React360Wrapper>
  )
}

export default React360
