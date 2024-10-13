import React from "react";
import './KnowledgeBase.css';


function KnowledgeBase(){

    const[expandedIndex, setExpandedIndex] = React.useState(null);

    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page."
        },
        {
            question: "How do I set up my email on my phone?",
            answer: "Follow the instructions provided in the email setup guide available in the documentation section."
        },
        {
            question: "What should I do if my computer is running slow?",
            answer: "Try restarting your computer and closing unnecessary programs. If the issue persists, contact IT support."
        }
    ];
    const toggleFAQ = (index) => {
        if(expandedIndex === index){
            setExpandedIndex(null);
        }else{
            setExpandedIndex(index);
        }
    };

    return(
        <div className="knowledgebase">
            <h1>Knowledge Base</h1>
            <p>Here you can find all the information you need to know about IT support</p>
            <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Technical Services</li>
          <li>Network Setup</li>
          <li>Software Installation</li>
          <li>Hardware/Software Repair</li>
        </ul>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
           <li key={index} onClick={() => toggleFAQ(index)}>
           <div className="faq-question">
             <strong>{faq.question}</strong>
             <span className={`arrow ${expandedIndex === index ? "down" : "side"}`}></span>
           </div>
           {expandedIndex === index && <p>{faq.answer}</p>}
         </li>  
         ))}
        </ul>
      </div>
    </div>
    )

}

export default KnowledgeBase;