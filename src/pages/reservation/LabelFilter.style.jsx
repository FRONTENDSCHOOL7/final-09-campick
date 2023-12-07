import { styled } from "styled-components";

export const WrapperLabel = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
  .swiper-slide {
    width: auto;
  }
`;

export const ViewMoreButton = styled.button`
  position: relative;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 3px;
  cursor: pointer;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
  }

  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center;
`;

export const LabelButton = styled.button`
  font-size: 12px;
  background-color: ${props => (props.selected ? "var(--primary-color)" : "")};
  color: ${props =>
    props.selected ? "var(--font-white-color)" : "var(--font-primary-color)"};
  border: 1px solid
    ${props =>
      props.selected ? "var(--primary-color)" : "var(--font-primary-color)"};
  border-radius: 44px;
  padding: 5px 8px 5px 8px;
  margin: 3px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${props =>
      props.selected ? "var(--font-white-color)" : "var(--primary-color)"};
    background-color: ${props =>
      props.selected ? "var(--primary-color)" : ""};
    transition: 0.3s;
    border: 1px solid var(--primary-color);
  }

  &:focus {
    outline: none;
  }
`;
