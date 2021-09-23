import Home from "./pages/Home";
import Footer from "./pages/template/Footer"
import Navigation from "./pages/template/Navigation";
import Books from "./components/book/Books"
import Members from "./components/member/Members"


const App  = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Books />
      <Members />
      <Footer />
    </>
  );
}

export default App;
