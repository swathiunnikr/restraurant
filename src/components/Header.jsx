import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar variant='dark' >
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          <h5 className='mt-3 ms-4'> <span className='text-warning'>Food</span> Circle </h5>
          </Navbar.Brand>
         
          <input onChange={(e)=> dispatch(search(e.target.value))} type="text" className='form-control w-25 ' placeholder='search by Neighborhood' />
   
        </Container>
      </Navbar>
  )
}

export default Header
