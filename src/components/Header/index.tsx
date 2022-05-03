import { Logo } from './Logo';
import { Navbar } from '../Header/Navbar';
import { Profle } from '../Header/Profile';

export const Header: React.FC = () => {
  return (
    <header className="bg-zinc-800  max-w-full h-20  flex items-center justify-center">
      <div className="w-[1120px] max-h-full flex items-center justify-between">
        <Logo />
        <Navbar />
        <Profle />
      </div>
    </header>
  );
};
