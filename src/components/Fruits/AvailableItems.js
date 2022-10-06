import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

import FruitsItem from './FruitsItem/FruitsItem';
import { dataActions } from '../../store/data-slice';
import classes from './AvailableItems.module.css';

const AvailableItems = () => {
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.data.fruits);

  const fetchData = useCallback(async () => {
    const response = await fetch('https://fruits-everyday-default-rtdb.firebaseio.com/fruits.json');

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        image: data[key].image,
        price: data[key].price,
      });
    }

    dispatch(dataActions.loadData({ loadedData }));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fruitItems = fruits.map((fruit) => (
    <FruitsItem
      key={fruit.id}
      id={fruit.id}
      name={fruit.name}
      description={fruit.description}
      image={fruit.image}
      price={fruit.price}
    />
  ));

  return (
    <section classes={classes['fruits-wrap']}>
      <ul className={classes['fruits-list']}>{fruitItems}</ul>
    </section>
  );
};

export default AvailableItems;
