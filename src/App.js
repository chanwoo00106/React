import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Usestate from './hooks/UseState';
import Counter from './hooks/Counter';
import EventPractice from './components/EventPactice';
import Validation from './components/Validation';
import Map from './components/Map';
import Map2 from './components/Map2';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <>
      <MyComponent name="Teemo" favoriteNumber={5}>
        chan
      </MyComponent>
      <hr />
      <Usestate />
      <hr />
      <Counter />
      <hr />
      <EventPractice />
      <hr />
      <Validation />
      <hr />
      <Map />
      <hr />
      <Map2 />
      <hr />
      <LifeCycle />
    </>
  );
}

export default App;
