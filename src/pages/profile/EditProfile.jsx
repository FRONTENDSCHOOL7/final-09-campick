import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { DescriptionText, FormElement, ImageButton, ImageInput, LabelStyle, LabelStyleImg, ProfileImage, Upload, WrapperProfileSetup } from '../profileSetup/profileSetup.style'
import { Incorrect, InputStyle, Title, WrapForm } from '../../components/form/form.style'
import { Submitbutton } from '../../components/form/form.style';
import { CompleteToast, SizeOverToast, WrongExtensionToast } from '../../components/toast/Toast';
import { useNavigate } from 'react-router';
import profilePic from "../../assets/icons/profilePic.svg";
import imageValidation from '../../imageValidation';
import { accountNameValid } from '../../api/accountNameApi';
import profileImageUploadButton from "../../assets/icons/profileImageUploadButton.svg";
import { editprofile } from '../../api/editProfileApi';
import HeaderText from '../../components/header/HeaderText';

export default function EditProfile() {

  const exptext = /^[A-Za-z0-9._]+$/;
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [validUserId, setValidUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [selectedImage, setSelectedImage] = useState(profilePic);
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
        accountname: userId,
        intro: intro,
        image: selectedImage,
      },
    };

    try {
      const profileRes = await editprofile(data);
      setShowProfileEditToast(true);
      setTimeout(() => {
        setShowProfileEditToast(false);
        console.log(profileRes)
        localStorage.setItem("accountname",userId)
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.error("프로필 수정 실패");
    }
  };

  return (
    <>
      <Helmet>
        <title>Campick | 프로필 수정</title>
      </Helmet>
      <HeaderText text = {""}/>
      <WrapperProfileSetup>
        <Title>프로필 수정</Title>
        <DescriptionText>변경사항을 입력해주세요.</DescriptionText>

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

          <Submitbutton disabled={disabled}>저장</Submitbutton>
        </WrapForm>
        <CompleteToast
          showCompleteToast={showProfileEditToast}
          text="프로필 수정"
        />
        <WrongExtensionToast
          showWrongExtensionToast={showWrongExtensionToast}
        />
        <SizeOverToast showSizeOverToast={showSizeOverToast} />
      </WrapperProfileSetup>
    </>
  )
}
