
import './App.css';
import Footer from './core/Footer';
import Header from './core/Header';
import { Route, Switch } from 'react-router'
import Dashboard from './Dashboard/Dashboard';
import GiftCardProducts from './GiftCards/GiftCardProducts';
import GiftCardDescription from './GiftCards/GiftCardDescription';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' component={Dashboard} exact/>
        <Route path='/gift/:category' component={GiftCardProducts} exact/>
        <Route path='/gift/description/:category/:giftId' component={GiftCardDescription} exact/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
