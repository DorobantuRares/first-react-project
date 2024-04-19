//import React from 'react';

interface Props {
  newTopping: string;
  addTopping: (newTopping: string) => void;
}

const PizzaTool = ({ newTopping, addTopping }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          addTopping(newTopping);
        }}
      >
        {"Adauga Topping:" + " " + newTopping}
      </button>
    </>
  );
};

export default PizzaTool;
