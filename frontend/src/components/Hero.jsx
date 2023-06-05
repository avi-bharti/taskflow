import { Button, Card, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';


const Hero = () => {
   return (  
      <div className="py-5">
         <Container className="d-flex justify-content-center">
            <Card className="py-5 d-flex">
               <h1>Mern Auth</h1>
            </Card>
            <div className="d-flex">
            <LinkContainer to='/login'><Button variant='primary' href="/login" className="me-3">Sign In</Button></LinkContainer>
            <LinkContainer to='/register'><Button variant='primary' href="/register" className="me-3">Sign UP</Button></LinkContainer>
            </div>
         </Container>
      </div>
   );
}
 
export default Hero;