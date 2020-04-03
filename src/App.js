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
        </div>
        <Switch>
          <Route exact path="/" />
          <Route path="/counter" component={Counter} />
          <Route path="/counterfull" component={CounterFull} />
          <Route path="/users" component={UsersList} />
          <Route path="/women" component={Women} />
        </Switch>

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
