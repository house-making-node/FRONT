import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function SubscriptionModal({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2>구독하기</h2>
      <form>
        <div>
          <label>이름:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>이메일 주소:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>
            <input type="checkbox" name="privacy" required />
            개인정보수집 이용 동의
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="ads" />
            광고성 정보수신 동의
          </label>
        </div>
        <button type="submit">제출</button>
      </form>
      <button onClick={onRequestClose}>닫기</button>
    </Modal>
  );
}

export default SubscriptionModal;