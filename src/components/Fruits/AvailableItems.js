const AvailableItems = () => {
  const DUMMY_ITEMS = [
    {
      id: 'f1',
      name: '귤',
      description: '달콤한 제주 하우스 감귤',
      img: '../../assets/img-fruits01.jpg',
      price: 18.99,
    },
    {
      id: 'f2',
      name: '사과',
      description: '껍질째 통째로 먹는 가을 햇 홍로 사과',
      img: '../../assets/img-fruits02.jpg',
      price: 48900,
    },
    {
      id: 'f3',
      name: '포도',
      description: '산지직송 프리미엄 고당도 캠벨포도',
      img: '../../assets/img-fruits03.jpg',
      price: 26000,
    },
    {
      id: 'f4',
      name: '멜론',
      description: '달콤한 국내산 고당도 머스크멜론',
      img: '../../assets/img-fruits04.jpg',
      price: 28900,
    },
    {
      id: 'f5',
      name: '바나나',
      description: '맛있고 건강한 유기농 제주 바나나',
      img: '../../assets/img-fruits05.jpg',
      price: 14700,
    },
    {
      id: 'f6',
      name: '딸기',
      description: '강원도 고랭지 여름 딸기',
      img: '../../assets/img-fruits06.jpg',
      price: 23000,
    },
  ];

  return (
    <ul>
      {DUMMY_ITEMS.map((fruit) => (
        <li>{fruit.name}</li>
      ))}
    </ul>
  );
};

export default AvailableItems;
