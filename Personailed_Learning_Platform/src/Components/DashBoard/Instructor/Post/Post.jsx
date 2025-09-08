import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { url } from "../../../../App";
import "./Post.css"
const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
      formData.append("videoFile", file); // unique key

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
      console.error(
        "Error posting course:",
        error.response?.data || error.message
      );
      alert("Failed to post course.");
      setLoading(false);
    }
  };

  return (
    <div className="post-course-container">
      <h2 className="post-course-heading">Post a New Course</h2>
      <Form onSubmit={handleCourse} className="post-course-form">
        <Form.Group className="post-course-group" controlId="postCourseTitle">
          <Form.Label className="post-course-label">Title</Form.Label>
          <Form.Control
            className="post-course-input"
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group
          className="post-course-group"
          controlId="postCourseDescription"
        >
          <Form.Label className="post-course-label">Description</Form.Label>
          <Form.Control
            className="post-course-textarea"
            as="textarea"
            rows={3}
            placeholder="Enter course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="post-course-group" controlId="postCourseCategory">
          <Form.Label className="post-course-label">Category</Form.Label>
          <Form.Control
            className="post-course-input"
            type="text"
            placeholder="Enter course category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="post-course-group" controlId="postCourseFile">
          <Form.Label className="post-course-label">Upload File</Form.Label>
          <Form.Control
            className="post-course-input-file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="post-course-btn"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Course"}
        </Button>
      </Form>
    </div>
  );
};

export default Post;
