import React, { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import axios from "axios";

function Thumbnail1({ src, description, onClick, id, publicationDate }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    async function loadBookmarkStatus() {
      try {
        const response = await axios.get(
          "http://3.36.240.5:3000/user/1/share_letters/scraps"
        );

        if (response.data.isSuccess && response.data.code === 2000) {
          const bookmarkedLetters = Array.isArray(response.data.data)
            ? response.data.data
            : [];

          const isBookmarked = bookmarkedLetters.some(
            (letter) => letter.letter_id === id
          );

          setIsBookmarked(isBookmarked);
        } else {
          console.error("북마크 상태를 불러오는 데 실패했습니다:", response.data.message);
        }
      } catch (error) {
        console.error("북마크 상태를 불러오는 데 실패했습니다:", error.message);
      }
    }

    loadBookmarkStatus();
  }, [id]);

  const handleBookmarkClick = async (e) => {
    e.stopPropagation();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 3000,
      };

      let response;
      if (isBookmarked) {
        response = await axios.delete(
          "http://3.36.240.5:3000/share_letters/scrapX",
          {
            data: { user_id: 1, letter_id: id },
            ...config,
          }
        );
      } else {
        response = await axios.post(
          "http://3.36.240.5:3000/share_letters/scrap",
          { user_id: 1, letter_id: id },
          config
        );
      }

      if (response?.data?.isSuccess && response.data.code === 2000) {
        setIsBookmarked(!isBookmarked);
        setPopupMessage(isBookmarked ? "저장 취소되었습니다" : "저장되었습니다");
      } else {
        console.error("오류 코드:", response?.data?.code, "메시지:", response?.data?.message);
        setPopupMessage("오류가 발생했습니다. 다시 시도해주세요.");
      }

      setShowPopup(true);
    } catch (error) {
      if (error.response) {
        console.error(
          "북마크 처리 중 오류 발생:",
          "상태 코드:",
          error.response.status,
          "메시지:",
          error.response.data.message
        );
        setPopupMessage("서버 오류가 발생했습니다. 관리자에게 문의 바랍니다.");
      } else if (error.request) {
        console.error("서버로부터 응답이 없습니다. 요청 데이터:", error.request);
        setPopupMessage("서버 응답이 없습니다. 네트워크를 확인해주세요.");
      } else {
        console.error("요청 설정 오류:", error.message);
        setPopupMessage("요청을 처리하는 중 오류가 발생했습니다.");
      }
      setShowPopup(true);
    }
  };

  const handleConfirmClick = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <div className="thumbnail" onClick={onClick}>
      <div className="thumbnail-image-container">
        <img src={src} alt={`thumbnail-${id}`} className="thumbnail-image" />
        <button
          className={`bookmark-button ${isBookmarked ? "bookmarked" : ""}`}
          onClick={handleBookmarkClick}
        >
          {isBookmarked ? (
            <BsBookmarkFill color="white" size={24} />
          ) : (
            <BsBookmark color="white" size={24} />
          )}
        </button>
      </div>
      <p className="thumbnail-description">{description}</p>
      <p className="thumbnail-date">{publicationDate}</p>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <button className="confirm-button" onClick={handleConfirmClick}>
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thumbnail1;
