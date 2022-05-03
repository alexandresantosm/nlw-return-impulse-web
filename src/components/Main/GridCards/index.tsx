import { Card } from './Card';

export const GridCards: React.FC = () => {
  return (
    <section className="w-full mt-8 flex items-center">
      <div className="grid grid-cols-3 gap-8 justify-items-stretch">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
