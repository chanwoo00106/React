import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './Add.css';
import { add } from '../modules/contacts';

const Add = () => {
    const [input, setInput] = useState({name: "", email: "", phone: ""})
    const history = useHistory();
    const dispatch = useDispatch();
    const onClick = () => history.goBack();

    const onChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        dispatch(add(input));
        history.push('/');
    }

    return (
        <main>
            <div className="btn-field">
              <Button onClick={onClick} variant="outline-dark">Go Back</Button>
            </div>
            <div className="input-box">
                <div className="inputs">
                    <input placeholder="name" value={input.name} onChange={onChange} name="name" type="text" />
                    <input placeholder="email" value={input.email} onChange={onChange} name="email" type="email" />
                    <input placeholder="phone" value={input.phone} onChange={onChange} name="phone" type="text" />
                    <div className="buttons">
                        <Button onClick={onSubmit} variant="primary">Update Contact</Button>
                        <Button onClick={onClick} variant="danger">Cancel</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Add
