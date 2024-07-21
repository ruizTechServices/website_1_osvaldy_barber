import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="help-page text-white">
      <h1>Help Page</h1>
      <section>
        <h2>Getting Started</h2>
        <p>Welcome to the help page. Here you will find all the information you need to get started.</p>
      </section>
      <section>
        <h2>FAQs</h2>
        <ul>
          <li>Question 1: Answer to question 1.</li>
          <li>Question 2: Answer to question 2.</li>
        </ul>
      </section>
      <section>
        <h2>Contact Support</h2>
        <p>If you need further assistance, please contact our support team.</p>
      </section>
    </div>
  );
};

export default HelpPage;