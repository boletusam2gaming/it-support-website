import React, {useState} from "react";
import './Contact.css';
import axios from "axios";

function Contact(){
    const [formData, setFormData] = useState({  
        name: "",
        email: "",
        message: ""
    });


    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
       try{
        const response = await axios.post("http://localhost:5000/send", formData);
        setFeedbackMessage(response.data);
       }catch(error){
            const errorMessage = error.response.data ? error.response.data : 'Failed to send message';
            setFeedbackMessage(errorMessage);
       }
    };

    return(
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message"> Message: </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {feedbackMessage && <p>{feedbackMessage}</p>}
        </div>
    );

}

export default Contact;