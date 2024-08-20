import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import "./letter1.css";
import SubscriptionModal from "./SubscriptionalModal1";
import Thumbnail from "./Thumbnail1";
import mirror from "../component/img/mirror.png";
import running from "../component/img/running.png";
import room from "../component/img/room.png";
import house from "../component/img/house.png";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const Button = styled.button`
  width: 217px;
  height: 68px;
  padding: 10px;
  background-color: #CA904B69;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 200px;
  font-size: 18px;
  font-weight: 400;
  margin-left: 600px;

  &:hover {
      background-color: #CA904B72;
      }
  `;

  const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

const PopupContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const PopupMessage = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background-color: #e6c793;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #CA904B72;
  }
`;

function MemberShareletter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showSubscriptionCompletedPopup, setShowSubscriptionCompletedPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Location state:", location.state);
    if (location.state?.subscriptionCompleted) {
      console.log("Popup should be displayed");
      setShowSubscriptionCompletedPopup(true);
    }
  }, [location.state]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleButtonClick = () => {
    navigate('/share-letter-page');
  };

  const closeSubscriptionCompletedPopup = () => {
    setShowSubscriptionCompletedPopup(false);
  };


  return (
    <div className="ShareLetter">
      <header className="ShareLetter-header">
        <img src={house} alt='house'/>
        <h1>똑똑한 자취를 위한, 공유레터</h1>
        <p>고민상담부터 생활 지식까지 매주 금요일에 만나요.</p>
        <SubscriptionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </header>
      <div className="thumbnails">
        <Thumbnail
          id={1}
          src={mirror}
          description="독자님의 가장 큰 인테리어 고민은 무엇인가요 ?"
        />
        <Thumbnail
          id={2}
          src={running}
          description="똑똑한 자취, OO이 필수라고 ?"
        />
        <Thumbnail
          id={3}
          src={mirror}
          description="자취생을 위한 돈 관리 방법"
        />
        <Thumbnail
          id={4}
          src={room}
          description="이미 구매한 물건을 또 구매하고 있다면 !"
        />
      </div>
      <Button onClick={handleButtonClick} className="subscribe-button">
          내 고민 보내기
      </Button>
      <Button onClick={handleButtonClick} className="subscribe-button">
          내 고민 보내기
      </Button>
      {showSubscriptionCompletedPopup && (
        <PopupOverlay>
          <PopupContainer>
            <PopupMessage>구독이 완료되었습니다!</PopupMessage>
            <CloseButton onClick={closeSubscriptionCompletedPopup}>확인</CloseButton>
          </PopupContainer>
        </PopupOverlay>
      )}
    </div>
  );
}

export default MemberShareletter;
