import { logOut } from '@/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function UserMenu() {
  const login = useSelector(state => state.user.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="ml-auto flex items-center gap-5">
      <div>User: {login}</div>
      <button
        className="rounded-lg bg-blue-500/80 p-1 px-3 shadow transition-colors hover:bg-blue-500/90 hover:text-white"
        onClick={() => {
          dispatch(logOut());
          navigate('/');
        }}
      >
        Log out
      </button>
    </div>
  );
}
