import { useAuth0 } from '@auth0/auth0-react'
import {LoginButton} from './../index'

const NavBar = () => {
    const {user:userAuth} = useAuth0()
    console.log(userAuth)
    return (
        <nav >
            <div >
                <a  href="#">Navbar</a>
                <form  role="search">
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <button type="submit">Search</button>
                    <LoginButton />
                </form>
            </div>
        </nav>
    )
}

export default NavBar