const FruitsItem = ({ id, name, description, price, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>
        <b>{price}</b>
      </p>
    </div>
  );
};

export default FruitsItem;
