import React, { useEffect , useState} from 'react';
import UserService from '../services/user.service'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

const Rest = () => {

    const [rests, setRests] = useState();

    useEffect(async () => {
        const response = await UserService.getRest();
        const list = response.data;
        console.log(response.data);
        setRests(list);
    }, []);

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
            </tr>
        </thead>
        <tbody>
            {rests && rests.map(ele => <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.username}</td>
            </tr>
            )}
        </tbody>
    </Table>;
};


export default Rest;