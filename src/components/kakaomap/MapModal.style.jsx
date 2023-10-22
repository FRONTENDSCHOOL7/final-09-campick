import styled from 'styled-components';

export const WrapperMap = styled.section`
  position:absolute;
	margin: 0 auto;
	display: flex;
  background-color: white;
	flex-direction: column;
	box-sizing: border-box;
  padding: 6px;
  border-radius: 10px;
  border: 3px solid var(--primary-color);
  height: 710px;
`;
export const WrapperAddress = styled.div`
  background-color: white;
  width:300px;
  border: 3px solid var(--primary-disabled-color);
  border-radius: 8px;
  margin-top: 20px;
  padding:4px;
  cursor: pointer;
  &:hover{
    border: 3px solid var(--primary-color);
  }
`

export const AddressInputStyle = styled.input`
	font-family: 'Suit-Regular';
	border: none;
	padding-bottom: 8px;
	border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
  width: 310px;
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
  color: var(--primary-color);
`
export const CampSiteAddressIsNull = styled.div`
  height: 300px;
  text-align: center;
  margin-top: 277px;
`