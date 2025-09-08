import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { url } from "../../../../App";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

//   const handleCourse = async (e) => {
//     e.preventDefault();
//     if (!title || !description || !category || !file) {
//       alert("Please fill all fields and upload a file");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("file", viedo); // append the uploaded file

//       const res = await axios.post(`${url}Courses/`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("Course posted successfully:", res.data);
//       alert("Course posted successfully!");
//       // Reset form
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setFile(null);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error posting course:", error.response?.data || error.message);
//       alert("Failed to post course.");
//       setLoading(false);
//     }
//   };
const handleCourse = async (e) => {
  e.preventDefault();
  if (!title || !description || !category || !file) {
    alert("Please fill all fields and upload a file");
    return;
  }

  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("viedo", file); // corrected key

    const res = await axios.post(`${url}Courses/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Course posted successfully:", res.data);
    alert("Course posted successfully!");
    setTitle("");
    setDescription("");
    setCategory("");
    setFile(null);
    setLoading(false);
  } catch (error) {
    console.error("Error posting course:", error.response?.data || error.message);
    alert("Failed to post course.");
    setLoading(false);
  }
};
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Post a New Course</h2>
      <Form onSubmit={handleCourse}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="viedo">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Course"}
        </Button>
      </Form>
    </div>
  );
};

export default Post;
