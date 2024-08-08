import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./component/HelloComponent";

function App() {
  return (
    <div className="App">
      <HelloComponent text={`Hello World!`} />
    </div>
  );
}

export default App;
