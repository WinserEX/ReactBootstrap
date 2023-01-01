import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardCompStyles.css'

function CardComp() {
  return (
        <Card style={{ width: '18rem' }} className="card border-0">
        <Card.Body>
            <Card.Title className='bigText'>React Christmas</Card.Title>
            <Card.Text>
            Christmas is a time for React developers to celebrate their achievements, take a break from work, and appreciate the value of their work and the people around them. It is a time to relax and enjoy the holiday spirit.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
  );
}

export default CardComp;