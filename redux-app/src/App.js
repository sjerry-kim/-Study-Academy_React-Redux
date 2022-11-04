import './App.css';
import CounterBox from './components/ConterBox';
import Memo from './components/Memo';
import News from './components/News';
import NewsSagaBox from './components/NewsSagaBox';


function App() {
  return (
    <div className="App">
      <CounterBox />
      <Memo />
      <News />
      <NewsSagaBox />
    </div>
  );
}

export default App;
