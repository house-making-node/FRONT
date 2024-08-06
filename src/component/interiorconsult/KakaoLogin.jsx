// //KakaoLogin.jsx
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import kakaoLoginImage from '../img/kakaoLogin1.png';

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #ffffff;
// `;

// const KakaoButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 0;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const KakaoImage = styled.img`
//   width: 712px; /* 제공된 이미지 크기 */
//   height: 106px; /* 제공된 이미지 크기 */
// `;

// const KakaoLogin = () => {
//   useEffect(() => {
//     // 카카오 SDK 초기화
//     if (!window.Kakao.isInitialized()) {
//       window.Kakao.init('Y4f4290717fd5a338535c03567b23eb45'); // 여기에 카카오 JavaScript 키를 입력하세요.
//     }
//   }, []);

//   const handleLogin = () => {
//     window.Kakao.Auth.login({
//       success: function (authObj) {
//         console.log('카카오 로그인 성공', authObj);
//         // 카카오 로그인 성공 후 처리 로직
//         window.location.href = '/agreement'; // 동의 화면으로 이동
//       },
//       fail: function (err) {
//         console.error('카카오 로그인 실패', err);
//       },
//     });
//   };

//   return (
//     <LoginContainer>
//       <KakaoButton onClick={handleLogin}>
//         <KakaoImage src={kakaoLoginImage} alt="카카오 로그인" />
//       </KakaoButton>
//     </LoginContainer>
//   );
// };

// export default KakaoLogin;

//---------------------------------------------------

// import React, { useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import kakaoLoginImage from '../img/kakaoLogin1.png';

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #ffffff;
// `;

// const KakaoButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 0;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const KakaoImage = styled.img`
//   width: 712%;  // 제공된 이미지 크기
//   height: 106% // 제공된 이미지 크기
// `;

// const KakaoLogin = () => {
//   useEffect(() => {
//     // 카카오 SDK 스크립트 동적 로딩
//     const script = document.createElement('script');
//     script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
//     script.onload = () => {
//       // 스크립트 로딩 완료 후, 카카오 SDK 초기화
//       if (window.Kakao && !window.Kakao.isInitialized()) {
//         // 여기에 카카오 JavaScript 키를 입력하세요.
//         window.Kakao.init('4f4290717fd5a338535c03567b23eb45');
//       }
//     };
//     document.head.appendChild(script);

//     // 컴포넌트 언마운트 시 스크립트 제거
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const handleLogin = () => {
//     if (window.Kakao) {
//       window.Kakao.Auth.login({
//         success: function (authObj) {
//           console.log('카카오 로그인 성공', authObj);
//           // 카카오 로그인 성공 후 처리 로직
//           window.location.href = '/agreement'; // 동의 화면으로 이동
//         },
//         fail: function (err) {
//           console.error('카카오 로그인 실패', err);
//         },
//       });
//     } else {
//       console.error('Kakao SDK not loaded');
//     }
//   };

//   return (
//     <LoginContainer>
//       <KakaoButton onClick={handleLogin}>
//         <KakaoImage src={kakaoLoginImage} alt="카카오 로그인" />
//       </KakaoButton>
//     </LoginContainer>
//   );
// };

// export default KakaoLogin;


import React, { useEffect } from 'react';
import styled from 'styled-components';
import kakaoLoginImage from '../img/kakaoLogin1.png';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const KakaoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoImage = styled.img`
  width: 712px; /* 제공된 이미지 크기 */
  height: 106px; /* 제공된 이미지 크기 */
`;

const KakaoLogin = () => {
  useEffect(() => {
    // 카카오 SDK 스크립트 동적 로딩
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = () => {
      // 스크립트 로딩 완료 후, 카카오 SDK 초기화
      if (window.Kakao && !window.Kakao.isInitialized()) {
        // 여기에 카카오 JavaScript 키를 입력하세요.
        window.Kakao.init('4f4290717fd5a338535c03567b23eb45');
      }
    };
    document.head.appendChild(script);

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleLogin = () => {
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: function (authObj) {
          console.log('카카오 로그인 성공', authObj);
          // 카카오 로그인 성공 후 처리 로직
          window.location.href = '/agreement'; // 동의 화면으로 이동
        },
        fail: function (err) {
          console.error('카카오 로그인 실패', err);
        },
      });
    } else {
      console.error('Kakao SDK not loaded');
    }
  };

  return (
    <LoginContainer>
      <KakaoButton onClick={handleLogin}>
        <KakaoImage src={kakaoLoginImage} alt="카카오 로그인" />
      </KakaoButton>
    </LoginContainer>
  );
};

export default KakaoLogin;