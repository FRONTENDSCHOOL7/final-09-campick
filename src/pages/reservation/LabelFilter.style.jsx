import { styled } from "styled-components";

export const WrapperLabel = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  .swiper-slide {
    width: auto;
  }
`;

export const ViewMoreButton = styled.button`
  background-image: url(${props => props.backgroundImage});
  width: 12px;
  height: 12px;
  margin-left: 13px;
  margin-top: 7px;
  cursor: pointer;
  text-align: center;
  background-size: cover;
  background-position: center;
`;

export const LabelButton = styled.button`
  font-family: "TheJamsil", sans-serif;
  font-size: 12px;
  background-color: ${props => (props.selected ? "var(--primary-color)" : "")};
  color: ${props => (props.selected ? "var(--font-white-color)" : "#767676")};
  border: 1px solid
    ${props => (props.selected ? "var(--primary-color)" : "#767676")};
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
