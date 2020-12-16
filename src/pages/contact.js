import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import SeparatorBar from '../modules/SeparatorBar'
import ContactForm from '../modules/ContactForm'
 
const ContactPage = () => (
    <HeaderFooterLayout>
        <SeparatorBar text="Contact"/>
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage