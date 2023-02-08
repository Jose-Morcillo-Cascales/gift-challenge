import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import fetchCreateUser from '../../api/fetchCreateUser'
import { LoginButton, LogoutButton} from './../index'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_IN } from '../../redux/features/user_data/userSlice'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const { user: userAuth, isAuthenticated } = useAuth0()
    const dispatch = useDispatch()
    const stateUser = useSelector((state) => state.userData.user);
    const userAsync = async (userData) => {
        const { user } = await fetchCreateUser(userData)
        dispatch(LOG_IN(user))
    }
    useEffect(() => {

        if (isAuthenticated) {
            const userData = {
                username: userAuth?.nickname,
                email: userAuth?.email,
                img: { url: userAuth?.picture }
            }
            userAsync(userData)
        }

    }, [isAuthenticated])

    return (
        <nav >
            <div >
                <a href="#">Navbar</a>
                <form role="search">
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <button type="submit">Search</button>
                    {stateUser.isLogged ?
                        <div>
                            <LogoutButton /> <Link to= "/form">Upload Image</Link>
                        </div>
                        : <LoginButton />}

                </form>
            </div>
        </nav>
    )
}

export default NavBar