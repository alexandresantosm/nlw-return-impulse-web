import { GridCards } from './GridCards';

export const Main: React.FC = () => {
  return (
    <main className="bg-transparent flex justify-center">
      <div className="w-[1120px] flex  flex-col items-center">
        <section className="bg-zinc-700 w-full h-28 mt-12 flex items-center rounded-lg">
          <p className="pl-14 text-zinc-400">
            Experimente enviar um feedback de um bug na aplicação 🐛
          </p>
        </section>

        <GridCards />
      </div>
    </main>
  );
};
