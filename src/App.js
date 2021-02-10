import "./App.css";
import FetchData from "./FetchData";
import Parent from "./Parent";

function App() {
  return (
    <div className="App">
      <Parent name=" Child " />
      <FetchData />
    </div>
  );
}

export default App;
