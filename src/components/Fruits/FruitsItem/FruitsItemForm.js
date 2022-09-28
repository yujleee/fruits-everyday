import Input from '../../UI/Input';
import classes from './FruitsItemForm.module.css';

const FruitsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="수량"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>추가하기</button>
    </form>
  );
};

export default FruitsItemForm;
