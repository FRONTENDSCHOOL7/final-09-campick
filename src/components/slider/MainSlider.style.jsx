import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  margin: 0 8px 0 8px;
  border-radius: 10px;

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
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 0px;
    color: white;

    li button:before {
      color: var(--primary-disabled-color);
    }

    li.slick-active button:before {
      color: var(--primary-color);
    }
  }
`;
export const SliderItem = styled.img`
  border-radius: 10px;
`;
