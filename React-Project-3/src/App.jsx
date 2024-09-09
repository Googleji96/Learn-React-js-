import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Display } from "./component/Display";
import { ButtonsContainer } from "./component/ButtonsContainer";

function App() {
  return (
    <>
      <h1>React Calculator</h1>
      <div id="calculator" className="mt-5">
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
