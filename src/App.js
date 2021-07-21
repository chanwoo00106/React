import React, { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Usestate from './hooks/UseState';
import Counter from './hooks/Counter';
import EventPractice from './components/EventPactice';
import Validation from './components/Validation';
import Map from './components/Map';
import Map2 from './components/Map2';
import LifeCycle from './components/LifeCycle';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';

function App() {
  const [visible, setVisible] = useState(false);

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
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <UseEffect />}
      <hr />
      <UseMemo />
      <UseCallback />
    </>
  );
}

export default App;
