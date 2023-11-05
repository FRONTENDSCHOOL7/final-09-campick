import { ToastContainer, ToastMsg, ToastMsgBold } from "./Toast.style";

export const WrongExtensionToast = ({ showWrongExtensionToast }) => (
  <>
    {showWrongExtensionToast && (
      <ToastContainer>
        <ToastMsg>
          <ToastMsgBold>이미지</ToastMsgBold>만 업로드 해주세요!
        </ToastMsg>
      </ToastContainer>
    )}
  </>
);

export const CompleteToast = ({ showCompleteToast, text }) => (
  <>
    {showCompleteToast && (
      <ToastContainer>
        <ToastMsg>
          <ToastMsgBold>{text}</ToastMsgBold>이 완료되었습니다.
        </ToastMsg>
      </ToastContainer>
    )}
  </>
);

export const SizeOverToast = ({ showSizeOverToast }) => (
  <>
    {showSizeOverToast && (
      <ToastContainer>
        <ToastMsg>
          <ToastMsgBold>10MB</ToastMsgBold>이하의 파일만 업로드 해주세요!
        </ToastMsg>
      </ToastContainer>
    )}
  </>
);
export const DeletePostToast = ({ deleteMsg }) => {
  console.log(deleteMsg);
  return (
    <>
      {deleteMsg && (
        <ToastContainer>
          <ToastMsg>
            <ToastMsgBold>{deleteMsg.message}</ToastMsgBold>
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );
};
export const NotAvailable = ({ showNotAvailable }) => (
  <>
    {showNotAvailable && (
      <ToastContainer>
        <ToastMsg>
          현재 <ToastMsgBold>지원하지 않는 기능</ToastMsgBold>입니다!
        </ToastMsg>
      </ToastContainer>
    )}
  </>
);
