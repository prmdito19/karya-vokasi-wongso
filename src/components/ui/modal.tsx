import React from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  // title = "Are you sure?",
  description = "Are you sure you want to delete this product?",
  confirmText = "Yes, I'm sure",
  cancelText = "No, cancel",
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden bg-black/40"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 
            hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center 
            dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          {/* Content */}
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {description}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 mr-3 
              text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#4BD270]
              focus:outline-none focus:ring-4 focus:ring-gray-100 focus:z-10 
              dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
              dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {cancelText}
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="text-white bg-[#4BD270] hover:bg-green-700 focus:ring-4 
              focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
              rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
