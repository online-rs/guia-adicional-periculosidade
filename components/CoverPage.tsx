
import React from 'react';
import { ChevronRightIcon, ExclamationTriangleIcon } from './Icons';

interface CoverPageProps {
  onNext: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onNext }) => {
  return (
    <div className="text-center bg-gray-800 p-8 rounded-lg shadow-2xl animate-fade-in">
      <div className="flex justify-center items-center mb-6">
         <ExclamationTriangleIcon className="h-16 w-16 text-brand-yellow" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        GUIA RÁPIDO: 3 SINAIS DE QUE VOCÊ PODE TER DIREITO AO ADICIONAL DE PERICULOSIDADE (30%)
      </h1>
      <h2 className="mt-4 text-lg sm:text-xl text-gray-300">
        Mesmo que a troca de gás da empilhadeira seja rápida.
      </h2>
      <p className="mt-6 text-sm text-gray-400 font-semibold tracking-wider uppercase">
        Baseado na Decisão (Tema Repetitivo 87) do TST
      </p>
      <div className="mt-10">
        <button
          onClick={onNext}
          className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
        >
          Iniciar Guia
          <ChevronRightIcon className="h-6 w-6 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
