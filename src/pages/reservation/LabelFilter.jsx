import React, { useState } from "react";
import styled from "styled-components";

const WrapperLabel = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
`;

const LabelButton = styled.button`
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

const LabelFilter = ({ onLabelClick }) => {
  const [selectedLabels, setSelectedLabels] = useState(["전체상품"]);

  const labels = [
    "전체상품",
    "가족",
    "커플",
    "축제",
    "반려견 동반",
    "힐링",
    "아늑함",
    "활발함",
    "문화유적",
    "조용한",
    "시끌벅적",
    "깨끗한",
    "익스트림",
    "별보기 좋은",
    "수영장 있는",
    "계곡이 있는",
    "캠핑카",
    "봄",
    "여름",
    "가을",
    "겨울",
  ];

  const handleClick = label => {
    if (label === "전체상품") {
      // "전체상품" 선택하면 다른 버튼 선택 해제
      setSelectedLabels(["전체상품"]);
    } else {
      // 다른 버튼 선택하면, "전체상품" 선택 해제
      setSelectedLabels(
        prevLabels =>
          prevLabels.includes(label)
            ? prevLabels.filter(l => l !== label && l !== "전체상품") // 이미 선택된 라벨이라면, 그 라벨 제거
            : [...prevLabels.filter(l => l !== "전체상품"), label], // 만약 선택되지 않은 라벨이라면, 그 라벨 추가하고 "전체상품" 제거
      );
    }
    onLabelClick(label);
  };

  return (
    <WrapperLabel>
      {labels.map(label => (
        <LabelButton
          key={label}
          selected={selectedLabels.includes(label)}
          onClick={() => handleClick(label)}
        >
          {label}
        </LabelButton>
      ))}
    </WrapperLabel>
  );
};
export default LabelFilter;
