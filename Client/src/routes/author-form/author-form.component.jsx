import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './author-form.styles.scss';

const AuthorForm = () => {
   const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      degree: "",
      phoneNumber: "",
      institution: "",
      country: "",
      paper: null
   });

   const handleSubmit = async event => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("title", form.title);
      formData.append("degree", form.degree);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("institution", form.institution);
      formData.append("country", form.country);
      formData.append("paper", form.paper);

      try {
         await axios.post("/api/authors", formData);
         alert("Author registration successful!");
      } catch (error) {
         console.error(error);
         alert("Author registration failed.");
      }
   };

   const handleInputChange = event => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
   };

   const handleFileChange = event => {
      const file = event.target.files[0];
      setForm({ ...form, paper: file });
   };

   return (
      <div className='form-container'>
         <div className='container'>
            <h1>Author Submission Form</h1>
            <Form onSubmit={handleSubmit}>
               <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="title" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formDegree">
                  <Form.Label>Degree</Form.Label>
                  <Form.Control type="text" name="degree" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" name="phoneNumber" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formInstitution">
                  <Form.Label>Institution</Form.Label>
                  <Form.Control type="text" name="institution" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" name="country" required onChange={handleInputChange} />
               </Form.Group>

               <Form.Group controlId="formPaper">
                  <Form.Label>Paper</Form.Label>
                  <Form.Control type="file" name="paper" required accept=".pdf" onChange={handleFileChange} />
               </Form.Group>

               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </div>
      </div>
   );
};

export default AuthorForm;
