import { CloseButton } from './Buttons';
import successImage from '../../../assets/icons/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export const FeedbackSuccessStep: React.FC<FeedbackSuccessStepProps> = ({
  onFeedbackRestartRequest,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          src={successImage}
          alt="Imagem de um quadrado verde claro com uma marca de seleção na cor branca"
        />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2  focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
