
import React from 'react';
import { ChecklistAnswers } from '../types';
import Navigation from './Navigation';

interface ChecklistPageProps {
  answers: ChecklistAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<ChecklistAnswers>>;
  onNext: () => void;
  onBack: () => void;
}

const RadioOption: React.FC<{
  name: keyof ChecklistAnswers;
  value: boolean;
  label: string;
  checked: boolean | null;
  onChange: (name: keyof ChecklistAnswers, value: boolean) => void;
}> = ({ name, value, label, checked, onChange }) => {
  const isSelected = checked === value;
  return (
    <label className={`
      flex-1 text-center font-bold py-3 px-4 rounded-md cursor-pointer transition-all duration-200
      ${isSelected ? 'bg-brand-yellow text-brand-dark shadow-lg' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}
    `}>
      <input
        type="radio"
        name={name}
        checked={isSelected}
        onChange={() => onChange(name, value)}
        className="sr-only"
      />
      {label}
    </label>
  );
};


const ChecklistItem: React.FC<{
  title: string;
  question: string;
  description: React.ReactNode;
  answerKey: keyof ChecklistAnswers;
  answers: ChecklistAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<ChecklistAnswers>>;
}> = ({ title, question, description, answerKey, answers, setAnswers }) => {
  
  const handleChange = (name: keyof ChecklistAnswers, value: boolean) => {
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-brand-yellow">{title}</h3>
      <p className="mt-2 text-lg text-white">{question}</p>
      <div className="mt-4 flex gap-4">
        <RadioOption name={answerKey} value={true} label="SIM" checked={answers[answerKey]} onChange={handleChange} />
        <RadioOption name={answerKey} value={false} label="NÃO" checked={answers[answerKey]} onChange={handleChange} />
      </div>
      <div className="mt-4 text-gray-400 text-sm leading-relaxed">
        <strong>O que importa:</strong> {description}
      </div>
    </div>
  );
};

const ChecklistPage: React.FC<ChecklistPageProps> = ({ answers, setAnswers, onNext, onBack }) => {
  const isComplete = Object.values(answers).every(answer => answer !== null);

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-white mb-6">CHECKLIST DE 3 PASSOS</h2>
      <div className="space-y-6">
        <ChecklistItem
          title="SINAL 1: A ATIVIDADE DE RISCO"
          question="Eu mesmo faço (ou fazia) a troca do cilindro de gás (GLP) da empilhadeira."
          description="Não é o nome do seu cargo (Operador, Estoquista, Auxiliar), mas sim a função. Se você era o responsável por desengatar o cilindro vazio e engatar o cilindro cheio na empilhadeira, você realizava a atividade de risco."
          answerKey="riskActivity"
          answers={answers}
          setAnswers={setAnswers}
        />
        <ChecklistItem
          title="SINAL 2: A REGULARIDADE"
          question="Eu faço (ou fazia) essa troca de forma regular (intermitente)."
          description={`"Regular" não significa "todo dia". Se essa troca acontecia uma vez por semana, algumas vezes no mês, ou sempre que o gás acabava no seu turno, isso já configura a regularidade (intermitência) que a Justiça entende como suficiente para gerar o direito. O TST (Tema 87) foi claro: o "tempo curto" da troca não elimina o risco, nem o direito.`}
          answerKey="regularity"
          answers={answers}
          setAnswers={setAnswers}
        />
        <ChecklistItem
          title="SINAL 3: O NÃO PAGAMENTO"
          question={`Ao olhar meu holerite (contracheque), não existe o pagamento do "Adicional de Periculosidade" de 30%.`}
          description="Verifique seus holerites. Se não há uma linha específica pagando esse adicional, ou se a empresa pagava um valor 'por fora' ou muito menor que 30% do seu salário-base, há um forte indício de irregularidade."
          answerKey="noPayment"
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      <Navigation onNext={onNext} onBack={onBack} nextDisabled={!isComplete} />
    </div>
  );
};

export default ChecklistPage;
