import {Link} from "react-router-dom"
import {Container, Logo, LogoutBtn} from "../index"
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

function Header () {
    const authStatus=useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
    const navItems=[
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name:"About",
            slug:"/about",
            active:true
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus
        },
        {
            name:"Donors",
            slug:"/donors",
            active:authStatus
        },
        {
            name:"Blood Requests",
            slug:"/blood_request",
            active:authStatus
        },
    ]
  return (
    <div>
      <Container>
        <Link to="/">
        <Logo/>
        </Link>
        <ul>
            {navItems.map((items)=>
            items.active?(
            <li key={items.name}>
                <button onClick={()=>navigate(items.slug)}>{items.name}
                </button>
            </li>):(null))}

            {authStatus && (
                <li>
                    <LogoutBtn/>
                </li>
            )}
        </ul>
      </Container>
    </div>
  )
}

export default Header
