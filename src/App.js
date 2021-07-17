import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Usestate from './components/UseState';
import EventPractice from './components/EventPactice';
import Validation from './components/Validation';
{
  /*import Scroll from './components/Scroll';*/
}

function App() {
  return (
    <>
      <MyComponent name="Teemo" favoriteNumber={5}>
        chan
      </MyComponent>
      <hr />
      <Usestate />
      <hr />
      <EventPractice />
      <hr />
      <Validation />
      <hr />
      {
        //<Scroll />
      }
    </>
  );
}

export default App;
