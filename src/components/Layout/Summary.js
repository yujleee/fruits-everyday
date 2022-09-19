import classes from './Summary.module.css';

const Summary = () => {
  return (
    <section className={classes.summary}>
      <h2>오늘의 과일, 매일과일</h2>
      <p>
        원하는 과일만 골라 가장 맛있을 때 구매하세요!
        <br />
        매일과일에서는 갓 수확하여 신선한 제철과일을 구매할 수 있습니다. <br />
        먹고 싶은 과일만 쏙쏙 골라 실패없이 달콤한 과일을 드셔보세요.
      </p>
    </section>
  );
};

export default Summary;
