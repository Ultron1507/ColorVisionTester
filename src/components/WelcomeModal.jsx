// src/components/WelcomeModal.jsx
import React, { useState } from 'react';

const WelcomeModal = ({ onStart }) => {
  const [showModal, setShowModal] = useState(true);
  const [isWearingGlasses, setIsWearingGlasses] = useState(false);

  const handleStart = () => {
    localStorage.setItem("wearingGlasses", isWearingGlasses);
    setShowModal(false);
    onStart(); // Trigger parent callback to begin test
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-lg max-w-md w-full p-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">👋 Welcome to ColorQuest</h2>
        <p className="mb-3 text-sm">
          This playful app helps detect types of color blindness in a fun and engaging way.
          Please follow the instructions below for best results:
        </p>
        <ul className="list-disc list-inside text-sm mb-4">
          <li>Set your screen brightness to medium or high.</li>
          <li>Don't wear tinted screen filters.</li>
          <li>Ensure you're not in direct sunlight.</li>
        </ul>

        <label className="flex items-center gap-2 mb-4 text-sm">
          <input
            type="checkbox"
            checked={isWearingGlasses}
            onChange={(e) => setIsWearingGlasses(e.target.checked)}
            className="accent-blue-500"
          />
          I'm wearing color correction glasses (like EnChroma)
        </label>

        <button
          onClick={handleStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
