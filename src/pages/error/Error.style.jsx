import styled from "styled-components";

export const WrapperError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorIcon = styled.div`
  img {
    width: 183px;
    height: 150px;
    margin-top: 180px;
  }
`;

export const ErrorText = styled.div`
  color: var(--767676, #767676);
  text-align: center;
  font-family: The Jamsil OTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-top: 77px;
`;

export const Submitbutton = styled.div`
  width: 120px;
  height: 44px;
  flex-shrink: 1;
  margin-top: 20px;
`;
