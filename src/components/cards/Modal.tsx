import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps){
  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg relative max-w-3xl w-full text-justify'>
        {children}
        <button
          onClick={onClose}
          className='absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full'
        >
          X
        </button>
      </div>
    </div>,
    document.body
  );
};

