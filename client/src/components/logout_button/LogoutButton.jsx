import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch } from "react-redux"
import { LOG_OUT } from "../../redux/features/user_data/userSlice"


const LogoutButton = () => {
    const {logout} = useAuth0()
    const dispatch = useDispatch()
    const logoutUser = () =>{
      dispatch(LOG_OUT())
      logout({ returnTo: window.location.origin })
    }
  return (
    <button onClick={()=>logoutUser()}>Log out</button>
  )
}

export default LogoutButton