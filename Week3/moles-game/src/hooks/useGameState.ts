import { useState } from 'react';
import { GAME_MESSAGES } from '@/constants/game';

const useGameState = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [message, setMessage] = useState<string>(GAME_MESSAGES.READY);
  const [showResultModal, setShowResultModal] = useState(false);

  const resetGameState = () => {
    setIsRunning(false);
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage(GAME_MESSAGES.READY);
    setShowResultModal(false);
  };

  const finishGameState = () => {
    setIsRunning(false);
    setMessage(GAME_MESSAGES.END);
    setShowResultModal(true);
  };

  const startGameState = () => {
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage(GAME_MESSAGES.START);
    setShowResultModal(false);
    setIsRunning(true);
  };

  const handleSuccess = () => {
    setScore((prev) => prev + 1);
    setSuccessCount((prev) => prev + 1);
    setMessage(GAME_MESSAGES.SUCCESS_MOLE);
  };

  const handleFail = () => {
    setScore((prev) => prev - 1);
    setFailCount((prev) => prev + 1);
    setMessage(GAME_MESSAGES.FAIL_BOMB);
  };

  const clearMessage = () => {
    setMessage('\u00A0');
  };

  return {
    isRunning,
    score,
    successCount,
    failCount,
    message,
    showResultModal,
    resetGameState,
    finishGameState,
    startGameState,
    handleSuccess,
    handleFail,
    clearMessage,
  };
};

export default useGameState;
