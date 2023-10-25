import styled from "styled-components";

export const WrapperHomeCampsite = styled.section`
  display: flex;
  background-color: white;
  margin: 0 8px 0 8px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  padding : 12px 10px 19px 10px;
  gap:10px;
`;

export const CampSiteItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeCampsiteImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  border: 0.5px solid var(--DBDBDB, #DBDBDB);
  background: #C4C4C4;

`;

export const HomeCampSiteName = styled.h3`
  font-size: 14px;
  margin: 9px 0 0 2px;
`; 

export const HomeCampSitePrice = styled.h3`
  font-size: 12px;
  margin: 4px 0 0 2px;
  color:var(--primary-color);
`; 