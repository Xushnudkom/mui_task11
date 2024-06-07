import './users.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Users = () => {
  const [users, setUsers] = useState ([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      setUsers(response.data)
    })
  }, [])
return (
  <>
    <table className="table table-bordered  table-stripped ">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>  
          <th>company.name</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item, index)=>(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.company.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    
  </>
);
}
  
  export default Users