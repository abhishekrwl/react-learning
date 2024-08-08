import "./App.css";
import Counter from "./component/Counter";
import Form from "./component/Form";
import HelloComponent from "./component/HelloComponent";

function App() {
  return (
    <div className="App">
      <HelloComponent text={`Hello World!`} />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
