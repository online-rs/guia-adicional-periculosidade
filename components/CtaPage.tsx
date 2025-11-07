import React, { useState } from 'react';
import { ChecklistAnswers } from '../types';
import Navigation from './Navigation';
import { WhatsAppIcon } from './Icons';

interface CtaPageProps {
  answers: ChecklistAnswers;
  onBack: () => void;
}

const CtaPage: React.FC<CtaPageProps> = ({ answers, onBack }) => {
  const [name, setName] = useState('');
  const allYes = answers.riskActivity && answers.regularity && answers.noPayment;

  const isNameValid = name.trim() !== '';
  const phoneNumber = "5551993525391";
  
  const messageText = allYes
    ? `Olá, meu nome é ${name}. Baixei o guia sobre adicional de periculosidade, preencho todos os requisitos e gostaria de saber mais sobre o assunto.`
    : `Olá, meu nome é ${name}. Baixei o guia sobre adicional de periculosidade e gostaria de agendar minha análise de caso para entender melhor meus direitos.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl animate-fade-in space-y-6">
      {allYes ? (
        <div>
          <h2 className="text-3xl font-bold text-brand-yellow">Se você marcou "SIM" para os 3 sinais...</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            ...você pode ter uma quantia significativa a receber. Estamos falando de 30% do seu salário-base por mês, que, acumulados nos últimos 5 anos, geram reflexos em 13º, Férias, FGTS e Horas Extras.
          </p>
        </div>
      ) : (
         <div>
          <h2 className="text-3xl font-bold text-brand-yellow">Análise Profissional é Essencial</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Mesmo que você não tenha marcado "SIM" para todas as perguntas, cada caso tem suas particularidades. Uma análise detalhada por um profissional pode revelar direitos que você não conhecia.
          </p>
        </div>
      )}

      <div className="bg-red-900/50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <h3 className="text-xl font-bold text-red-300">ATENÇÃO: O TEMPO ESTÁ CORRENDO!</h3>
        <p className="mt-2 text-red-200">Na Justiça do Trabalho, você tem um limite de tempo para cobrar seus direitos:</p>
        <ul className="list-disc list-inside mt-2 text-red-200 space-y-1">
          <li>Você só pode cobrar os <strong className="font-bold">últimos 5 anos</strong> (contados do dia em que entra com a ação).</li>
          <li>Você tem até <strong className="font-bold">2 anos após o fim do contrato</strong> para entrar com a ação.</li>
        </ul>
        <p className="mt-2 font-semibold text-red-200">Cada dia que passa pode ser um dia do seu direito que você está perdendo.</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">Qual o próximo passo? (A Análise)</h3>
        <p className="mt-2 text-gray-300 leading-relaxed">
          Se você se identificou com este guia, o próximo passo <strong>não</strong> é entrar na justiça imediatamente. O próximo passo é realizar uma <strong>análise profissional e detalhada do seu caso</strong>.
        </p>
        <p className="mt-2 text-gray-300 leading-relaxed">
          É preciso entender sua função, verificar seus documentos e calcular o valor potencial do seu direito. Como especialista em direito do trabalho, estou disponibilizando minha agenda para realizar essa análise.
        </p>
      </div>
      
      <div className="mt-6">
        <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">
          Seu primeiro nome (obrigatório):
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-colors"
          required
        />
      </div>

      <div className="text-center mt-2">
        <a
          href={isNameValid ? whatsappUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => !isNameValid && e.preventDefault()}
          className={`w-full sm:w-auto mt-4 font-bold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center ${
            isNameValid
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <WhatsAppIcon className="h-7 w-7 mr-3" />
          QUERO AGENDAR MINHA ANÁLISE
        </a>
      </div>

      <Navigation onBack={onBack} showNext={false} />
    </div>
  );
};

export default CtaPage;