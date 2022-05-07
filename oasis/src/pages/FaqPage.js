import React, {Component}  from 'react'
import Faq from 'react-faq-component';
import './faq.css'

function FaqPage() {
    const data = {
        title: "Frequently Asked Questions",
        rows: [
          {
            title: "What are the hours for which Oasis is available?",
            content: "As you can never predict when you will become ill, our Virtual Health provider is available to help you 24 hours a day, 365 days a year. This ensures that you can always receive the treatment you need when you need it."
          },
          {
            title: "Can Oasis prescribe me any medications?",
            content: "No. Once you have explained your symptoms to one of our providers, they will be able to establish a diagnosis and send any needed prescriptions directly to this app."
          },
          {
            title: "I am not good at technology. Is Oasis right for me?",
            content: "Absolutely! Patients of all ages and different experience levels with technology use Oasis to complete medical appointments. Virtual health visits can be as simple as receiving a phone call or as easy as using a mobile app like FaceTime or Skype or any other video calling Services. "
          },
          {
            title: "How can a health care professional care for me without seeing me in person?",
            content: "Many health care interactions can be done virtually when a professional can see or speak with you. If a physical exam is needed, the health care professional may request that they see you in person. "
          },
          {
            title:"What kind of facilities are avialable virtually?",
            content: " <ul><li>Primary care appointments (including items like medication refills, lab result reviews, contraceptive counseling, aches and pains, minor skin conditions, minor respiratory illness, and more)</li><li>Behavioral health counseling appointments</li> <li>Follow-up appointments for surgeries or other procedures</li> <li>Appointments for many other medical and surgical specialties</li>"
          }]
      }
    return (
        <div className="faq-container">
            <Faq data={data}/>
        </div>
    )
}

export default FaqPage