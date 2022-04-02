import styled from 'styled-components'

export const CarouselSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: grey;

  .image {
      width: 100%;
      border-radius: 10px;
  }

  .rightArrow {
      position: absolute;
      top: 50%;
      right: 30px;
      font-size: 2rem;
      color: #000;
      z-index: 10;
      cursor: pointer;
      user-select: none;
  }

  .leftArrow {
      position: absolute;
      top: 50%;
      left: 30px;
      font-size: 2rem;
      color: #000;
      z-index: 10;
      cursor: pointer;
      user-select: none;
  }

  .slide {
      opacity: 0;
      transition-duration: 0.5s ease;

  }

  .slide.active {
      opacity: 1;
      transition-duration: 1s;
  }
`;

