import Card from '../UI/Card';
import FruitsItem from './FruitsItem/FruitsItem';
import classes from './AvailableItems.module.css';

const AvailableItems = () => {
  const DUMMY_ITEMS = [
    {
      id: 'f1',
      name: '귤',
      description: '갓 수확한 달콤한 제주 하우스 감귤',
      image: '/images/img-fruits01.jpg',
      price: 23000,
    },
    {
      id: 'f2',
      name: '사과',
      description: '껍질째 통째로 먹는 가을 햇 홍로 사과',
      image: '/images/img-fruits02.jpg',
      price: 48900,
    },
    {
      id: 'f3',
      name: '포도',
      description: '산지직송 프리미엄 고당도 캠벨포도',
      image: '/images/img-fruits03.jpg',
      price: 26000,
    },
    {
      id: 'f4',
      name: '멜론',
      description: '달콤한 국내산 고당도 머스크멜론',
      image: '/images/img-fruits04.jpg',
      price: 28900,
    },
    {
      id: 'f5',
      name: '바나나',
      description: '맛있고 건강한 유기농 제주 바나나',
      image: '/images/img-fruits05.jpg',
      price: 14700,
    },
    {
      id: 'f6',
      name: '딸기',
      description: '상큼 달콤 강원도 고랭지 여름 딸기',
      image: '/images/img-fruits06.jpg',
      price: 23000,
    },
  ];

  return (
    <ul className={classes['fruits-list']}>
      {DUMMY_ITEMS.map((fruit) => (
        <Card>
          <FruitsItem
            id={fruit.id}
            name={fruit.name}
            description={fruit.description}
            image={fruit.image}
            price={fruit.price}
          />
        </Card>
      ))}
    </ul>
  );
};

export default AvailableItems;
