import styled from "styled-components";

export const SearchInputStyle = styled.input`
  font-family: "TheJamsil", sans-serif;
  width: 300px;
  height: 32px;
  border-radius: 32px;
  background: var(--Gray-6, #f2f2f2);
  border: 0;
  padding-left: 16px;
  &:focus-visible {
    outline-color: var(--primary-color);
  }
`;

export const SearchResultWrapper = styled.ul`
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px 16px 20px 16px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchResultLi = styled.li`
  width: calc(100% - 8px);
  height: 50px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
`;

export const SearchResultProfileImg = styled.img`
  width: 45px;
  height: 45px;
  stroke-width: 0.5px;
  stroke: var(--DBDBDB, #dbdbdb);
  border-radius: 50%;
`;
export const SearchResultAccountWrapper = styled.div`
  max-width: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  margin: 6px auto 6px 15px;
  gap: 6px;
`;

export const SearchResultUserName = styled.h3`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const SearchResultAccountName = styled.p`
  color: var(--767676, #767676);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
