import { Container, Row } from "react-bootstrap";
import BookList from "./components/book/BookList";
import CounterComponent from "./components/counter/CounterComponent"

const App  = () => {

  // const fruits = ['Manggo', 'Apple', 'Orange', 'Banana'];
  // fruits.forEach(fruit => console.log(fruit));
  // fruits.map(fruit => console.log(fruit));

  
  return (

    <Container>
      <Row>     
        <CounterComponent/>
        {/* <BookList/> */}
      </Row>
    </Container>

  );
}

export default App;
