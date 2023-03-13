import React, { useEffect , useState} from 'react';
import UserService from '../services/user.service'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Link, NavLink } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Home = () => {

    const [rests, setRests] = useState();

    useEffect(async () => {
        const response = await UserService.getRest();
        const list = response.data;
        console.log(response.data);
        setRests(list);
        const refreshAccessToken = setInterval(AuthService.refreshToken, 400000);
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
                <td><Link to={"/menus"} state={{id:ele.id}} className="nav-link">{ele.username}</Link></td>
            </tr>
            )}
        </tbody>
    </Table>;
};


export default Home;