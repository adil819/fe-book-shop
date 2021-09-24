import React, {useState} from 'react'
// import { Container, Row, Button } from 'react-bootstrap'
import BookList from './BookList'
import BookForm from './BookForm'
import BookDetail from './BookDetail'
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { Link } from 'react-router-dom'

export const Books = ({ match}) => {

    const { path } = match

    return (
        <Switch>
            <Route exact path={path} component={BookList} />
            <Route exact path={`${path}/add`} component={BookForm} />
            <Route exact path={`${path}/:id}}`} component={BookDetail} />
        </Switch>
    )
}

export default Books;