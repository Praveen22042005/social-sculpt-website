import React from "react";

interface ThankYouModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ open, setOpen }) => {

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Thank You! 🎉</h2>

        <p>
          Your response has been submitted. Our team will contact you soon.
        </p>

        <button
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default ThankYouModal;