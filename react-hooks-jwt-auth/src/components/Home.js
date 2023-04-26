import React, { useEffect, useState } from 'react';
import UserService from '../services/user.service'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

const Home = () => {

    const [rests, setRests] = useState();

    useEffect(() => {
        async function c() {
            const response = await UserService.getRest();
            const list = response.data;
            console.log(response.data);
            setRests(list);
        } c();
    }, []);

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {rests && rests.map(ele => <tr key={ele.id}>
                <td>{ele.id}</td>
                <td><Link to={"/menus"} state={{ id: ele.id }} className="nav-link">{ele.username}</Link></td>
            </tr>
            )}
        </tbody>
    </Table>;
};


export default Home;