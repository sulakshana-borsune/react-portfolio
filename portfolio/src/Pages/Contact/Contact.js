import React from 'react'
import Navbar from '../../Components/Navbar'
import ContactForm from '../../Components/ContactForm'
import { Container, Card, CardBody } from 'reactstrap'
import Footer from '../../Components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-4">
                <Card>
                    <CardBody>
                        <ContactForm />
                    </CardBody>
                </Card>
            </Container>
            <Footer/>
        </>
    )
}

export default Contact
