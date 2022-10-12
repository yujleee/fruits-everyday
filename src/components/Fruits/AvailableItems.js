import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../UI/LoadingSpinner';
import FruitsItem from './FruitsItem';
import { dataActions } from '../../store/data-slice';
import classes from './AvailableItems.module.css';

const AvailableItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.data.fruits);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
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
    setIsLoading(false);
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
    <>
      {isLoading && <LoadingSpinner />}
      <section classes={classes['fruits-wrap']}>
        <ul className={classes['fruits-list']}>{fruitItems}</ul>
      </section>
    </>
  );
};

export default AvailableItems;
