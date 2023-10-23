import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed; // 페이지 전체를 덮도록 fixed 포지션 적용
  top: 0;
  left: 0;
  width: 100%; // 전체 너비
  height: 100%; // 전체 높이
  background-color: rgba(0, 0, 0, 0.5); // 반투명한 회색 배경
  z-index: 50; // 모달보다 높은 z-index를 가지도록 설정. 다른 z-index 값이 필요하면 조정하세요.
`;

export const WrapperMap = styled.section`
  position:absolute;
	margin: 0 auto;
	display: flex;
  background-color: white;
	flex-direction: column;
	box-sizing: border-box;
  padding: 19px 12px 19px 12px;
  border-radius: 20px;
  border: 2px solid var(--primary-color);
  height: auto;
  width: 322px;
  z-index: 100;
`;
export const WrapperAddress = styled.div`
  background-color: white;
  width:auto;
  border: 2px solid var(--primary-disabled-color);
  border-radius: 10px;
  margin-top: 8px;
  cursor: pointer;
  padding:9px 0 9px 11px;
  &:hover{
    border: 2px solid var(--primary-color);
  }
`

export const AddressInputStyle = styled.input`
	font-family: 'Suit-Regular';
	border: none;
	padding-bottom: 8px;
	border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
  width: 100%;
  height: 25px;
	&:focus {
		outline: none;
		border-color: var(--primary-disabled-color);
    // 비밀번호가 틀렸으면 색상 바꿔야함
	}
	&::placeholder {
		color: #dbdbdb;
	}
`;

export const ResultList = styled.div`
  overflow-y: auto;
  position: relative;
  height: 250px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap:10px;
  color: var(--primary-disabled-color);
`
export const CampSiteAddressIsNull = styled.div`
  height: 273px;
  text-align: center;
  margin-top: 277px;
`