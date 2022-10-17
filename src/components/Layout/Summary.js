import styled from 'styled-components';

const Summary = () => {
  return (
    <SummaryWrap>
      <Title>오늘의 과일, 매일과일</Title>
      <p>
        매일과일에서는 갓 수확하여 신선한 제철과일을 구매할 수 있습니다. <br />
        먹고 싶은 과일만 쏙쏙 골라 실패없이 달콤한 과일을 드셔보세요.
      </p>
    </SummaryWrap>
  );
};

export default Summary;

const SummaryWrap = styled.section`
  position: relative;
  width: 70%;
  margin: auto;
  margin-top: -4rem;
  color: var(--color-gray-500);
  text-align: center;
  line-height: 1.5;
  border-radius: 14px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: var(--color-gray-700);
  margin: 0.2rem 0 0;
`;
