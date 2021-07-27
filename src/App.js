import { Switch, Route, Redirect, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import InventoryList from './InventoryList';
import Cart from './Cart';
import './App.css';
import ItemDetail from './Item/ItemDetail';

function App() {

  return (
    <div className="App">
        <AppHeader />
      <main className="App-main">
        <Switch>
          <Route exact path="/">
            <InventoryList />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
          
          <Route exact path="/items/:id">
            <ItemDetail />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

function AppHeader () {
  const itemsInCart = useSelector(state => {
    Object.keys(state.cart).reduce((totalItems, key) => (
      totalItems + state.cart[key].qty
    ), 0);
  });
  return (
    <header className="App-header">
      <Link to="/" >
          Home
      </Link>
      <Link to="/cart">
          Cart
          <small>
            ({itemsInCart})
          </small>
      </Link>
    </header>
  )
}
export default App;
