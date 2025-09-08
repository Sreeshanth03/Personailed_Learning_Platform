import React from 'react'
import "./Home.css"
import { Button, Form, Accordion } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { FaUserTie, FaChalkboard, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/login")
  }
  const HandleSignUp = () => {
    navigate("/Signup")
  }
  const HandleTutors = () => {
    navigate("/tutors")
  }

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header">
        <h1 className="home-title">Personalized Learning Platform</h1>

        <div className="header-actions">
          <h6 className="tutors-link" onClick={HandleTutors}>Our Tutors</h6>
          <Button variant="primary" onClick={HandleLogin}>Login</Button>
          <Button variant="success" onClick={HandleSignUp}>Sign Up</Button>
        </div>
      </div>
  <div style={{ textAlign: "center", margin: "20px 0" }}>
  <img 
    src="https://getwallpapers.com/wallpaper/full/5/5/0/834454-learning-wallpapers-3840x2160-mobile.jpg" 
    alt="Learning Wallpaper"
    style={{ 
      maxWidth: "100%",      // image won't overflow container
      height: "auto",        // maintain aspect ratio
      borderRadius: "10px",  // slightly rounded corners
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"  // subtle shadow
    }}
  />
</div>  
  {/* Hero Section */}
<div className="hero-section">
  <div className="hero-content">
    <h2 className="hero-title">1:1 Tutoring That Helps Your Child Excel at School</h2>
    <p className="hero-description">
      Math, Science & ELA for Grades 4 - 10 <br />
      55 Minute Sessions Aligned to Their School Curriculum <br />
      Flexible Scheduling to Fit Busy Family Life
    </p>
    <div className="hero-icons">
      <i className="fas fa-book-open"></i>
      <i className="fas fa-chalkboard-teacher"></i>
      <i className="fas fa-clock"></i>
    </div>
  </div>
</div>

{/* Programming Courses */}
<div className="programming-section">
  <h2 className="programming-title">Programming Courses</h2>
  <p className="programming-description">
    Python, Java, C#, JavaScript & More <br />
    60 Minute Sessions Aligned to Real-World Projects <br />
    Flexible Scheduling to Fit Busy Student Life
  </p>

  {/* Course Categories */}
  <div className="course-categories">
    {/* Frontend */}
    <div className="course-card frontend">
      <i className="fas fa-code"></i>
      <h3>Front-End</h3>
      <p>HTML, CSS, JavaScript, React.js – Build beautiful interfaces</p>
    </div>
    {/* Backend */}
    <div className="course-card backend">
      <i className="fas fa-server"></i>
      <h3>Back-End</h3>
      <p>Python, Node.js, C#, Django – Work with data & APIs</p>
    </div>
    {/* Schooling */}
    <div className="course-card schooling">
      <i className="fas fa-graduation-cap"></i>
      <h3>Schooling</h3>
      <p>Math, Science & ELA – Personalized learning for grades 4-10</p>
    </div>
  </div>
</div>


      {/* Tutor Matching Process */}
      {/* <div className="matching-section">
        <h1 className="matching-title">How We Match a Tutor with Your Child</h1>
        <div className="matching-step step-1">
          <h2>1) Expert Counseling</h2>
          <h6>
            Our Academic Counselor will call you to discuss your child's needs and determine the best approach to support their learning.
          </h6>
        </div>
        <div className="matching-step step-2">
          <h2>2) Choose the Perfect Tutor</h2>
          <h6>
            You will receive carefully selected profiles of tutors who best fit your child, allowing you to choose your preferred tutor.
          </h6>
        </div>
        <div className="matching-step step-3">
          <h2>3) Watch the Difference</h2>
          <h6>
            Your child will have a 60-minute trial class with their selected tutor in the chosen subject, with you in attendance.
          </h6>
        </div>
      </div> */}<div className="matching-section">
  <h1 className="matching-title">How We Match a Tutor with Your Child</h1>

  <div className="matching-step step-1">
    <FaUserTie className="step-icon" />
    <h2>1) Expert Counseling</h2>
    <h6>
      Our Academic Counselor will call you to discuss your child's needs and determine the best approach to support their learning.
    </h6>
  </div>
  <div className="matching-step step-2">
    <FaLaptopCode className="step-icon" />
    <h2>2) Choose the Perfect Tutor</h2>
    <h6>
      You will receive carefully selected profiles of tutors who best fit your child, allowing you to choose your preferred tutor.
    </h6>
  </div>
  <div className="matching-step step-3">
    <FaChalkboard className="step-icon" />
    <h2>3) Watch the Difference</h2>
    <h6>
      Your child will have a 60-minute trial class with their selected tutor in the chosen subject, with you in attendance.
    </h6>
  </div>
