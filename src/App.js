import { Container, Row } from "react-bootstrap";
import BookComponent from "./components/BookComponents";

function App() {
  
  return (

    <Container>
      <Row>
      <BookComponent title="Internship" description="To those are you who want to gain experience in a start-up industry, especially in Artificial Intelligence."/>
      <BookComponent title="Contact Us" description="Ask us everything and we can help you "/>
      <BookComponent title="Download" description="Download the latest version of our app here, find your best experience in maintaining plants"/>
      </Row>
    </Container>

  );
}

export default App;
