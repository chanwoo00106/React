import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './Add.css';

const Edit = () => {
    const { id } = useParams();
    const {contact} = useSelector(({reducer}) => ({
        contact: reducer[id - 1]
    }))
    const [input, setInput] = useState({name: contact.name, email: contact.email, phone: contact.phone})
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
        dispatch({type: 'edit', id, payload: input});
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
                        <Button onClick={onClick} variant="danger">Cencel</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Edit
