import './App.css';
import Navbar from './components/Navbar';
import Panel from './components/Panel';

function App() {
  return (
    <>
      <Navbar title = "Vizualizer"/>
      <Panel path = "Lasan"/>
    </>
  );
}

// Navbar - model(2), attack(3), dropout %age(3)
// left panel - bad half, good half
// right panel - top(3), mid(1), bot(3)

export default App;
