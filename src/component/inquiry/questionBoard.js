import { useState } from "react";
import styled from "styled-components";
import openBtn from "../img/openBtn.png";
import closeBtn from "../img/closeBtn.png";
import { useNavigate } from "react-router-dom";

const Board = styled.div`
  //width: 100vw;
  //position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  //justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 80%;
  max-width: 1000px;
  height: auto;
  font-family: Freesentation;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Question = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;
  flex: 1;
`;
const QSpan = styled.span`
  color: rgba(202, 144, 75, 0.56);
`;
const Button = styled.button`
  margin-left: 10px;
  border: none;
  background: none;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const Answer = styled.div`
  background-color: rgba(239, 214, 187, 0.5);
  padding: 15px;
  font-size: 18px;
  white-space: normal;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const LinkText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
export default function QuestionBoard() {
  const navigate = useNavigate();
  const [showAns, setShowAns] = useState(Array(5).fill(false));

  const toggleAnswer = (i) => {
    setShowAns((prev) => {
      const newShowAnswers = [...prev];
      newShowAnswers[i] = !newShowAnswers[i];
      return newShowAnswers;
    });
  };
  const onClick = (path) => {
    navigate(path);
  };
  const questions = [
    "Q. 인테리어 컨설팅은 어떤 서비스를 제공하나요 ?",
    "Q. 인테리어 컨설팅에 의뢰했는데, 언제 답변을 받을 수 있나요 ?",
    "Q. 매거진 서비스는 어떻게 이용하나요 ?",
    "Q. 자취레터, 공유레터는 어떤 내용을 다루나요 ?",
    "Q. 서비스에 대해 궁금한 점이 있어요. 어디로 연락을 하면 될까요 ?",
  ];
  const answers = [
    "집꾸의 인테리어 컨설팅은 공간 분석, 디자인 제안, 가구 및 소품 추천 등의 종합적인 인테리어 솔루션을 제공합니다.",
    "평균적으로 2주 정도 소요 됩니다. 혹시 더 지연 된다면, 카카오톡 메시지로 지연 알림을 드립니다.",
    "집꾸 홈페이지 - 상단 ‘매거진'을 클릭하여 이용할 수 있습니다. 상세한 내용은 구독자 분들에 한하여 제공되니, 이 점 참고 부탁드립니다.",
    "자취레터는 ‘똑똑한' 자취에 초점을 둔 정보를, 공유레터는 ‘행복한' 자취에 초점을 둔 독자들의 에피소드를 공유합니다.",
    <>
      1:1 문의 게시판에 글을 남겨주세요. 확인 후 순차적으로 답변을 드리겠습니다.
    </>,
  ];

  return (
    <Board>
      {questions.map((question, i) => (
        <Wrapper key={i}>
          <QuestionContainer>
            <Question>
              <QSpan>{question.charAt(0)}</QSpan>
              {question.slice(1)}
            </Question>
            <Button onClick={() => toggleAnswer(i)}>
              <Icon src={showAns[i] ? closeBtn : openBtn} alt="toggle" />
            </Button>
          </QuestionContainer>
          <Answer show={showAns[i]}>
            {i === questions.length - 1 ? (
              <>
                <LinkText onClick={() => onClick("/question")}>
                  1:1 문의 게시판
                </LinkText>
                에 글을 남겨주세요. 확인 후 순차적으로 답변을 드리겠습니다.
              </>
            ) : (
              answers[i]
            )}
          </Answer>
        </Wrapper>
      ))}
    </Board>
  );
}
