import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../UI/LoadingSpinner';
import FruitsItem from './FruitsItem';
import { dataActions } from '../../store/data-slice';
import styled from 'styled-components';

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
      <Wrap>
        <List>{fruitItems}</List>
      </Wrap>
    </>
  );
};

export default AvailableItems;

const Wrap = styled.section`
  .fruits-wrap {
    max-width: 60rem;
    width: 100%;
    margin: 2rem auto;
  }
`;

const List = styled.ul`
  display: flex;
  width: 70%;
  margin: 3rem auto;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-basis: 33.3%;

  @media screen and (min-width: 720px) {
    max-width: 700px;
    width: 68%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
    width: 70%;
  }
`;
