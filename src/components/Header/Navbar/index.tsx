import { NavLink } from './NavLink';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-6">
      <NavLink />
      <NavLink />
      <NavLink />
    </nav>
  );
};
