import styled from "styled-components";
import main1Img from "../img/main1.jpeg";

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
`;
const Img1 = styled.img`
  //width: 1440px;
  width: 100%;
  height: 800px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`;

const Text = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 260;
  line-height: 23.38px;
`;
const Bold = styled.span`
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: center;
`;

export default function Main1() {
  return (
    <Wrapper>
      <Img1 src={main1Img} />
      <Text>
        <div>
          인테리어부터 유용한 정보까지, 자취 생활의 길잡이가 되어줄 집꾸
          서비스를 소개합니다.
        </div>
        <div>
          우리는 집을 더 나은 공간으로 만들어줄 <Bold>인테리어 컨설팅</Bold>과
          자취 생활을 더욱 풍요롭게 만들어줄 <Bold>매거진</Bold>을 제공합니다.
        </div>
        <div>집꾸를 통해 자취 생활을 더욱 즐겁고 효율적으로 만들어보세요.</div>
      </Text>
    </Wrapper>
  );
}
