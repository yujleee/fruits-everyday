import styled from 'styled-components';

const Banner = () => {
  return (
    <MainVisual role="img">
      <img src="/images/fruits-bnr.jpg" alt="배너" />
    </MainVisual>
  );
};

export default Banner;

const MainVisual = styled.div`
  padding: -5rem;
  width: 100%;
  height: auto;
  margin: 80px 0 8em;
  text-align: center;

  & > img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 720px) {
    margin: 80px 0 10em;
  }

  @media screen and (min-width: 1200px) {
    margin: 80px 0 12em;
  }
`;
