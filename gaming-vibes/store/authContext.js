import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

//DEFAULT CONTEXT STATE
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
});

//PROVIDER WRAPS THE CONTEXT ABOVE
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  //AUTHREADY IS THE FE CHECKING THE LOGIN STATUS WITH NETLIFY
  const [authReady, setAuthReady] = useState(false); 

  useEffect(() => {

    //NETLIFY EVENT LISTENERS MOUNTED FOR 'LOGIN'/'LOGOUT' EVENTS - GET ACCESS TO 'USER' ARG
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close(); //CLOSES MODAL
      console.log('login event');
    })

    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
    })

    //CHECK WITH NETLIFY FOR USER LOGIN STATUS AFTER PAGE REFRESH - 'init' IS EMITTED AFTER 
    netlifyIdentity.on('init', (user) => {
      setUser(user);
      setAuthReady(true);
      console.log('init event');
    })

    //INIT NETLIFY IDENTITY BACKEND CONNECTION ON COMPONENT MOUNT
    netlifyIdentity.init();

    /*UNMOUNT EVENT LISTENERS AFTER COMPONENT UNMOUNT NOT REALLY REQUIRED HERE AS WRAPPING WHOLE APP (RATHER THAN JUST A COMPONENT) BUT GOOD PRACTICE ANYWAY*/
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    }
  }, []);

  const login = () => {
    //OPENS NETLIFY LOGIN/SIGNUP MODAL
    netlifyIdentity.open();
  }

  const logout = () => {
    netlifyIdentity.logout();
  }

  const context = {
    user, login, logout, authReady
  }

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;