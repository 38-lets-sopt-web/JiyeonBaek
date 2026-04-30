import Card from '../common/Card';

interface GamePannelProps {
  timeLeft: string | number;
  score: string | number;
  successCount: string | number;
  failCount: string | number;
  message: string;
}

const GamePannel = ({ timeLeft, score, successCount, failCount, message }: GamePannelProps) => {
  return (
    <aside className="flex w-72 flex-col gap-5">
      <Card label="남은 시간" value={timeLeft} />
      <Card label="총 점수" value={score} />

      <div className="grid grid-cols-2 gap-4">
        <Card label="성공" value={successCount} labelColor="text-green-500" />
        <Card label="실패" value={failCount} labelColor="text-red-400" />
      </div>

      <Card label="안내 메시지" value={message} valueSize="small" />
    </aside>
  );
};

export default GamePannel;
