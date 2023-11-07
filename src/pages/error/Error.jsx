import React from "react";
import error from "../../assets/icons/error.png";
import { Submitbutton } from "../../components/form/form.style";
import { ErrorIcon, WrapperError, ErrorText } from "./Error.style";

const Error = () => {
  // handleSubmitButton 함수 정의
  const handleSubmitButton = () => {
    window.history.back();
  };

  return (
    <>
      <WrapperError>
        <ErrorIcon>
          <img src={error} alt="에러 아이콘" />
        </ErrorIcon>
        {/* BackBtn 컴포넌트를 import한 후 사용 */}
        {/* handleSubmitButton 함수를 onClick 이벤트 핸들러로 사용 */}
        <ErrorText>페이지를 찾을 수 없어요 :( </ErrorText>
        <Submitbutton
          onClick={handleSubmitButton}
          style={{ width: "120px", height: "44px", marginTop: "20px" }}
        >
          이전 페이지
        </Submitbutton>
      </WrapperError>
    </>
  );
};

export default Error;
