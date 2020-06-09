import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterFull from './components/CounterFull';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UsersList from './components/UsersList';
import Women from './components/Women';
import CounterWrapper from './RP/CounterWrapper';
import CounterRP from './components/CounterRP';
import CounterFullRP from './components/CounterFullRP';
import CounterHook from './components/CounterHook';
import UsersHook from './components/UsersHook';
import FormHook from './components/FormHook';
import About from './components/About';
import DefaultPage from './components/DefaultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/counter">counter</Link>
          ---
          <Link to="/counterfull">counter full</Link>
          ---
          <Link to="/users">users</Link>
          ---
          <Link to="/women">women</Link>
          ---
          <Link to="/counterhook">counter hook</Link>
          ---
          <Link to="/usershook">users hook</Link>
          ---
          <Link to="/form">form</Link>
          ---
          <Link to="/about">about</Link>
        <hr />
        Welcome!
        </div>
        <Switch>
          <Route exact path="/" />
          <Route path="/counter" component={Counter} />
          <Route path="/counterfull" component={CounterFull} />
          <Route path="/users" component={UsersList} />
          <Route path="/women" component={Women} />
          <Route path="/counterhook" component={CounterHook} />
          <Route path="/usershook" component={UsersHook} />
          <Route path="/form" component={FormHook} />
          <Route path="/about" component={About} />
          <Route component={DefaultPage} />
        </Switch>

        <hr />
        RENDER PROPS COUNTERS:
        <CounterWrapper
          render={({
            counter,
            incrementCounter
          }) =>
            <CounterRP
              counter={counter}
              incrementCounter={incrementCounter}
            />
          }
        />

        <CounterWrapper
          render={({
            counter,
            incrementCounter,
            decrementCounter,
            resetCounter
          }) =>
            <CounterFullRP
              counter={counter}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
              resetCounter={resetCounter}
            />
          }
        />

      </BrowserRouter>
    </div>
  );
}

export default App;
