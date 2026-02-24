import { NavLink, Outlet } from 'react-router-dom';

export function Component() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/login">Log in</NavLink>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}
