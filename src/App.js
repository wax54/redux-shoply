import InventoryList from './InventoryList';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart />
        <InventoryList /> 
      </header>
    </div>
  );
}

export default App;
