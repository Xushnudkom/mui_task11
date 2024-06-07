import axios from "axios";
import { useEffect, useState } from "react";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState ([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then(response=>{
        setPosts(response.data)
      })
    }, [page, limit])
    const changePage=(type)=>{
      if(type === "prev"){
        if(page > 1){
          setPage(prev => prev -1 )

        }
      }else{
        setPage(prev => prev + 1)
      }
    }
  return (
    <>
    <div className="row">
      <div className="col-md-4">
        <select onChange={(e)=>setLimit(e.target.value)} className="form-control my-2">
          <option value="" selected>Select limit</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
      </div>
    </div>
      <table className="table table-bordered  table-stripped ">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th> 
          </tr>
        </thead>
        <tbody>
          {
            posts.map((item, index)=>(
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="post_butns">
        <button onClick={()=>changePage("prev")} className="but_post1">Prev</button>
        <p className="count">{page}</p>
        <button onClick={()=>changePage("next")} className="but_post2">Next</button>
      </div>
    </>
  );
};

export default Posts



