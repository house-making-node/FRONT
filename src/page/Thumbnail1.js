import React from "react";
import { useState } from "react";
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";

function Thumbnail1({ id, src, description, onClick }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (isBookmarked) {
      setPopupMessage("저장 취소되었습니다");
    } else {
      setPopupMessage("저장되었습니다");
    }
    setIsBookmarked(!isBookmarked);
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
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

export default Thumbnail1;
