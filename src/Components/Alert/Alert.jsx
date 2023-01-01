import { Alert } from 'react-bootstrap';
import './Alert.css'

function AlertComp() {
    return (
        <Alert variant="dark">
          This is a dark alert.
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
    )
}

export default AlertComp;