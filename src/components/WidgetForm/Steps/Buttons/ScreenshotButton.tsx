import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../../../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
  onScreenshotRestartRequest: () => void;
}

const INITIAL_SCREENSHOT_STATE = false;

export const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  screenshot,
  onScreenshotTook,
  onScreenshotRestartRequest,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(
    INITIAL_SCREENSHOT_STATE,
  );

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const pageToScreenshot = document.querySelector('html')!;

    const canvas = await html2canvas(pageToScreenshot);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakingScreenshot(INITIAL_SCREENSHOT_STATE);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={onScreenshotRestartRequest}
        className="p-1 w-10 h-10 rounded-md border-transparent flex items-end justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2  focus:ring-offset-zinc-900 transition-colors"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
