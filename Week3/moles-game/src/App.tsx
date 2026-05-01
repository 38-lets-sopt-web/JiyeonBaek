import { useState } from 'react';
import AppHeader from './components/layout/AppHeader';
import type { GameMode } from './types/app';
import GamePage from './pages/GamePage/GamePage';
import RankingPage from './pages/RankingPage/RankingPage';
import useRanking from './hooks/useRanking';

function App() {
  const [mode, setMode] = useState<GameMode>('game');
  const { records, addRecord, clearRecords } = useRanking();

  return (
    <div className="flex h-screen flex-col gap-6 overflow-hidden px-20 py-15">
      <AppHeader mode={mode} setMode={setMode} />

      {mode === 'game' && <GamePage onSuccessGame={addRecord} />}
      {mode === 'ranking' && <RankingPage records={records} onClear={clearRecords} />}
    </div>
  );
}

export default App;
