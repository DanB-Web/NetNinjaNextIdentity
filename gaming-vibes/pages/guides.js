import { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/authContext.js'

import styles from '../styles/Guides.module.css'

export default function Guides() {

  const { user, authReady } = useContext(AuthContext);

  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //WAIT UNTIL 'authReady' BEFORE MAKING REQUEST
    if (authReady) {
      //NOTE THIS IS A RELATIVE PATH ON THE NETLIFY SERVER
      fetch('/api/guides', user && {  //<-- CHECK FOR USER BEFORE TRYING TO ATTACH HEADERS
         headers: {
          Authorization: `Bearer ${user.token.access_token}`
        }
      }).then(res => {
        if(!res.ok) {
          throw Error('You must be logged in to view this content');
        } else {
          return res.json();
        }  
      })
        .then(data => {
          setGuides(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setGuides(null);
        })
    }
  }, [user, authReady])

  return (
    <div className={styles.guides}>

      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{ error }</p>
        </div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.title} className={styles.card}>
          <h3>{guide.title}</h3>
          <h4>Written by {guide.author}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum, neque at efficitur blandit, turpis justo pellentesque enim, lacinia ullamcorper felis felis ac elit. Proin auctor tristique imperdiet. In semper nisi ac arcu finibus, et placerat turpis semper.</p>
        </div>
      ))}


    </div> 
  )
}