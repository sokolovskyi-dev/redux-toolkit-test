import { fetchBooks } from '@/redux/operations';
import { getBooks } from '@/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Component() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items.length > 0 &&
          items.map(item => (
            <li key={item.id}>
              <img src={item.imgUrl} />
              <h3>{item.title}</h3>
              <p>Genre: {item.genre}</p>
              <p>{item.descr}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
