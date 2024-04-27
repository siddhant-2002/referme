import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #7aacff;
}
.container{
    // width: 38vmin;
    position: flex
    // justify-content: center;
    // align-items: center;
    transform: translate(-50%,-50%);
    // top: 50%;
    // left: 60%;
    overflow: hidden;
    border-radius: 8px;
    // box-shadow: 10px 25px 30px rgba(30,30,200,0.3);
}
.wrapper{
    // width: 100%;
    display: flex;
    animation: slide 16s infinite;
}
/* ... */

@keyframes slide {
  0%, 20% {
    transform: translateX(0);
  }
  25%, 45% {
    transform: translateX(-100%);
  }
  50%, 70% {
    transform: translateX(-200%);
  }
  75%, 95% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(0);
  }
}


`;
function Slider() {
  return (
    <StyledDiv>
        <div className="container">
      <div className="wrapper text-white">
        <img src="hereNotes.png" alt="Slide 1" />
        <img src="herePracticals.png" alt="Slide 2" />
        <img src="hereProjects.png" alt="Slide 3" />
        <img src="herePYQ.png" alt="Slide 4" />

      </div>
    </div>
    </StyledDiv>
    
  );
}

export default Slider;