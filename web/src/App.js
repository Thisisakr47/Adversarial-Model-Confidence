import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title = "Vizualizer" d1="MNIST" d2="STL-10" a1="L-BFGS" a2="FGSM" a3="State-of-art" dp1="10" dp2="20" dp3="30"/>
    </>
  );
}

// Navbar - model(2), attack(3), dropout %age(3)
// left panel - bad half, good half
// right panel - top(3), mid(1), bot(3)

export default App;
