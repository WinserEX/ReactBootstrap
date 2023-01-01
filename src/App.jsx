import './App.css'
import CardComp from './Components/cardComp/CardComp'
import { Container, Col, Row, Alert } from 'react-bootstrap'
import ImgComp from './Components/imgComp/imgComp'
import AlertComp from './Components/Alert/Alert'

function App() {

  return (
    <>
      <Container className='container m-5'>
        <Row>
          <Col>
            <ImgComp />
          </Col>
          <Col>
            <CardComp />
          </Col>
        </Row>
        <Row className='m-5'>
          <AlertComp />
        </Row>
        <Row>
          <Col><CardComp /></Col>
          <Col><CardComp /></Col>
          <Col><CardComp /></Col>
        </Row>
      </Container>  
    </>
  )
}

export default App
