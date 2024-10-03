import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <p> Great Colors </p>
        <nav>
          <NavLink to="/red">Red</NavLink>
          <NavLink to="/blue">Blue</NavLink>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
