import React from 'react';
import './ContactList.css'
import { Table, Button } from 'react-bootstrap';

const ContactList = () => {

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
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>    
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ContactList
