import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {

  const [show, setShow] = useState(false);
  const id = useParams()
  console.log(id);

  const allRestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allRestaurant);
  const selectedrestaurant = allRestaurant.filter(item=>item.id == id)
  console.log(selectedrestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Row className='mt-5 mb-5'>
      <Col md={1}></Col>
      <Col md={3}>
        <img width={'100%'} height={'75%'} className='rounded'  src={selectedrestaurant.photograph} alt="no image" />
      </Col>
      <Col md={7} className='px-4'>
        <hr />
        <h4 className='text-center'><span className='text-warning'>RESTAURANT </span> DETAILS</h4>
        <hr />

        <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedrestaurant.name}</h4></ListGroup.Item>
      <ListGroup.Item> <p>Neibourhood :{selectedrestaurant.neighborhood}</p> </ListGroup.Item>
      <ListGroup.Item> <p>Couisine_type :{selectedrestaurant.cuisine_type}</p> </ListGroup.Item>
      <ListGroup.Item> <p>Address :{selectedrestaurant.address}</p> </ListGroup.Item>
      <ListGroup.Item className=' text-center p-3 mb-2'>

      <button onClick={handleShow} className='btn btn-warning me-4'>Operating Hours</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ListGroup>
      <ListGroup.Item>Monday : {selectedrestaurant.operating_hours}  </ListGroup.Item>
      <ListGroup.Item>Tuesday : {selectedrestaurant.operating_hours} </ListGroup.Item>
      <ListGroup.Item>Wednesday : {selectedrestaurant.operating_hours} </ListGroup.Item>
      <ListGroup.Item>Thursday : {selectedrestaurant.operating_hours} </ListGroup.Item>
      <ListGroup.Item>Friday : {selectedrestaurant.operating_hours} </ListGroup.Item>
      <ListGroup.Item>Saturday : {selectedrestaurant.operating_hours} </ListGroup.Item>
      <ListGroup.Item>Sunday : {selectedrestaurant.operating_hours} </ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>
      <RestReview/>

      </ListGroup.Item>
    </ListGroup>
    <hr />
      </Col>
      <Col md={1}></Col>
    </Row>
  )
}

export default RestView
