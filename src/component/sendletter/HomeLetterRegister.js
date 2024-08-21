import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import "./letter.css";
import SubscriptionModal from "./SubscriptionalModal";
import Thumbnail from "./Thumbnail";
import mirror from "../img/mirror.png";
import running from "../img/running.png";
import room from "../img/room.png";
import house from "../img/house.png";
import axios from "axios";
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
  background-color: rgba(204, 204, 204, 0);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 3000;
`;

const PopupContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 140px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-top: 120px;
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
const localImages = [mirror, running, mirror, room];

function MemberHomeletter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showSubscriptionCompletedPopup, setShowSubscriptionCompletedPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [letters, setLetters] = useState([]);


  useEffect(() => {

    async function fetchLetters() {
      try {
        const response = await axios.get('http://3.36.240.5:3000/home_letters', {
          params: {
            page: 0, // Set the desired page
            size: 4 // Set the desired size
          }
        });
        console.log(response.data)

        if (response.data.isSuccess && response.data.code === 2000) {
          // Update state with fetched letters
          setLetters(response.data.result.Letter.slice(0,4));
          console.log("성공:", response.data);
        } else {
          console.error("Failed to fetch letters:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch letters:", error);
      }
    }

    fetchLetters();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleButtonClick = () => {
    navigate('/home-letter-page');
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleThumbnailClick = (id, index) => {
    navigate(`/home-letter-story/${id}`, { state: { letters, currentIndex: index } });
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  useEffect(() => {
    // 구독 완료 상태 확인
    if (location.state?.subscriptionCompleted) {
      setShowSubscriptionCompletedPopup(true);  // 팝업 표시
    }
  }, [location.state]);

  const closeSubscriptionCompletedPopup = () => {
    setShowSubscriptionCompletedPopup(false);
  };


  return (
    <div className="HomeLetter">
      <header className="HomeLetter-header">
        <img src={house} alt='house'/>
        <h1>똑똑한 자취를 위한, 자취레터</h1>
        <p>고민상담부터 생활 지식까지 매주 금요일에 만나요.</p>
        <SubscriptionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </header>
      <div className="thumbnails">
        {letters.map((letter,index) => (
          <Thumbnail
            key={letter.letter_id}
            id={letter.letter_id}
            src={localImages[index % localImages.length]}
            // src={letter.s3_key ? `http://3.36.240.5:3000/home_letters/${letter.s3_key}`:localImages[index % localImages.length]}
            description={letter.title}
            onClick={() => handleThumbnailClick(letter.letter_id, index)}
            publicationDate={formatDate(new Date(letter.created_at))}
          />
        ))}
      </div>
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

export default MemberHomeletter;
