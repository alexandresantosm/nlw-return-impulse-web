import bugImage from '../assets/icons/bug.svg';
import ideaImage from '../assets/icons/idea.svg';
import thoughtImage from '../assets/icons/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de uma lagarta roxa',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada acesa',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um balão de pensamento azul claro',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
