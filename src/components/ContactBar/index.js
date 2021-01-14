import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
 
import styles from './style.module.css'
import LoginModal from '../LoginModal'
 
const ContactBar = () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
    <main className={styles.container}>
       <span>example@email.com</span>
       <button onClick = {openModal}><FontAwesomeIcon icon={faEnvelope} color="white" /></button>
       <LoginModal showModal={showModal} setShowModal={setShowModal}/>
       <span>+0385911122334</span>
       <FontAwesomeIcon icon={faPhone} color="white"/>
    </main>
)}
 
export default ContactBar