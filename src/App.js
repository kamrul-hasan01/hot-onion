import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import Banner from './Components/Banner/Banner';
import Choose from './Components/Choose/Choose';
import Catagories from './Components/Catagories/Catagories';




function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner></Banner>
            <Catagories></Catagories>
            <Breakfast></Breakfast>
            <Choose></Choose>
          </Route>
          <Route path='/breakfast'>
            <Banner></Banner>
            <Catagories></Catagories>
            <Breakfast></Breakfast>
            <Choose></Choose>
          </Route>
          <Route path='/lunch'>
            <Banner></Banner>
            <Catagories></Catagories>
            <Lunch></Lunch>
            <Choose></Choose>
          </Route>
          <Route path='/dinner'>
            <Banner></Banner>
            <Catagories></Catagories>
            <Dinner></Dinner>
            <Choose></Choose>
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
