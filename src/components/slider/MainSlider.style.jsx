import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
    margin:0 8px 0 8px; 
    border-radius:10px;

  .slick-prev {
    z-index: 1;
    left: 10px;
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: #9e9e9e;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
`;
export const SliderItem = styled.img`
  border-radius:10px;
`