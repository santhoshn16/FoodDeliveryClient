import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import UserService from '../services/user.service';

const Address = props => {
    const [address, setAddress] = useState();
    const [form, setForm] = useState(false);
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(()=>{
        setAddress(props.address);
    },[setAddress,setUser, props.address]);

    const onRemoveHandler = async (id) => {
        
        const response = await UserService.removeAddress(id,JSON.parse(localStorage.getItem('user')));
        const list = response.data;
        setAddress(list);
    };

    const handleAddress = async (e) => {
        e.preventDefault();
        setForm(false);
        const addressData = {
            'street':street,
            'city': city,
            'zip':zip,
            'username':JSON.parse(localStorage.getItem('user'))
        }
        const response = await UserService.addAddress(addressData);
        const list = response.data;
        setAddress(list);
    };

    const onStreetChange = (e) => {
        const s = e.target.value;
        setStreet(s);
    };

    const onCityChange = (e) => {
        const s = e.target.value;
        setCity(s);
    };

    const onZipChange = (e) => {
        const s = e.target.value;
        setZip(s);
    };

    let content =<form onSubmit={handleAddress}>
    <div className="form-group">
      <label htmlFor="street">Street</label>
      <input type="text" className="form-control" name="street" onChange={onStreetChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="city">City</label>
      <input type="text" className="form-control" name="city" onChange={onCityChange} />
    </div>

    <div className="form-group">
      <label htmlFor="zip">zip</label>
      <input type="number" className="form-control" name="zip" onChange={onZipChange} />
    </div>

    <div className="form-group">
      <button className="btn btn-primary btn-block">Submit</button>
    </div>
  </form> 
    ;

    const onAddAddress = () => {
        setForm(true);
    };

    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Street</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {address && address.map((item =>
                    <tr key={item.id}>
                        <td>{item.street}</td>
                        <td>{item.city}</td>
                        <td>{item.zip}</td>
                        <td><button onClick={() => onRemoveHandler(item.id)}>Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <button onClick={onAddAddress}>Add Address</button>
        {form && content}
        </>
    );
};


export { Address };