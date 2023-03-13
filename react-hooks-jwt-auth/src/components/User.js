import React, { useState } from 'react';
import UserService from '../services/user.service';
import { useEffect } from 'react';
import { Address } from './Address';

import Table from 'react-bootstrap/Table';

const User = props => {
    const [info, setInfo] = useState();
    const [form, setForm] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();

    useEffect(async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await UserService.getUser(user);
        const list = response.data;
        setInfo(list);
    }, []);

    const onEditHandler = () => {
        setForm(true);
        setId(info.id)
        setName(info.name);
        setUsername(info.username);
        setPhone(info.phone_number);
    };

    const onNameChange = (e) => {
        const s = e.target.value;
        setName(s);
    };

    const onUserChange = (e) => {
        const s = e.target.value;
        setUsername(s);
    };

    const onPhoneChange = (e) => {
        const s = e.target.value;
        setPhone(s);
    };

    const handleAddress = async (event) => {
        event.preventDefault();
        const editedData = {
            'id':id,
            'name':name,
            'username':username,
            'phone_number':phone
        }
        console.log(editedData);
        setForm(false);
        const response = await UserService.updateProfile(editedData);
        const list = response.data;
        localStorage.setItem('user',JSON.stringify(list.username));
        setInfo(list);
    };

    let content =<form onSubmit={handleAddress}>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" name="name" defaultValue={name} onChange={onNameChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" className="form-control" name="username" defaultValue={username} onChange={onUserChange} />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="number" className="form-control" name="phone" defaultValue={phone} onChange={onPhoneChange} />
    </div>

    <div className="form-group">
      <button className="btn btn-primary btn-block">Change</button>
    </div>
  </form> 
    ;

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>PhoneNumber</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {<tr key={info && info.id}>
                        <td>{info && info.id}</td>
                        <td>{info && info.name}</td>
                        <td>{info && info.username}</td>
                        <td>{info && info.phone_number}</td>
                        <td><button onClick={onEditHandler}>Edit</button></td>
                    </tr>
                    }
                </tbody>
            </Table>
            {form && content}
            {info && <><p>Roles Assigned</p> <ul>{info.roles.map(i => <li>{i.name}</li>)}</ul></>}
            {info && <Address address={info.address} />}
        </>
    );

}
export default User;