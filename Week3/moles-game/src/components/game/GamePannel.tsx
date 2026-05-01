import Card from '../common/Card';

interface GamePannelProps {
  timeLeft: string;
  score: number;
  successCount: number;
  failCount: number;
  message: string;
}

const GamePannel = ({ timeLeft, score, successCount, failCount, message }: GamePannelProps) => {
  return (
    <aside className="flex w-82 flex-col gap-5 overflow-y-auto">
      <Card label="남은 시간" value={timeLeft} className="flex-1" />
      <Card label="총 점수" value={score} className="flex-1" />

      <div className="grid flex-1 grid-cols-2 gap-4">
        <Card label="성공" value={successCount} labelColor="text-green-500" className="h-full" />
        <Card label="실패" value={failCount} labelColor="text-red-400" className="h-full" />
      </div>

      <Card label="안내 메시지" value={message} valueSize="small" className="flex-1" />
    </aside>
  );
};

export default GamePannel;
