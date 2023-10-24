import styled from 'styled-components';

export const WrapperMyCampsiteRegister = styled.section`
	width: 100%;
	gap: 20px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding: 34px 34px 34px 34px;
	box-sizing: border-box;
`;

export const WrapperMyCampsiteInput = styled.div`
	gap: 6px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export const WrapperLabel = styled.section`
	display: flex;
	flex-wrap: wrap;
	
`;

export const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 0.5px solid var(--DBDBDB, #DBDBDB);
	background: var(--Gray-6, #F2F2F2);
	border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-image: url(${props => props.$previewImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
	transition: 0.3s;
	&:hover{
		transition: 0.3s;
		border: 1px solid var(--primary-disabled-color);
	}
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadButtonText = styled.p`
  margin: 0;
  color: #666666;
	opacity: 30%;
  font-size: 16px;
	transition: 0.3s;
  display: ${props => props.$previewImage ? 'none' : 'block'};
	${FileUploadContainer}:hover & {
		transition: 0.3s;
		opacity: 50%;
	}
`;

export const GoBackButton = styled.img`
	cursor:pointer;
`;