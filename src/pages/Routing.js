import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Footer from "./template/Footer"
import Navigation from "./template/Navigation"
import BookForm from "../components/book/BookForm"
import Members from "../components/member/Members"
import BookList from "../components/book/BookList"
import BookDetail from "../components/book/BookDetail"
import Books from "../components/book/Books"
import NotFound from "../components/404/NotFound"

const Routing = () => {
    return (
        
    <BrowserRouter>
      <Navigation />
      <Switch>
        <section className="py-5 container mt-5">
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" exact component={BookDetail}/>
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/members" exact component={Members} />
          {/* <Route path='/404' exact component={NotFound}/>
            <Redirect from="*" to="/404"/> */}
        </section>
      </Switch>
      <Footer />
    </BrowserRouter>            
     
    )
}

export default Routing
