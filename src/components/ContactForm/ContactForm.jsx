import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from './Contact.module.css'
import Button from '../button/Button'

const ContactForm = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.contact_form}> 
        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<MdOutlineMessage fontSize="24px" />} />
      </div>

      <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm
