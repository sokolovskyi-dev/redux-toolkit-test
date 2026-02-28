import UserMenu from '@/components/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

export function Component() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between rounded-2xl bg-blue-950 p-4 shadow-lg">
        <nav className="flex gap-5">
          {!isLoggedIn && <NavLink to="/login">Log in</NavLink>}
          <NavLink to="/dashboard">Counter</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
