import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes['spinner-wrap']} aria-label="로딩중">
      <div className={classes.spinner} aria-hidden></div>
    </div>
  );
};

export default LoadingSpinner;
