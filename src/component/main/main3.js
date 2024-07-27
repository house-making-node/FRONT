import styled from "styled-components";
import main3Img from "../img/main3.jpeg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Img3 = styled.img`
  width: 410px;
  height: 308px;
  border-radius: 20px;
`;
const Wrappertext = styled.div`
  margin: 200px 100px;
`;
const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
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

const H2 = styled.div`
  font-family: Freesentation;
  font-size: 50px;
  font-weight: 500;
  line-height: 58.45px;
  text-align: left;
  color: rgba(202, 144, 75, 0.56);
  margin: 35px 35px 35px 50px;
`;
const Text = styled.span`
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
export default function Main3() {
  return (
    <Wrapper>
      <Wrappertext>
        <TitleLine>
          <Title>집꾸 service 02</Title>
        </TitleLine>
        <H2>매거진</H2>
        <Text>
          <p>
            집꾸의 매거진은 자취 생활 중에 생긴{" "}
            <Bold>인테리어 고민에 대한 솔루션</Bold>을 제공합니다.
          </p>
          <div>
            또한 다양한 <Bold>자취생들의 이야기</Bold>를 공유합니다.
          </div>
          <div>
            자신의 공간을 어떻게 꾸며나가고 있는지 등 서로의 경험을 공유하여
            영감을 주고 받을 수 있어요.
          </div>
          <p>
            집꾸의 매거진을 통해 인테리어에 대한 새로운 시각을 발견하고 똑똑한
            자취 생활을 시작해보세요.
          </p>
        </Text>
      </Wrappertext>
      <Img3 src={main3Img} />
    </Wrapper>
  );
}
