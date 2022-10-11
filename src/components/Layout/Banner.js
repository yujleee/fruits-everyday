import classes from './Banner.module.css';

const Banner = () => {
  return (
    <div className={classes.bnr} role="img">
      <img src="/images/fruits-bnr.jpg" alt="배너" />
    </div>
  );
};

export default Banner;
