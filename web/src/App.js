import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Navbar title = "Vizualizer" d1="MNIST" d2="STL-10" a1="L-BFGS" a2="FGSM" a3="State-of-art" dp1="20" dp2="25" dp3="30"/>
  );
}

export default App;
