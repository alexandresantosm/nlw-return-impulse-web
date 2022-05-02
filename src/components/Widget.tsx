import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export const Widget: React.FC = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  const toggleWidgetVisibility = () => {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="absolute bottom-5 right-5">
      {isWidgetOpen && <p>Hello World</p>}

      <button
        onClick={toggleWidgetVisibility}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="h-6 w-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <p className="pl-2">Feedback</p>
        </span>
      </button>
    </div>
  )
}
