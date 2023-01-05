import './App.css';
import Interval from './componets/Interval';
import WindowSize from './componets/WindowSize';

function App() {

  return (
    <>
      <h1>Open Console</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Interval />
        </div>
        <div style={{ width: "50%" }} >
          <WindowSize />
        </div>
      </div>
    </>
  );
}

export default App;
