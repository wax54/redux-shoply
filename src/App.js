import InventoryList from './InventoryList';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome To My Store!
      </header>
      <main className="App-main">

        <InventoryList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
