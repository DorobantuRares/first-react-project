//import React from 'react';

interface Props {
  newName: string;
  changeName: (newName: string) => void;
}

const ChangeName = ({ newName, changeName }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          changeName(newName);
        }}
      >
        {"Schimba Numele in" + " " + newName}
      </button>
    </>
  );
};

export default ChangeName;
