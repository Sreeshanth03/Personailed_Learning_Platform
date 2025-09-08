import React from "react";
import { Card } from "react-bootstrap";
import { FaUserGraduate, FaStar, FaChalkboardTeacher, FaAward } from "react-icons/fa";
import "./Tutors.css";

const Tutors = () => {
  const tutorsData = [
    {
      title: "Personalized Learning Verified",
      desc: "All tutors undergo thorough qualifications and strict background checks.",
      img: "https://static.vecteezy.com/system/resources/previews/012/610/613/original/personalized-learning-word-concepts-purple-banner-individual-education-program-infographics-with-icons-on-color-background-isolated-typography-illustration-with-text-vector.jpg",
      icon: <FaUserGraduate />
    },
    {
      title: "Rigorous Selection",
      desc: "Through a meticulous selection process, we choose only the top 3% of tutors.",
      img: "https://tse1.mm.bing.net/th/id/OIP.zY0vZh0OtsYaxttBgN25KwHaDt?pid=Api&P=0&h=180",
      icon: <FaStar />
    },
    {
      title: "Extensive Training",
      desc: "All tutors complete an extensive training program before they are matched with a student.",
      img: "https://whatfix.com/blog/wp-content/uploads/2022/11/instructional-design-software-1.png",
      icon: <FaChalkboardTeacher />
    },
    {
      title: "Award-Winning Curriculum",
      desc: "Tutors follow a highly acclaimed curriculum ensuring maximum learning outcomes.",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
      icon: <FaAward />
    }
  ];

  return (
    <div className="tutors-container">
      <div className="tutors-header">
        <h3>Excellent Tutors for Your Child’s Journey to Excellence</h3>
        <h6>
          We help your child find the perfect match from our array of top
          tutors, guiding them to academic growth through personalized
          one-on-one sessions.
        </h6>
      </div>

      <div className="tutors-subtitle">Reasons to Trust Our Tutors</div>

      <div className="tutors-cards">
        {tutorsData.map((tutor, idx) => (
          <Card className="tutors-card" key={idx}>
            {tutor.icon}
            <img src={tutor.img} alt={tutor.title} />
            <h4>{tutor.title}</h4>
            <h6>{tutor.desc}</h6>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
