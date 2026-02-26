import UserMenu from '@/components/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

export function Component() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between rounded-2xl p-4 shadow-lg">
        {!isLoggedIn && (
          <nav>
            <NavLink to="/login">Log in</NavLink>
          </nav>
        )}
        {isLoggedIn && <UserMenu />}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
