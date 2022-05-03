import { NavLink } from './NavLink';

export const Navbar: React.FC = () => {
  return (
    <nav className="hidden xl:flex xl:gap-6">
      <NavLink />
      <NavLink />
      <NavLink />
    </nav>
  );
};
