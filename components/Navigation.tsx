
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface NavigationProps {
  onNext?: () => void;
  onBack?: () => void;
  nextDisabled?: boolean;
  showNext?: boolean;
  showBack?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  onNext,
  onBack,
  nextDisabled = false,
  showNext = true,
  showBack = true,
}) => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-700 flex justify-between items-center">
      {showBack ? (
        <button
          onClick={onBack}
          className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 transition-colors duration-200 flex items-center"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Voltar
        </button>
      ) : (
        <div /> 
      )}

      {showNext && (
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className={`font-bold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center ${
            nextDisabled
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-brand-yellow text-brand-dark hover:bg-amber-400'
          }`}
        >
          Avançar
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      )}
    </div>
  );
};

export default Navigation;
