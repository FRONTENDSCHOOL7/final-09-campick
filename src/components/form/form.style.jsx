import styled from 'styled-components';


export const WrapForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`;

export const WrapEmailPw = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const LabelStyle = styled.label`
	color: #767676;
	font-size: 12px;
`;

export const InputStyle = styled.input`
	font-family: 'Suit-Regular';
	border: none;
	padding-bottom: 8px;
	border-bottom: 1px solid #dbdbdb;
	&:focus {
		outline: none;
		border-color: #7CB45B;
    // 비밀번호가 틀렸으면 색상 바꿔야함
	}
	&::placeholder {
		color: #dbdbdb;
	}
`;

export const Correct = styled.span`
	box-sizing: border-box;
	color: #03c75a;
	font-size: 12px;
`;

export const Incorrect = styled.span`
	box-sizing: border-box;
	color: #eb5757;
	font-size: 12px;
`;

export const Title = styled.h1`
	font-family: 'Suit-Bold';
	display: block;
	text-align: center;
	font-size: 24px;
	margin-bottom: ${({ mb }) => (mb === true ? `16px` : 0)};
`;

export const Submitbutton = styled.button`
	font-family: 'Suit-Regular';
	font-size: 14px;
	background-color: #7CB45B;
	opacity: ${({ disabled }) => (disabled === true ? 0.3 : 1)};
	display: block;
	width: 100%;
	color: white;
	height: 48px;
	border-radius: 44px;
	border: none;
	margin-top: 14px;

	cursor: ${({ disabled }) => (disabled === true ? 'not-allowed' : 'pointer')};
`;