import { increment } from '@/redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="mt-10">
      <h1>Number of clicks: {value}</h1>

      <div className="mt-6 flex gap-5">
        {' '}
        <button className="btn-apple" onClick={() => dispatch(increment(5))}>
          Add 5 clicks
        </button>
        <button className="btn-apple" onClick={() => dispatch(increment(10))}>
          Add 10 clicks
        </button>
        <button className="btn-apple" onClick={() => dispatch(increment(20))}>
          Add 20 clicks
        </button>
      </div>
    </div>
  );
}
