import { createPortal } from 'react-dom';
import Button from './Button';

interface ModalProps {
  levelLabel: string;
  score: number;
  onClose: () => void;
}

const Modal = ({ levelLabel, score, onClose }: ModalProps) => {
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-90 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h2 className="text-4 font-bold">{levelLabel} 게임 종료!</h2>
        <p className="text-primary200 mt-4 text-4xl font-bold">최종 점수: {score}점</p>
        <div className="mt-5 flex justify-center">
          <Button
            onClick={onClose}
            bgColor="bg-primary200"
            textColor="text-white"
            className="w-full rounded-sm"
          >
            확인
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
