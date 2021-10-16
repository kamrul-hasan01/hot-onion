import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/shoppingcart'>
            <ShoppingCart></ShoppingCart>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/signup'>
            <Signup></Signup>
          </Route>

          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
