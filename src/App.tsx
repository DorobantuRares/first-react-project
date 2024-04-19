//import ListGroup from "./components/ListGroup.tsx";

//import Alert from "./components/Alert.tsx";

import Button from "./components/Button.tsx";
//import alert from "./components/Alert.tsx";
//import { Simulate } from "react-dom/test-utils";
//import change = Simulate.change;

function App() {
  // const items = ["Craiova", "Cluj", "Bucuresti"];
  //
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  //   return (
  //       <div>
  //           <Alert>
  //               <h1>dogs</h1>
  //           </Alert>
  //       </div>
  //   )
  const alertMessage = (message: string) => {
    alert(message);
  };

  return (
    <div>
      <Button
        message={"A aparut Alerta"}
        alertMessage={alertMessage}
        children={<h1>Press Me</h1>}
        secondMessage={"Mesajul  alertei"}
      />
    </div>
  );
}

export default App;
