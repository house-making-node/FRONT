import styled from "styled-components";
import main2Img from "../img/main2.jpeg";

/*
const Wrapper = styled.div`
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 200px 10px 200px 100px;
  background-color: rgba(255, 255, 255, 1);
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
*/
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Img2 = styled.img`
  width: 100%;
  max-width: 410px;
  height: 308px;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 100px;
`;
const Wrappertext = styled.div`
  margin: 100px 70px 100px 70px;
`;
const TitleLine = styled.div`
  display: flex;
  align-items: row;
`;

const Title = styled.div`
  font-family: Freesentation;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.06px;
  text-align: left;
  margin-left: 10px;
  position: relative;

  &::after {
    content: "";
    border: 1px solid rgba(0, 0, 0, 1);
    width: 260px;
    position: absolute;
    top: 50%;
    left: 160%;
  }
`;

/*
const Border = styled.div`
  border: 1px solid rgba(0, 0, 0, 1);
  width: 260px;
  margin-left: 40px;
`;
*/
const H2 = styled.div`
  font-family: Freesentation;
  font-size: 40px;
  font-weight: 500;
  line-height: 58.45px;
  margin: 30px;
  color: rgba(202, 144, 75, 0.56);
`;
const Text = styled.span`
  //white-space: normal;
  font-family: Freesentation;
  font-weight: 260;
  line-height: 23.38px;
  text-align: left;
`;
const Bold = styled.span`
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: left;
`;
export default function Main2() {
  return (
    <Wrapper>
      <Img2 src={main2Img} />
      <Wrappertext>
        <TitleLine>
          <Title>집꾸 service 01</Title>
        </TitleLine>
        <H2>인테리어 컨설팅</H2>
        <Text>
          <p>
            집꾸는 <Bold>좁은 자취방을 활용</Bold>할 수 있는 실용적인 솔루션을
            제공합니다.
          </p>
          <div>
            인테리어 컨설턴트와 디자이너들이 공간을 분석하고 취향과 요구사항을
            바탕으로
          </div>
          <div>
            <Bold>최적의 인테리어 디자인을 제안</Bold>합니다.
          </div>
          <p>
            단순히 공간을 꾸미는 것을 넘어 자취방이 보다 기능적이고 편안한
            공간으로 거듭날 수 있도록 도와드려요.
          </p>
        </Text>
      </Wrappertext>
    </Wrapper>
  );
}
