import "./App.css";
import Counter from "./component/Counter";
import HelloComponent from "./component/HelloComponent";

function App() {
  return (
    <div className="App">
      <HelloComponent text={`Hello World!`} />
      <Counter />
    </div>
  );
}

export default App;
