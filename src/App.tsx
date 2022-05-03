import { Header } from './components/Header';
import { Main } from './components/Main';
import { Widget } from './components/Widget';

export const App: React.FC = () => {
  return (
    <div className="w-full h-full pb-8">
      <Header />
      <Main />
      <Widget />
    </div>
  );
};
