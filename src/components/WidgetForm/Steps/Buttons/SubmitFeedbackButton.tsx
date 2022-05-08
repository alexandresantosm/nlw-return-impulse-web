import { Loading } from '../../../Loading';

interface SubmitFeedbackButtonProps {
  comment: string;
  isSendidngFeedback: boolean;
}

export const SubmitFeedbackButton: React.FC<SubmitFeedbackButtonProps> = ({
  comment,
  isSendidngFeedback,
}: SubmitFeedbackButtonProps) => {
  return (
    <button
      type="submit"
      disabled={comment.length === 0 || isSendidngFeedback}
      className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 items-center justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2  focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
    >
      {isSendidngFeedback ? <Loading /> : 'Enviar Feedback'}
    </button>
  );
};
