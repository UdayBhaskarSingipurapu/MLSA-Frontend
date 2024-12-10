import React from 'react'
import './Mlsa.css';

function Mlsa() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div>
          <h1>Welcome to MLSA Events</h1>
          <p>Explore and stay updated on the upcoming MLSA events, workshops, and activities.</p>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="events-section">
        <h2>Upcoming MLSA Events</h2>
        <div className="event">
          <div>
            <img src="./images/ai1.jpg" alt="Tech Talk AI" />
            <div className="event-details">
              <h3>Tech Talk: Future of AI</h3>
              <p className="organizer">Organized by: MLSA</p>
              <p>
                The "Future of AI" tech talk explores the transformative potential of AI across industries, including
                healthcare, business, and education. It will cover advancements in machine learning, ethical challenges,
                and the role of AI in solving global issues. Join us to learn how AI will shape the future and impact
                our daily lives.
              </p>
              <a href="register-tech-talk.html" className="register-btn">
                Register Now
              </a>
            </div>
          </div>
        </div>

        <div className="event">
          <div>
            <img src="./images/webdevvvv.jpg" alt="Workshop on Web Development" />
            <div className="event-details">
              <h3>Workshop on Web Development</h3>
              <p className="organizer">Organized by: MLSA</p>
              <p>
                The "Workshop on Web Development" will provide hands-on experience in building responsive and dynamic
                websites. Participants will learn key technologies like HTML, CSS, JavaScript, and more, along with
                best practices in web design and development. Join us to enhance your skills and create functional,
                user-friendly websites.
              </p>
              <a href="register-webdev-workshop.html" className="register-btn">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mlsa