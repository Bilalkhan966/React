import React, {useState, useEffect} from 'react'
import axios from 'axios';
const Table = () => {
    const [user, setUsers] = useState([])
  useEffect(() => {
     const loadData = async () => {
     const {data} = await axios.get("https://api.github.com/users");
     setUsers(data)
     }
     loadData();
  }, [user])
    return(
        <div>
            <ul>
                {
                    user.map(user => {
                        return <li key={user.id}>{user.login}-{user.id}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Table