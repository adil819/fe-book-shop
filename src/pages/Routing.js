import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Footer from "./template/Footer"
import Navigation from "./template/Navigation"
import BookForm from "../components/book/BookForm"
import MemberForm from "../components/member/MemberForm"
import Members from "../components/member/Members"
import MemberList from "../components/member/MemberList"
import BookList from "../components/book/BookList"
import BookDetail from "../components/book/BookDetail"
import Books from "../components/book/Books"
import NotFound from "../components/404/NotFound"

const Routing = () => {
    return (
        
    <BrowserRouter>
      <Navigation />
        <section className="py-5 container mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/books/:id" exact component={BookDetail}/>
          <Route path="/books/edit/:id" exact component={BookForm}/>
          <Route path="/members" exact component={MemberList} />
          <Route path="/members/add" exact component={MemberForm} />
          <Route path="/members/edit/:id" exact component={MemberForm}/>
        </Switch>
        </section>
      <Footer />
    </BrowserRouter>            
     
    )
}

export default Routing