</div>


{/* Subjects Section */}
<div className="subjects-section">
  <h1 className="subjects-title">Get help with all your school subjects</h1>
  <div className="marquee-container">
    <div className="marquee-content">
      <i className="fa fa-code"></i> Programming Languages & Technologies: Python, Java, C#, JavaScript, React, HTML, CSS, .NET, Azure, AWS, Data Science, Artificial Intelligence
<i className="fa fa-laptop-code"></i>
    </div>
  </div>
</div>

{/* Grades Section */}
{/* <div className="grades-section">
  <h1 className="grades-title">In All Grades</h1>
  <div className="grade-level animate-grade">
    <h2 className="primary-school"><i className="fa fa-child"></i> Primary School (1 to 5)</h2>
  </div>
  <div className="grade-level animate-grade">
    <h2 className="middle-school"><i className="fa fa-user-graduate"></i> Middle School (6 to 8)</h2>
  </div>
  <div className="grade-level animate-grade">
    <h2 className="high-school"><i className="fa fa-school"></i> High School (9 to 12)</h2>
  </div>
  <div className="grade-level animate-grade">
    <h2 className="adult-learning"><i className="fa fa-briefcase"></i> 13 to Jobs</h2>
  </div>
</div> */}
<div 
  className="grades-section" 
  style={{
    textAlign: "center",
    padding: "40px 20px",
    background: "linear-gradient(120deg, #fdfbfb, #ebedee)",
    borderRadius: "15px",
    maxWidth: "1200px",
    margin: "40px auto",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  }}
