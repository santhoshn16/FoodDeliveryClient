import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import UserService from '../services/user.service';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MenuItem from './MenuItem';

const Menus = props => {
    const location = useLocation();
    const {id} = location.state;
    const [info, setInfo] = useState();

    useEffect(() => {
      async function v(){
        const response = await UserService.getMenu(id);
        const list = response.data;
        //console.log(response.data);
        setInfo(list);
    }
    v();
  }, [setInfo, id]);


    return (
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="information" title="INFORMATION">
            Restaurant : {info && info.username}<br></br>
            Phone Number : {info && info.phone_number}<br></br>
            Address : {info && info.address.street +', '+ info.address.city +', ' +info.address.zip}
          </Tab>
          <Tab eventKey="menu" title="MENU">
            {info && <MenuItem items={info.menuItems}/>}
          </Tab>
        </Tabs>
      );
};


export { Menus };