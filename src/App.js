import './App.css';
import Interval from './componets/Interval';
import WindowSize from './componets/WindowSize';

function App() {

  // const [seconds, setSeconds] = useState(0);

  // useInterval(() => {
  //   setSeconds(seconds + 1);
  // }, 1000);


  return (
    <>
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
