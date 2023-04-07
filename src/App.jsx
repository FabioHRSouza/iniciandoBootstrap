import { Form, Row, Col, Card, Container} from "react-bootstrap"

function App() {

  return (
<Container>
      <h1>React bootstrap</h1>

<Card style={{width: '350px'}}>
        <Card.Header><Card.Title>Texto no header</Card.Title></Card.Header>
        <Card.Img src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor felis, cursus in risus ac, auctor molestie ipsum. Quisque lacinia nisl eget ante luctus vestibulum.</Card.Text>
          </Card.Body>
          <Card.Footer><Card.Subtitle>footer do nosso card</Card.Subtitle></Card.Footer>
      </Card>
      <Form>
      <Row>
        <Col className="col-12 col-lg-4 col-md-6">
        <Form.Group>
          <Form.Label>Nome completo</Form.Label>
          <Form.Control placeholder="Digite seu nome" type="text" />
          <Form.Text>Digite nome e sobrenome</Form.Text>
        </Form.Group>
        </Col>
            
        <Col className="col-12 col-lg-4 col-md-6">
          <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control placeholder="Email" type="email" />
          </Form.Group>
        </Col>
        <Col className="col-12 col-lg-4 col-md-6">
          <Form.Group>
          <Form.Label>Telefone:</Form.Label>
          <Form.Control placeholder="Email" type="email" />
          </Form.Group>
        </Col>
      </Row>
      </Form>

    </Container>
    
  )
}

export default App

 
       // m - margin -> [e: end, s: start, t: top, b: bottom, x: eixo x, y: eixo y] + tamanho (1 a 5)
       // p - padding -> [e: end, s: start, t: top, b: bottom, x: eixo x, y: eixo y] + tamanho (1 a 5)
      
      //<div className="shadow">
      //<Button className="m-5 shadow" variant="primary">enviar</Button>
      //  <Button className="p-2" variant="secondary">enviar</Button>
      //  <Button className="mt-2" variant="success">enviar</Button>
      //  <Button className="m-2" variant="light">enviar</Button>
      //  <Button variant="dark">enviar</Button>
      //</div>
