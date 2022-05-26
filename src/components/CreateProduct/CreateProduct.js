import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuid } from 'uuid';

function CreateProduct({newProduct}) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    image: 'https://i.pravatar.cc',
    title: '',
    description: '',
    price: 0,
    id: uuid(),
    category: ''
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.title.length === 0) {
      errors.title = "title is required!";
    }
    if (formData.description.length === 0) {
      errors.description = "description is required!";
    } 
    if (formData.price < 1) {
      errors.price = "price is required";
    } else if (isNaN(formData.price)) {
      errors.price = "Price Should be number";
    } 
    if (Object.keys(errors).length === 0 ) {
        newProduct(formData)
        setIsSubmit(true)
        setFormErrors({})
        handleClose()
    }
    else {
      setFormErrors(errors);
    }
  }
 
  return (
    <div className="mt-5">
      <Button variant="info" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" name="title" value={formData.title} onChange={(e) => handleChange(e)}/>
            </Form.Group>
            {formErrors.title && <p>{formErrors.title}</p>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" name="price" value={formData.price} onChange={(e) => handleChange(e)}/>
            </Form.Group>
            {formErrors.price && <p>{formErrors.price}</p>}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.description} name="description" onChange={(e) => handleChange(e)}/>
            </Form.Group>
            {formErrors.description && <p>{formErrors.description}</p>}

            <Form.Group className="mb-3">
    <Form.Label>Category</Form.Label>
    <Form.Select name="category" value={formData.category} onChange={(e) => handleChange(e)}>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="womens_clothing">women's clothing</option>
            <option value="mens_clothing">Men's clothing</option>   
     </Form.Select>
  </Form.Group>
        <Button variant="success" type="submit">
            Save Product
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateProduct;
