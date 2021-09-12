import React from 'react';
import './ContactList.css'
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ContactList = () => {

    const history = useHistory();
    const onClick = () => history.push('/edit');

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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button onClick={onClick} variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>    
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ContactList
