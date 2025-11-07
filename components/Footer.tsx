
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center p-6 text-xs text-gray-500">
      <p className="font-semibold">Dr. Bruno de Oliveira - OAB/RS 116.393</p>
      <p className="mt-1 max-w-2xl mx-auto">
        Este material tem caráter exclusivamente informativo, em conformidade com o Código de Ética da OAB. Não constitui consulta jurídica nem promessa de resultados.
      </p>
    </footer>
  );
};

export default Footer;
