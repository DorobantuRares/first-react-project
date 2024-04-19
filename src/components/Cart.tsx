//import React from 'react';

interface Props {
  cartItems: { id: number; title: string; quantity: number }[];
  addQuantity: (productId: number) => void;
  productId: number;
}

const Cart = ({ cartItems, addQuantity, productId }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title}   {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={() => addQuantity(productId)}>Add Quantity</button>
    </>
  );
};

export default Cart;
