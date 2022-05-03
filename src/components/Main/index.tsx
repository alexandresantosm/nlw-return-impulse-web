import { GridCards } from './GridCards';

export const Main: React.FC = () => {
  return (
    <main className="bg-transparent px-10 md:px-0 flex justify-center">
      <div className="md:w-[560px] xl:w-[1120px] flex flex-col items-center">
        <section className="bg-zinc-700 w-full h-14 md:h-28 mt-6 md:mt-12 flex items-center rounded-lg">
          <p className="px-7 text-sm md:text-base xl:pl-14 text-zinc-400">
            Experimente enviar um feedback de um bug na aplicação 🐛
          </p>
        </section>

        <GridCards />
      </div>
    </main>
  );
};
