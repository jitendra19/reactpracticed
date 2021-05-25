import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import CounterButton from './CounterButton';

function Hello() {
  return <div>hello!!!</div>;
}

function Button(props) {
  const handleClick = () => props.clickHandler(props.incrementBy);
  return <button onClick={handleClick}>+{props.incrementBy}</button>;
}

function Display(props) {
  return <div>{props.counter}</div>;
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementBy => setCounter(counter + incrementBy);
  return (
    // <div>
    <React.Fragment>
      <Hello />
      <Button clickHandler={incrementCounter} incrementBy={1} />
      <Button clickHandler={incrementCounter} incrementBy={2} />
      <Button clickHandler={incrementCounter} incrementBy={3} />
      <Button clickHandler={incrementCounter} incrementBy={4} />
      <Button clickHandler={incrementCounter} incrementBy={5} />
      <Display counter={counter} />
      <br />
      <br />
      <CounterButton />
      {/* [<Button />, <br />, <br />, <CounterButton />] */}
    </React.Fragment>
    // </div>
  );
}
