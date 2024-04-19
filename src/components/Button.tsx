import {ReactNode, useState} from "react";
import Alert from "./Alert.tsx";

interface Props {
  message: string;
  alertMessage: (message: string) => void;
  secondMessage: string;
  children: ReactNode;
}


const Button = ({ message, alertMessage, secondMessage, children }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(false);
  return (
    <div>
        {selectedIndex && (
            <Alert
                message={secondMessage}
                onClose={() => setSelectedIndex(false)}
            />
        )}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          alertMessage(message);
          setSelectedIndex(true);
        }}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
