import React, { useState } from 'react';
import WelcomeModal from './components/WelcomeModal';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {!started && <WelcomeModal onStart={() => setStarted(true)} />}

      {started && (
        <div className="p-4">
          {/* Add TypeFilter or LevelSelector next */}
          <h1 className="text-3xl font-bold">Color Blindness Test Begins!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
