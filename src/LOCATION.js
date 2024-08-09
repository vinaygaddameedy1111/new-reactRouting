import React from 'react'

import { Container,Row,Col } from 'react-bootstrap'


const LOCATION = () => {

  return (
    <div className="mt=3">
        <Container>
<Row className="rows">

    <Col className="columns " lg={6} sm={6} xl={6}><p>A location is the place where a particular point or object exists. Location is an important term in geography, and is usually considered more precise than "place." A locality is a human settlement: city, town, village, or even archaeological site.</p></Col>

    <Col className="columns" lg={6} sm={6} xl={6}><img src = "https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
    
    </Col>
</Row>
        </Container>
    </div>
  )
}

export default LOCATION