import { useSelector, useDispatch } from 'react-redux';

import Banner from '../components/Layout/Banner';
import Summary from '../components/Layout/Summary';
import AvailableItems from '../components/Fruits/AvailableItems';
import { uiActions } from '../store/ui-slice';

const Main = () => {
  const dispatch = useDispatch();
  const checkOrder = useSelector((state) => state.ui.checkOrder);

  if (checkOrder) {
    dispatch(uiActions.toggleCheckOrder());
  }

  return (
    <>
      <Banner />
      <Summary />
      <AvailableItems />
    </>
  );
};

export default Main;
