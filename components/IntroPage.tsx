
import React from 'react';
import Navigation from './Navigation';

interface IntroPageProps {
  onNext: () => void;
  onBack: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onNext, onBack }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-brand-yellow">Você sabia que 5 minutos de risco podem valer 30% do seu salário?</h2>
      <p className="text-gray-300 leading-relaxed">
        Olá! Se você baixou este guia, é provável que você trabalhe (ou tenha trabalhado) em um depósito ou indústria e que, na sua rotina, precise trocar o cilindro de gás (GLP) da empilhadeira.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Muitos trabalhadores e até mesmo empresas acreditam que, por essa troca ser "eventual" ou "muito rápida" (durando poucos minutos), não existe o dever de pagar o adicional de periculosidade.
      </p>
      <p className="text-white font-semibold text-lg bg-red-900/50 border-l-4 border-red-500 p-4 rounded-r-lg">
        Isso está errado.
      </p>
      <p className="text-gray-300 leading-relaxed">
        O Tribunal Superior do Trabalho (TST), no julgamento do Tema 87, pacificou o entendimento de que esta atividade <strong className="text-brand-yellow">gera, sim, o direito ao adicional de periculosidade (30% sobre o salário-base)</strong>, mesmo que a troca do cilindro seja feita por um curto espaço de tempo.
      </p>
      <p className="text-gray-300 leading-relaxed">
        O risco de explosão existe no momento da troca, e é isso que a lei protege.
      </p>
      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-2xl font-bold text-white">Use este checklist para identificar seu direito</h3>
        <p className="text-gray-300 mt-2">
          Este é um <strong className="text-white">guia informativo</strong>. Se você marcar "SIM" para os 3 sinais abaixo, é altamente recomendável que você procure uma análise profissional do seu caso.
        </p>
      </div>
      <Navigation onNext={onNext} onBack={onBack} />
    </div>
  );
};

export default IntroPage;
