import styled from 'styled-components';

const Footer = () => {
  return (
    <Ft>
      <h2>매일과일</h2>
      <p>ⓒ2022.매일과일.All rights reserved.</p>
    </Ft>
  );
};

export default Footer;

const Ft = styled.footer`
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  background-color: var(--color-footer);
  color: var(--color-white);
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > h2 {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  & > p {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 720px) {
    height: 100px;
    padding: 0 16rem;
    display: block;

    & > h2 {
      margin: 0;
      margin-bottom: 0.4rem;
      padding-top: 1.2rem;
      font-size: 1.4rem;
    }

    & > p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;