>
  <h1 
    className="grades-title" 
    style={{
      fontSize: "2.5rem",
      marginBottom: "30px",
      color: "#333"
    }}
  >
    In All Grades
  </h1>

  <div 
    className="grade-level animate-grade" 
    style={{
      margin: "20px 0",
      padding: "15px",
      borderRadius: "10px",
      background: "#ffffff",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
  >
    <h2 
      className="primary-school" 
      style={{
        fontSize: "1.5rem",
        color: "#ff7f50",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      <i className="fa fa-child"></i> Primary School (1 to 5)
    </h2>
  </div>

  <div 
    className="grade-level animate-grade" 
    style={{
      margin: "20px 0",
      padding: "15px",
      borderRadius: "10px",
      background: "#ffffff",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
  >
    <h2 
      className="middle-school" 
      style={{
        fontSize: "1.5rem",
        color: "#32cd32",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      <i className="fa fa-user-graduate"></i> Middle School (6 to 8)
    </h2>
  </div>

  <div 
    className="grade-level animate-grade" 
    style={{
      margin: "20px 0",
      padding: "15px",
      borderRadius: "10px",
      background: "#ffffff",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
  >
    <h2 
      className="high-school" 
      style={{
        fontSize: "1.5rem",
        color: "#1e90ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      <i className="fa fa-school"></i> High School (9 to 12)
    </h2>
  </div>

  <div 
    className="grade-level animate-grade" 
    style={{
      margin: "20px 0",
      padding: "15px",
      borderRadius: "10px",
      background: "#ffffff",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
  >
    <h2 
      className="adult-learning" 
      style={{
        fontSize: "1.5rem",
        color: "#8a2be2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      <i className="fa fa-briefcase"></i> 13 to Jobs
    </h2>
  </div>
</div>



<div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '20px'
}}>
   <h2 className="form-title" style={{ marginBottom: '20px', fontSize: '1.8rem', textAlign: 'center', color: '#333' }}>
      Set your child on the journey to academic excellence today
    </h2>
  <Form className="registration-form" style={{
    flex: '1 1 400px',
    minWidth: '300px',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
  }}>
   
    
    <Form.Group className="mb-3" controlId="studentName">
      <Form.Label>Student's Name</Form.Label>
      <Form.Control type="text" placeholder="Jade Smith" />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Phone Number</Form.Label>
      <div className="phone-input-group" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Form.Select className="me-2" style={{ flex: '1 1 150px' }}>
          <option>Select country</option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
        </Form.Select>
        <Form.Control type="tel" placeholder="Enter your phone number" style={{ flex: '2 1 200px' }} />
      </div>
    </Form.Group>

    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter your email address" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="grade">
      <Form.Label>Select Grade</Form.Label>
      <Form.Select>
        <option>Select one...</option>
        <option value="1">Grade 1</option>
        <option value="2">Grade 2</option>
        <option value="3">Grade 3</option>
        <option value="4">Grade 4</option>
        <option value="5">Grade 5</option>
        <option value="6">Software</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="curriculum">
      <Form.Label>Which curriculum does the student follow?</Form.Label>
      <Form.Select>
        <option>Select one...</option>
        <option value="cbse">CBSE</option>
        <option value="icse">ICSE</option>
        <option value="ib">IB</option>
        <option value="cambridge">Cambridge</option>
        <option value="Other">Other</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="goals">
      <Form.Label>What are your primary goals for using our services?</Form.Label>
      <div>
        <Form.Check type="checkbox" label="Improving grades" />
        <Form.Check type="checkbox" label="Extra help with school subjects" />
        <Form.Check type="checkbox" label="Filling learning gaps" />
        <Form.Check type="checkbox" label="Summer learning program" />
        <Form.Check type="checkbox" label="Building strong basics" />
        <Form.Check type="checkbox" label="Improving Programming Skills" />
      </div>
    </Form.Group>

    <Form.Group className="mb-3" controlId="iam">
      <Form.Label>I am a</Form.Label>
      <Form.Select>
        <option>Select one...</option>
        <option value="parent">Parent</option>
        <option value="student">Student</option>
        <option value="guardian">Guardian</option>
      </Form.Select>
    </Form.Group>

    <Button variant="primary" type="submit" size="lg" style={{
      width: '100%',
      padding: '10px',
  
      fontSize: '1.1rem',
      marginTop: '15px'
    }}>Submit</Button>
  </Form>

  <img 
    src="https://ivypanda.com/blog/wp-content/uploads/2023/05/students-working-study-group.jpg" 
    alt=""
     
    style={{
      flex: '1 1 400px',
      maxWidth: '500px',
   
      minWidth: '300px',
      width: '100%',
      borderRadius: '15px',
      objectFit: 'cover',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
    }} 
  />

</div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What qualifications do your tutors have?</Accordion.Header>
            <Accordion.Body>
              Our tutors are highly qualified, with strong academic backgrounds and teaching experience in their respective subjects.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does one-on-one tutoring benefit my child?</Accordion.Header>
            <Accordion.Body>
              One-on-one tutoring ensures personalized attention, customized learning plans, and faster academic improvement.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What subjects do you offer tutoring in?</Accordion.Header>
            <Accordion.Body>
              We offer tutoring in core subjects such as Math, Science, English, and more depending on the grade and curriculum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How are tutoring sessions conducted?</Accordion.Header>
            <Accordion.Body>
              Sessions are conducted online through interactive platforms with video, audio, and collaborative tools.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How often should my child attend tutoring sessions?</Accordion.Header>
            <Accordion.Body>
              Frequency depends on your child's needs, but most students benefit from 2–3 sessions per week.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is there a long-term commitment required?</Accordion.Header>
            <Accordion.Body>
              No, we offer flexible plans. You can choose short-term or long-term options based on your preferences.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* Certificate */}
      <div className="certificate-section">
        <h1>Certificate</h1>
        <div className="certificate-container">
          <div className="certificate-border">
            <h1 className="certificate-title">Certificate of Achievement</h1>
            <p className="certificate-subtitle">
              Awarded by <span className="platform">Personalized Learning Platform</span>
            </p>
            <div className="certificate-body">
              <h2>Congratulations!</h2>
              <p>This certificate is proudly presented to</p>
              <h2 className="student-name">[ Student Name ]</h2>
              <p>For successfully completing the program with dedication and excellence. 🎓</p>
            </div>
            <div className="certificate-footer">
              <div className="signature">
                <hr />
                <p>Instructor Signature</p>
              </div>
              <div className="date">
                <hr />
                <p>Date</p>
              </div>
            </div>
            <p className="certificate-wish">✨ All the best for your future! ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home