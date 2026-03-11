import { setStatusFilter } from '@/redux/filtersSlice';
import { selectStatusFilter } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const filterStatus = useSelector(selectStatusFilter);

  const dispatch = useDispatch();

  function handleClick(filterStatus) {
    dispatch(setStatusFilter(filterStatus));
  }

  return (
    <div className="mt-3 flex gap-2">
      <button
        className={filterStatus === 'all' ? 'active-filter' : ''}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        className={filterStatus === 'active' ? 'active-filter' : ''}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button
        className={filterStatus === 'completed' ? 'active-filter' : ''}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  );
}
