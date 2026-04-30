import { cn } from '@/utils/cn';

function App() {
  return (
    <div className="App">
      <h1 className={cn('text-3xl font-bold', 'bg-amber-50 px-10')}>Moles Game</h1>
      <p className={cn('text-4xl')}>Click on the moles to score points!</p>
    </div>
  );
}

export default App;
