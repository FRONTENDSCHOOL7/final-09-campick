import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Title,
  WrapForm,
  InputStyle,
  Incorrect,
  Submitbutton,
} from "../../components/form/form.style.jsx";
import {
  WrapperProfileSetup,
  DescriptionText,
  Upload,
  ProfileImage,
  ImageButton,
  FormElement,
  LabelStyle,
  ImageInput,
  LabelStyleImg,
  ToastContainer,
  ToastMsg,
  ToastMsgBold,
} from "./profileSetup.style.jsx";
import profilePic from "../../assets/icons/profilePic.svg";
import profileImageUploadButton from "../../assets/icons/profileImageUploadButton.svg";
import { Helmet } from "react-helmet-async";
import imageValidation from "../../imageValidation.js";
import { accountNameValid } from "../../api/accountNameApi.js";
import { emailValid, signup } from "../../api/signupApi.js";

const ProfileSetup = () => {
  const exptext = /^[A-Za-z0-9._]+$/;
  const location = useLocation();
  const email = location.state.email;
  const password = location.state.password;
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [validUserId, setValidUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showWrongExtensionToast, setShowWrongExtensionToast] = useState(false);
  const [showSizeOverToast, setShowSizeOverToast] = useState(false);
  const [showProfileEditToast, setShowProfileEditToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      checkValidUserId();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [userId]);

  useEffect(() => {
    const isUserNameValid = userName.length >= 2 && userName.length <= 10;
    const isUserIdValid = exptext.test(userId) && validUserId === false;

    if (isUserNameValid && isUserIdValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userName, userId, validUserId]);

  const onChange = event => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else if (event.target.name === "userid") {
      setUserId(event.target.value);
    } else if (event.target.name === "userintro") {
      setIntro(event.target.value);
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setUserName(value);

    if (value.length >= 2 && value.length <= 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleImageInputChange = async e => {
    imageValidation(
      e,
      1,
      150,
      setSelectedImage,
      setShowSizeOverToast,
      setShowWrongExtensionToast,
    );
  };

  const checkValidUserId = async () => {
    if (userId.length >= 1) {
      if (exptext.test(userId)) {
        const res = await accountNameValid({
          user: { accountname: userId },
        });
        if (res.message === "사용 가능한 계정ID 입니다.") {
          setValidUserId(false);
        } else if (res.message === "이미 가입된 계정ID 입니다.") {
          setValidUserId("checkUserId");
        }
      } else {
        setValidUserId("validUserId");
      }
    } else {
      setValidUserId(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);

    const data = {
      user: {
        username: userName,
        email: email,
        password: password,
        accountname: userId,
        intro: intro,
        image:
          selectedImage === ""
            ? "https://api.mandarin.weniv.co.kr/Ellipse.png"
            : selectedImage,
      },
    };

    try {
      await signup(data);
      setShowProfileEditToast(true);
      setTimeout(() => {
        setShowProfileEditToast(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("회원가입 실패");
    }
  };

  const ProfileSetupToast = () => (
    <>
      {showProfileEditToast && (
        <ToastContainer>
          <ToastMsg>
            <ToastMsgBold>회원가입</ToastMsgBold>이 완료되었습니다.
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );

  const WrongExtensionToast = () => (
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

  const SizeOverToast = () => (
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

  return (
    <>
      <Helmet>
        <title>Campick | 회원가입</title>
      </Helmet>
      <WrapperProfileSetup>
        <Title mb>프로필 설정</Title>
        <DescriptionText>나중에 언제든지 변경할 수 있습니다.</DescriptionText>

        <WrapForm onSubmit={handleSubmit}>
          <Upload>
            <LabelStyleImg htmlFor="user-image">사용자 이미지</LabelStyleImg>
            <ImageInput
              type="file"
              id="user-image"
              accept="image/*"
              onChange={handleImageInputChange}
            />
            <ProfileImage src={selectedImage || profilePic} alt="" />{" "}
            <ImageButton src={profileImageUploadButton} alt="" />
          </Upload>

          <FormElement>
            <LabelStyle htmlFor="user-name">사용자 이름</LabelStyle>
            <InputStyle
              type="text"
              id="user-name"
              name="username"
              placeholder="2~10자 이내여야 합니다."
              value={userName}
              onChange={handleInputChange}
            />
            {!isValid && <Incorrect>* 2~10자 이내여야 합니다.</Incorrect>}
          </FormElement>

          <FormElement>
            <LabelStyle htmlFor="user-id">계정 ID</LabelStyle>
            <InputStyle
              type="text"
              id="user-id"
              name="userid"
              value={userId}
              onChange={onChange}
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
            {validUserId === "validUserId" && (
              <Incorrect>
                * 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
              </Incorrect>
            )}
            {validUserId === "checkUserId" && (
              <Incorrect>* 이미 사용중인 계정 ID입니다.</Incorrect>
            )}
          </FormElement>

          <FormElement>
            <LabelStyle htmlFor="user-intro">소개</LabelStyle>
            <InputStyle
              type="text"
              name="userintro"
              placeholder="자신에 대해서 소개해 주세요!"
              value={intro}
              onChange={onChange}
            />
          </FormElement>

          <Submitbutton disabled={disabled}>캠픽 하러가기</Submitbutton>
        </WrapForm>
        <ProfileSetupToast />
        <WrongExtensionToast />
        <SizeOverToast />
      </WrapperProfileSetup>
    </>
  );
};

export default ProfileSetup;
