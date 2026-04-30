import { createPortal } from 'react-dom';
import Button from './Button';

interface ModalProps {
  title: string;
  description: string;
  buttonText: string;
  onClose: () => void;
}

const Modal = ({ title, description, buttonText, onClose }: ModalProps) => {
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-100 rounded-md bg-white px-8 py-6 text-center shadow-lg">
        <h2 className="text-text text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-xl text-gray-700">{description}</p>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={onClose}
            bgColor="bg-primary200"
            textColor="text-white"
            className="w-full rounded-sm"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
