import styled from "styled-components";

export const WrapperHomeCampsite = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 8px 0 8px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  padding: 12px 10px 19px 10px;
  gap: 18px;
  min-height: 164.195px;
`;

export const CampSiteItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;

export const HomeCampsiteImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  border: 0.5px solid var(--DBDBDB, #dbdbdb);
  background: #c4c4c4;
`;

export const HomeCampSiteName = styled.h3`
  font-size: 14px;
  margin: 9px 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const HomeCampSitePrice = styled.p`
  font-size: 12px;
  margin: 4px 0 0 2px;
  color: var(--primary-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const HomeCampSiteTitle = styled.h2``;

export const HomeCampSiteList = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
