//app/dashboard/help/page.tsx
import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="help-page bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4">Help Page</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
        <p className="text-base leading-relaxed">Welcome to the help page. Here you will find all the information you need to get started.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc ml-5">
          <li className="mb-2">Question 1: Answer to question 1.</li>
          <li>Question 2: Answer to question 2.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Contact Support</h2>
        <p className="text-base leading-relaxed">If you need further assistance, please contact our support team.</p>
      </section>
    </div>
  );
};

export default HelpPage;