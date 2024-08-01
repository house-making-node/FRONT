import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../header/Navbar";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 140px; /* Navbar 높이 + 여백 */
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	min-height: 70vh; /* 전체 화면 높이 */
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px; /* Box와의 간격 */
	align-self: flex-start; /* 왼쪽 정렬 */
	margin-left: calc((100vw - 1078px) / 2); /* Box와 맞추기 위해 왼쪽 여백 설정*/
`;

const Title = styled.div`
	font-size: 40px;
	font-weight: 700;
	line-height: 46px;
	text-align: left;
	color: rgba(202, 144, 75, 0.56); /* #CA904B8F 56% */
`;

const StepBoxes = styled.div`
	display: flex;
	margin-left: 31px; /* Title과의 간격 */
	margin-top: 40px;
`;

const StepBox = styled.div`
	width: 111px;
	height: 21px;
	background-color: ${(props) => (props.active ? "#CA904B69" : "#E0E0E0")}; /* 활성화된 StepBox 배경색 설정 */
	margin-left: ${(props) => (props.index > 0 ? "30px" : "0")}; /* 첫 번째 StepBox는 간격 없음 */
`;

const Box = styled.div`
	width: 1078px;
	height: 582px;
	border-radius: 15px;
	border: 1px solid #b0b0b0;
	padding: 10px;
	margin-bottom: 20px; /* 버튼과의 간격 */
	display: flex;
	flex-direction: column;
	justify-content: space-between; /* 상하 공간 분배 */
	align-items: center; /* 수평 중앙 정렬 */
`;

const HalfBox = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center; /* 수직 중앙 정렬 */
	align-items: center; /* 수평 중앙 정렬 */
	&:first-of-type {
		margin-top: 70px; /* 기존 간격에서 줄임 */
	}
	&:last-of-type {
		margin-bottom: 70px; /* 기존 간격에서 줄임 */
	}
`;

const Label = styled.label`
	width: 379px;
	height: 42px;
	font-size: 20px;
	font-weight: 400;
	line-height: 29.23px;
	text-align: center;
	color: #000000;
	margin-bottom: 30px; /* 옵션 간의 간격 증가 */
`;

const Option = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	margin-bottom: 20px; /* 옵션 간의 간격 */
`;

const FileButton = styled.label`
	width: 217px;
	height: 40px;
	background: #e9e9e9;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;
	overflow: hidden;
`;

const FileButtonText = styled.span`
	width: 69px;
	height: 26px;
	font-size: 18px;
	line-height: 25.72px;
	text-align: left;
	color: #00000099;
`;

const HiddenInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1078px; /* Box의 너비와 동일하게 설정 */
	margin-top: 30px; /* 버튼과 Box 간의 간격 추가 */
`;

const StyledButton = styled.button`
	width: 150px; /* 버튼의 너비 설정 */
	height: 55px; /* 버튼의 높이 설정 */
	border-radius: 6px; /* 버튼의 모서리 둥글게 설정 */
	background: ${(props) => (props.disabled ? "#d3d3d3" : "#ca904b69")}; /* 비활성화 시 회색 배경 */
	font-size: 24px; /* 글씨 크기 설정 */
	font-weight: 400; /* 글씨 두께 설정 */
	line-height: 28.06px; /* 글씨 줄 높이 설정 */
	color: #ffffff; /* 글씨 색상 설정 */
	border: none; /* 버튼의 테두리 제거 */
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; /* 비활성화 시 커서 변경 */
`;

const SpecialButton = styled.button`
	width: 31.3px;
	height: 29.33px;
	border-radius: 200px;
	border: 1px solid #c7b19980;
	background: transparent;
	cursor: pointer;
	margin-left: 10px; /* Label 옆에 간격 추가 */
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const LabelContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center; /* 중앙 정렬 */
	width: 100%;
`;

const LabelWithButton = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 0; /* 오른쪽에 배치 */
`;

function Step3Page() {
	const navigate = useNavigate();
	const [isPhotoUploaded, setIsPhotoUploaded] = useState(false); // 사진 업로드 상태
	const [isBlueprintUploaded, setIsBlueprintUploaded] = useState(false); // 도면 업로드 상태

	useEffect(() => {
		const userName = localStorage.getItem("userName");
		if (userName) {
			document.getElementById("userNamePhoto").innerText = userName;
			document.getElementById("userNameBlueprint").innerText = userName;
		}
	}, []);

	const handlePhotoChange = () => {
		setIsPhotoUploaded(true); // 사진이 업로드되면 상태 변경
	};

	const handleBlueprintChange = () => {
		setIsBlueprintUploaded(true); // 도면이 업로드되면 상태 변경
	};

	return (
		<div>
			<Navbar />
			<Container>
				<TitleContainer>
					<Title>STEP 03</Title>
					<StepBoxes>
						{[1, 2, 3, 4].map((step, index) => (
							<StepBox key={index} active={step === 3} index={index} />
						))}
					</StepBoxes>
				</TitleContainer>
				<Box>
					<HalfBox>
						<Option>
							<Label id="photoLabel">
								<span id="userNamePhoto"></span>님, 사진을 업로드해 주세요.
							</Label>
							<FileButton>
								<FileButtonText>파일 선택</FileButtonText>
								<HiddenInput type="file" id="photoUpload" name="photoUpload" onChange={handlePhotoChange} />
							</FileButton>
						</Option>
					</HalfBox>
					<HalfBox>
						<Option>
							<LabelContainer>
								<Label id="blueprintLabel">
									<span id="userNameBlueprint"></span>님, 도면을 업로드해 주세요.
								</Label>
								<LabelWithButton>
									<SpecialButton>?</SpecialButton>
								</LabelWithButton>
							</LabelContainer>
							<FileButton>
								<FileButtonText>파일 선택</FileButtonText>
								<HiddenInput type="file" id="blueprintUpload" name="blueprintUpload" onChange={handleBlueprintChange} />
							</FileButton>
						</Option>
					</HalfBox>
				</Box>
				<ButtonContainer>
					<StyledButton type="button" onClick={() => navigate("/consulting/step2Page")}>
						이전
					</StyledButton>
					<StyledButton type="button" onClick={() => navigate("/consulting/exitPage")}>
						나가기
					</StyledButton>
					<StyledButton type="button" onClick={() => navigate("/consulting/step4Page")} disabled={!(isPhotoUploaded && isBlueprintUploaded)}>
						다음
					</StyledButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}

export default Step3Page;