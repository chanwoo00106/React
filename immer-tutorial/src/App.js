import React, {useCallback, useRef, useState} from 'react';
import './App.css';

function App() {

  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: [value]
    });
  }, [form]);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    };

    setData({
      ...data,
      array: data.array.concat(info)
    });

    setForm({
      name: '',
      username: ''
    });
    nextId.current += 1;
  }, [data, form.name, form.username]);

  const onRemove = useCallback(id => {
    setData({
      ...data,
      array: data.array.filter(info => info.id !== id)
    });
  }, [data]);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />

        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />

        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} style={{cursor: 'pointer'}} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
