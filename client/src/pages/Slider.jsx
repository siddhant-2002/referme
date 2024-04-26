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
    width: 38vmin;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 10px 25px 30px rgba(30,30,200,0.3);
}
.wrapper{
    width: 100%;
    display: flex;
    animation: slide 16s infinite;
}
@keyframes slide{
    0%{
        transform: translateX(0);
    }
    25%{
        transform: translateX(0);
    }
    35%{
        transform: translateX(-100%);
    }
    45%{
        transform: translateX(-100%);
    }
    55%{
        transform: translateX(-200%);
    }
    75%{
        transform: translateX(-200%);
    }
    85%{
        transform: translateX(-100%);
    }
    90%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0);
    }
}
img{
    width: 100%;
}
`;
function Slider() {
  return (
    <StyledDiv>
        <div className="container">
      <div className="wrapper">
        <img src="notes1.png" alt="Slide 1" />
        <img src="practical1.png" alt="Slide 2" />
        <img src="project2.png" alt="Slide 3" />
        <img src="here.png" alt="Slide 4" />
      </div>
    </div>
    </StyledDiv>
    
  );
}

export default Slider;