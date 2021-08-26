import axios from "axios";
import { useState } from "react";

import React from "react";

const Userlist = () => {


    const [listofuser,setlistofuser]=useState(

        []
    );

  
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setlistofuser(response.data);
    });
  }, []);



    return (

        <div className="user">

       <ul>  { listofuser.map(e => <li>  {e.name} </li>)}</ul>
        
        
        </div>
      );
}
 
export default Userlist;