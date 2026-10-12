
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../services/authService'

const LogoutBtn = () => {
    const dispatch=useDispatch()

    const LogoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    
  return (
    <button onClick={LogoutHandler} className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full'>
      LogOut
    </button>
  )
}

export default LogoutBtn

