import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 140px;
`;
const HeadTitle = styled.div`
  font-family: Freesentation;
  font-size: 30px;
  font-weight: 400;
  line-height: 35.07px;
  text-align: left;
  margin: 20px;
`;
const ContentBox = styled.div`
  background-color: rgba(243, 243, 243, 1);
  padding: 10px;
  width: 656px;
`;
const Content = styled.div`
  margin: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AgreeBox = styled.div`
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 10px;
  width: 656px;
`;
const Input = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(179, 179, 179, 1);
  cursor: pointer;

  &:checked {
    background-color: rgba(202, 144, 75, 0.41);
    border: none;
  }
`;
const Title = styled.div`
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: left;
  width: 656px;
  margin: 10px;
`;
const Titlearea = styled.input`
  border: 1px solid rgba(179, 179, 179, 1);
  width: 656px;
  height: 50px;
`;

const Contentarea = styled.textarea`
  border: 1px solid rgba(179, 179, 179, 1);
  width: 656px;
  height: 321px;
  padding-top: 20px;
  box-sizing: border-box;
  resize: none;
`;
const Button = styled.button`
  cursor: pointer;
  width: 217px;
  height: 68px;
  border-radius: 6px;
  border: none;
  margin: 20px;
  background-color: rgba(202, 144, 75, 0.41);
  color: rgba(255, 255, 255, 1);
  font-family: Freesentation;
  font-size: 20px;
  font-weight: 260;
  line-height: 23.38px;
  &:disabled {
    background-color: rgba(202, 144, 75, 0.3);
    cursor: not-allowed;
  }
`;

export default function PersonalBoard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    //서버 연결예정
    console.log(data);
    reset(); // 폼 리셋
  };
  const isButtonEnabled =
    watch("isChecked") && watch("title") && watch("content");

  return (
    <Wrapper>
      <HeadTitle>1:1 문의하기 개인 정보 수집. 이용 동의</HeadTitle>
      <ContentBox>
        <Content>
          <div>1. 개인 정보의 수집 및 이용의 목적</div>
          불만 처리 의사소통 경로 확보, 기타 원활한 양질의 서비스 제공, 문의
          접수, 상담 및 처리결과 회신
        </Content>
        <Content>
          <div>2. 개인 정보의 항목</div>
          <div>(필수)이름</div>
          <div>(선택) 휴대폰 번호, 이메일 주소</div>
        </Content>
        <Content>
          <div>3. 동의 거부 권리에 대한 사항 </div>
          <div>
            귀하는 본 개인 정보 수집 및 이용 동의를 거부할 권리가 있습니다. 단,
            동의를 거부 시, 문의하기 서비스 이용이 제한될 수 있습니다.
          </div>
        </Content>
      </ContentBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AgreeBox>
          <Input
            type="checkbox"
            {...register("isChecked", { required: true })}
          ></Input>
          <label>(필수) 동의합니다. </label>
        </AgreeBox>
        <Title>제목</Title>
        <Titlearea
          {...register("title", { required: true })}
          placeholder=": 여기를 클릭해주세요."
          required
        ></Titlearea>
        <Title>문의 사항</Title>
        <Contentarea
          {...register("content", { required: true })}
          placeholder=": 여기를 클릭해주세요."
          required
        ></Contentarea>
        <Button type="submit" disabled={!isButtonEnabled}>
          문의하기
        </Button>
      </Form>
    </Wrapper>
  );
}
