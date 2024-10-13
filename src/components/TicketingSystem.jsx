import React, {useState} from "react";
import './TicketingSystem.css';


function TicketingSystem(){

    const [tickets, setTickets] = useState({});
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "",
        issue: "",
        status: "",
    });
    

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTickets([...tickets, ticket]);
        setFormData({
            title: "",
            description: "",
            priority: "",
            issue: "",
            status: "",
        });
    };
    
    return(
        <div className="ticketing-system">
            <h1>Ticketing System</h1>
            <p>Here you can create a ticket to get help from our IT support team</p>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="First and Last name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Issue: </label>
                    <input 
                        name="issue"
                        value={formData.issue}
                        placeholder="Issue"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Ticket</button>
            </form>
            <h2>Submitted Tickets</h2>
            <ul>
            {Array.isArray(tickets) && tickets.map((ticket, index) => (
                <li key={index}>
                    <h3>{ticket.title}</h3>
                    <p><strong>Name:</strong> {ticket.name}</p>
                    <p><strong>Email:</strong> {ticket.email}</p>
                    <p><strong>Description:</strong> {ticket.description}</p>
                    <p><strong>Priority:</strong> {ticket.priority}</p>
                    <p><strong>Issue:</strong> {ticket.issue}</p>
                    <p><strong>Status:</strong> {ticket.status}</p>
                </li>
        ))}
            </ul>
        </div>
    );
}

export default TicketingSystem;