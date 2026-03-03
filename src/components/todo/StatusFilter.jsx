import { setStatusFilter } from '@/redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function StatusFilter() {
  const dispatch = useDispatch();
  function handleButtonClick(e) {
    dispatch(setStatusFilter(e.currentTarget.name));
  }
  const filter = useSelector(state => state.filters.status);

  return (
    <div className="flex gap-2">
      <button
        name="all"
        className={filter === 'all' ? 'active-filter' : ''}
        onClick={handleButtonClick}
      >
        All
      </button>
      <button
        name="active"
        className={filter === 'active' ? 'active-filter' : ''}
        onClick={handleButtonClick}
      >
        Active
      </button>
      <button
        name="completed"
        className={filter === 'completed' ? 'active-filter' : ''}
        onClick={handleButtonClick}
      >
        Completed
      </button>
    </div>
  );
}
