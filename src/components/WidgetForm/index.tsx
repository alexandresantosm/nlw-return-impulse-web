import { useState } from 'react';
import { FeedbackType } from '../../utils/feedback-data';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

const INITIAL_FEEDBACK_STATE = null;
const INITIAL_FEEDBACK_SENT_STATE = false;

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(
    INITIAL_FEEDBACK_STATE,
  );
  const [feedbackSent, setFeedbackSent] = useState(INITIAL_FEEDBACK_SENT_STATE);

  const handleFeedbackType = (feedbackType: FeedbackType) =>
    setFeedbackType(feedbackType);

  const handleRestartFeedback = () => {
    setFeedbackSent(INITIAL_FEEDBACK_SENT_STATE);
    setFeedbackType(INITIAL_FEEDBACK_STATE);
  };

  const handleFeedbackSent = () => setFeedbackSent(true);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={handleFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-xs text-zinc-400">
        Feito com ♥ pela{' '}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
