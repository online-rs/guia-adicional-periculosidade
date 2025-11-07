
import React, { useState, useEffect } from 'react';
import { ChecklistAnswers } from './types';
import CoverPage from './components/CoverPage';
import IntroPage from './components/IntroPage';
import ChecklistPage from './components/ChecklistPage';
import CtaPage from './components/CtaPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<ChecklistAnswers>({
    riskActivity: null,
    regularity: null,
    noPayment: null,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [page]);

  const totalPages = 4;

  const renderPage = () => {
    switch (page) {
      case 0:
        return <CoverPage onNext={() => setPage(1)} />;
      case 1:
        return <IntroPage onNext={() => setPage(2)} onBack={() => setPage(0)} />;
      case 2:
        return (
          <ChecklistPage
            answers={answers}
            setAnswers={setAnswers}
            onNext={() => setPage(3)}
            onBack={() => setPage(1)}
          />
        );
      case 3:
        return <CtaPage answers={answers} onBack={() => setPage(2)} />;
      default:
        return <CoverPage onNext={() => setPage(1)} />;
    }
  };

  const progress = ((page + 1) / totalPages) * 100;

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
            <div
              className="bg-brand-yellow h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
