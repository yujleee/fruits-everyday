import classes from './FruitsItem.module.css';

const FruitsItem = ({ id, name, description, price, image }) => {
  return (
    <div className={classes['fruits-item']}>
      <div className={classes.img}>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p classes={classes['fruit-price']}>
        <b>{price}원</b>
      </p>
    </div>
  );
};

export default FruitsItem;
