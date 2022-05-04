import { ArrowLeft } from 'phosphor-react';

interface BackButtonProps {
  onFeedbackRestartRequest: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onFeedbackRestartRequest,
}: BackButtonProps) => {
  return (
    <button
      type="button"
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={onFeedbackRestartRequest}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
};
