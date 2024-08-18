import React from "react";
import { useState, useEffect } from "react";
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import axios from "axios";

function Thumbnail({ src, description, onClick, id, publicationDate}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    async function loadBookmarkStatus() {
      try {
        const response = await axios.get('http://3.36.240.5:3000/user/{user_id}/share_letters/scraps', {
          params: {
            user_id: 1, // 현재 사용자 ID
          }
        });
        console.log(response.data);

        const bookmarkedLetters = response.data.result;

        const isBookmarked = bookmarkedLetters.some(letter => letter.letter_id === id);

        // 서버로부터 북마크 상태를 받아와서 설정
        setIsBookmarked(isBookmarked);
      } catch (error) {
        console.error('북마크 상태를 불러오는 데 실패했습니다:', error);
      }
    }

    loadBookmarkStatus();
  }, [id]);

  const handleBookmarkClick = async (e) => {
    e.stopPropagation();
    console.log("북마크 클릭됨")


  console.log('letter_id:', id);
  // console.log('id:', id);
  // console.log('num:', num);

    try {
      let response;
      const config ={
        timeout: 3000,
      }

      if (isBookmarked) {

        response = await axios.delete('http://3.36.240.5:3000/home_letters/scrap', {
          data: {user_id: 1, 
            letter_id: id }, ...config
        });
      } else {

        response = await axios.post('http://3.36.240.5:3000/home_letters/scrap', 
          {user_id: 1, 
            letter_id: id }, config
        );
      }

      
      // console.error();


      if (response.data.isSuccess && response.data.code === 2000) {
        setIsBookmarked(!isBookmarked);
        setPopupMessage(isBookmarked ? "저장 취소되었습니다" : "저장되었습니다");
        console.log('Response:', response.data);
        setShowPopup(true);
      } else {
        setPopupMessage("오류가 발생했습니다. 다시 시도해주세요.");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("북마크 처리 중 오류 발생:", error);
      setPopupMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setShowPopup(true);
    }
  };

  const handleConfirmClick = (e) => {
    setShowPopup(false);
    e.stopPropagation();
  }

  return (
    <div className="thumbnail" onClick={onClick}>
      <div className="thumbnail-image-container">
        <img src={src} alt={`thumbnail-${id}`} className="thumbnail-image" />
        <button  className={`bookmark-button ${isBookmarked ? "bookmarked" : ""}`}
        onClick={handleBookmarkClick}>
          {isBookmarked ? (
            <BsBookmarkFill color="white" size={24}/>
          ) : (<BsBookmark color = "white" size={24} />
          )}
        </button>
      </div>
      <p className="thumbnail-description">{description}</p>
      <p className="thumbnail-date">{publicationDate}</p>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <button className="confirm-button" onClick={handleConfirmClick}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thumbnail;

