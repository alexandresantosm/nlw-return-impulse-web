import { FormEvent, useState } from 'react';

import { api } from '../../../lib/api';
import { FeedbackType, feedbackTypes } from '../../../utils/feedback-data';
import {
  BackButton,
  CloseButton,
  ScreenshotButton,
  SubmitFeedbackButton,
} from './Buttons';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

const INITIAL_SCREENSHOT_STATE = null;
const INITIAL_COMMENT_STATE = '';
const INITIAL_SENDING_FEEDBACK_STATE = false;

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(
    INITIAL_SCREENSHOT_STATE,
  );
  const [comment, setComment] = useState(INITIAL_COMMENT_STATE);
  const [isSendingFeedback, setIsSendingFeedback] = useState(
    INITIAL_SENDING_FEEDBACK_STATE,
  );

  const handleRestartScreenshot = () => setScreenshot(INITIAL_SCREENSHOT_STATE);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(INITIAL_SENDING_FEEDBACK_STATE);

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <BackButton onFeedbackRestartRequest={onFeedbackRestartRequest} />

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] bg-transparent placeholder-zinc-400 resize-none text-sm text-zinc-100 border-zinc-600 rounded-md focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Algo n??o est?? funcionando bem? Queremos corrigir. Conte com detalhes o que est?? acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot as string}
            onScreenshotTook={setScreenshot}
            onScreenshotRestartRequest={handleRestartScreenshot}
          />
          <SubmitFeedbackButton
            comment={comment}
            isSendidngFeedback={isSendingFeedback}
          />
        </footer>
      </form>
    </>
  );
};
