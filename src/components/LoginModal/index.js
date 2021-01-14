import React, {useRef, useCallback, useEffect, useState} from 'react' 
import {myLocalStorage} from '../../components/helper'
 
import styles from './style.module.css'

const users = [
    {
      username: "mate",
      password: "123"
    },
    {
      username: "jure",
      password: "123"
    },
]

const LoginModal = ({showModal, setShowModal}) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const submit = () => {
        setError(false)
        setLoading(true)
        setTimeout(() => {
        const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
        setLoading(false)
        if (loginSuccessful) {
            myLocalStorage.setItem("loggedIn", username)
            setError('Success')
            setShowModal(false);            
        }
            setError('Wrong username or password')
        }, 2000)
    }

    const modalRef = useRef();
    
    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        }, [setShowModal, showModal]
      );

    useEffect( () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
    );

    return(
        <>
            {showModal? (
                <div className={styles.background} ref={modalRef} onClick={closeModal} onKeyDown={key => {
                    if (key.key === "Enter")
                      return submit()
                  }}>
                    <section className={styles.loginModal} showModal={showModal}>
                        <section className={styles.field}>
                            <label htmlFor="username">
                            Username
                            </label>
                            <input name="username" onChange={e => setUserName(e.target.value)}/>
                        </section>

                        <section className={styles.field}>
                            <label htmlFor="password">
                            Password
                            </label>
                            <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
                        </section>
                        <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
                        <button className={styles.loginButton} onClick={() => submit()}>
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                        <button className={styles.btn} onClick={() => setShowModal(prev => !prev)}>Close</button>
                    </section>
                </div>
            ) : null}
        </>
)}
 
export default LoginModal