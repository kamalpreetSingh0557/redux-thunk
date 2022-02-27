import React, {useState, useEffect} from 'react';
import axios from 'axios';

function User(){
    // No need because ab ise Redux(Store) se globally available krva diya no need locally "states" bnane ki
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(async() => {
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            //console.log(res);
            let data = res.data;
            //console.log(data);
            setUsers(data);
            setLoading(false);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
    })

    return(
        <>
            {
                loading ? <h1>Loading....</h1> : error != "" ? <h1>{error}</h1> :
                <ul>
                    {
                        users.map((user) => (
                            <li>{user.name}</li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

export default User;