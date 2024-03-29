import React from 'react';
import './ContactList.css'
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const ContactList = () => {

    const history = useHistory();
    const onClick = id => history.push(`/edit/${id}`);

    const { contacts } = useSelector(({reducer}) => ({
        contacts: reducer
    }));

    const dispatch = useDispatch();

    const onDelete = id => {
        if (window.confirm('정말로 삭제하시겠습니까?')) dispatch({type: 'delete', id});
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(x => (
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.phone}</td>
                        <td>
                            <Button onClick={() => onClick(x.id)} variant="primary">Edit</Button>
                            <Button onClick={() => onDelete(x.id)} variant="danger">Delete</Button>    
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ContactList
