import { NavLink } from "react-router-dom"
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <NavLink to="/main/cars" className="navlink">
            Cars
        <i className="fa-solid fa-car"></i>
        </NavLink>
        <NavLink to="/main/posts" className="navlink">
            Posts
            <i class="fa-solid fa-file-lines"></i>
        </NavLink>
        <NavLink to="/main/comments" className="navlink">
            Comments
            <i class="fa-regular fa-comment"></i>
        </NavLink>
        <NavLink to="/main/albums" className="navlink">
            Albums
            <i class="fa-regular fa-image"></i>
        </NavLink>
        <NavLink to="/main/photos" className="navlink">
            Photos
            <i class="fa-solid fa-camera"></i>
        </NavLink>
        <NavLink to="/main/todos" className="navlink">
            Todos
            <i class="fa-solid fa-users-gear"></i>
        </NavLink>
        <NavLink to="/main/users" className="navlink">
            Users
            <i class="fa-solid fa-users"></i>
        </NavLink>
    </div>
    
  )
}

export default Sidebar