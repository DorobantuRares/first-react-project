// //import ListGroup from "./components/ListGroup.tsx";
//
// //import Alert from "./components/Alert.tsx";
//
// import Button from "./components/Button.tsx";
// //import alert from "./components/Alert.tsx";
// //import { Simulate } from "react-dom/test-utils";
// //import change = Simulate.change;
//
// function App() {
//   // const items = ["Craiova", "Cluj", "Bucuresti"];
//   //
//   // const handleSelectItem = (item: string) => {
//   //   console.log(item);
//   // };
//   // return (
//   //   <div>
//   //     <ListGroup
//   //       items={items}
//   //       heading="Cities"
//   //       onSelectItem={handleSelectItem}
//   //     />
//   //   </div>
//   // );
//   //   return (
//   //       <div>
//   //           <Alert>
//   //               <h1>dogs</h1>
//   //           </Alert>
//   //       </div>
//   //   )
//   const alertMessage = (message: string) => {
//     alert(message);
//   };
//
//   return (
//     <div>
//       <Button
//         message={"A aparut Alerta"}
//         alertMessage={alertMessage}
//         children={<h1>Press Me</h1>}
//         secondMessage={"Mesajul  alertei"}
//       />
//     </div>
//   );
// }
//
// export default App;

import { useState } from "react";
// import NavBar from "./components/NavBar.tsx";
// import Cart from "./components/Cart.tsx";
// import { Simulate } from "react-dom/test-utils";
// import play = Simulate.play;
import ChangeName from "./components/ChangeName.tsx";
import PizzaTool from "./components/PizzaTool.tsx";
import Cart from "./components/Cart.tsx";

function App() {
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  //
  // return (
  //   <div>
  //     <NavBar cartItemsCount={cartItems.length} />
  //     <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
  //   </div>
  // );

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dumitrescu Denisa",
    },
  });

  const handleClick = (newName: string) => {
    if (newName === game.player.name) {
      newName = "Dumitrescu Denisa";
    }
    setGame({
      ...game,
      player: { name: newName },
    });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy Pep",
    toppings: ["Mushroom "],
  });

  const addTopping = (newTopping: string) => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: [...prevPizza.toppings, newTopping],
    }));
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Mere", quantity: 1 },
      { id: 2, title: "Pere", quantity: 2 },
    ],
  });

  const addQuantity = (productId: number) => {
    setCart((cart) => ({
      ...cart,
      items: cart.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    }));
  };

  return (
    <>
      <div>
        {game.id}
        {"---->"}
        {game.player.name}
      </div>
      <ChangeName newName={"Dorobantu Denisa"} changeName={handleClick} />
      <div>
        {pizza.name}
        {"---->"}
        {pizza.toppings}
      </div>
      <PizzaTool newTopping={"Pepperoni "} addTopping={addTopping} />
      <br />
      <PizzaTool newTopping={"Ananas "} addTopping={addTopping} />
      <br />
      <PizzaTool newTopping={"Cheddar "} addTopping={addTopping} />
      <br />
        <Cart cartItems={cart.items} addQuantity={addQuantity} productId={1}/>
    </>
  );
}

export default App;
