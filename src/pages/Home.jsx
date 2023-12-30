import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {
  const allRestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allRestaurant);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])

  return (
    <Row>
{allRestaurant?.length>0?
     allRestaurant?.map((restaurant)=>(<Col className='px-5 py-3' sm={6} md={4}>
        <RestCard restaurant={restaurant}/>     
        </Col>)) 
              : <p className='text-danger fw-bolder'>No Restaurant Available</p>
}
    </Row>
  )
}

export default Home
