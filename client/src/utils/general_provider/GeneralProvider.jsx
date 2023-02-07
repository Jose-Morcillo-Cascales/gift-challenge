import { Auth0Provider } from '@auth0/auth0-react'

const GeneralProvider = ({ children }) => {
  return (
    <Auth0Provider
            domain={import.meta.env.VITE_API_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_API_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin + '/home'}
            audience={import.meta.env.VITE_API_URL}
        >
           
           {children}
                
        </Auth0Provider>
  )
}

export default GeneralProvider