import { Card } from './Card';

export const GridCards: React.FC = () => {
  return (
    <section className="w-full mt-4 md:mt-8 flex items-center">
      <div className="flex flex-col gap-4 w-full md:grid md:grid-cols-2  xl:grid-cols-3 lg:gap-8 justify-items-stretch">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
