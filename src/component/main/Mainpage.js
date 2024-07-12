import styled from "styled-components";
import mainImg from "../img/main1.jpeg";

const Wrapper = styled.div``;
const Img = styled.img`
  width: 1440px;
  height: 800px;
`;
const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function Main() {
  return (
    <Wrapper>
      <Img src={mainImg} />
      <Text>
        인테리어부터 유용한 정보까지, 자취 생활의 길잡이가 되어줄 집꾸 서비스를
        소개합니다.
      </Text>
    </Wrapper>
  );
}
