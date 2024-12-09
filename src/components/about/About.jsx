import React from "react";
import missionImage from "../../assets/mission.jpg";
import vision from "../../assets/vision.jpg";
import teamMember2 from "../../assets/teammember2.jpg";
import teamMember4 from "../../assets/teammember4.jpg";
import teamMember3 from "../../assets/teammember3.jpg";
import teamMember5 from "../../assets/teammember5.jpg";
import teamMember1 from "../../assets/teammember1.jpg";
import teamMember6 from "../../assets/teammember6.jpg";
import teamMember7 from "../../assets/teammember7.jpg";
import './About.css';

function About() {
  const teamMembers = [
    { name: "Somu Likitha", image: teamMember1 },
    { name: "Singipurapu Uday Bhaskar", image: teamMember6 },
    { name: "Kagitha Bhavitha Sri", image: teamMember2 },
    { name: "Sri Hari Sai Praneeth", image: teamMember5 },
    { name: "Koduri Durga Prasad", image: teamMember3 },
    { name: "Mandava Sai Venkata Aditya Vardhan", image: teamMember4 },
    { name: "Vutukuri P V N Sri Harshini", image: teamMember7 },
  ];

  return (
    <div>
      <main>
        {/* Mission Section */}
        <section id="mission" className="section-container">
          <h2>Our Mission</h2>
          <div className="mv-text">
            <p>
              To create an innovative and user-friendly platform that centralizes all events happening at PVPSIT, including MLSA and other club activities. By simplifying event discovery, registration, and management, we aim to bridge the gap between students and organizers, promoting active participation and ensuring a seamless event experience.
            </p>
            <img src={missionImage} alt="Mission Image" />
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section-container">
          <h2>Our Vision</h2>
          <div className="mv-text">
            <p>
              We envision transforming PVPSIT into a hub of creativity, collaboration, and learning through our platform. By enabling students to effortlessly connect with events and providing organizers with powerful tools to manage and promote their activities, we aspire to foster a thriving community where every event inspires growth, networking, and lifelong memories.
            </p>
            <img src={vision} alt="Vision Image" />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-container">
          <h2>Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
