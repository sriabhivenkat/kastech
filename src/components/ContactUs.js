import React, { useState } from 'react'
import './ContactUs.css';
import '../App.css';
import { db } from '../firebase';



const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name, 
            email:email, 
            subject: subject, 
            message:message,
        }) 
        .then(() => {
            alert("Message has been sent. Have a nice day! 😎");
        })

        .catch((error) => {
            alert(error.message);
        });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return(
        <>
            <div className='wrapper2'>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact Us 📱</h1>
                    
                    
                    <label>Name</label>
                    <input 
                        placeholder="Enter name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>E-mail</label>
                    <input 
                        placeholder='Enter email' 
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <label>Subject</label>
                    <input 
                        placeholder="Enter subject header"
                        value={subject}
                        onChange = {(e) => setSubject(e.target.value)} 
                    />

                    <label>Message</label>
                    <textarea 
                        placeholder="Enter message"
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                    >

                    </textarea>
                    

                    <button type="submit" onClick="button::after">Blast-off! 🚀</button>
                </form>
            </div>
        </>
    );
}



export default ContactUs;