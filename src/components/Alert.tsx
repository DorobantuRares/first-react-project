interface Props {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{message}</strong>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};
export default Alert;
