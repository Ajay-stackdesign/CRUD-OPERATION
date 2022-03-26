
import React, { Fragment, useEffect, useState } from 'react';
// import "./NewList.css"
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
// import { Button } from '@material-ui/core';
import Metadata from '../component/home/Metadata';
import { createCompany, clearErrors } from '../actions/companyActions';
import { NEW_DETAILS_RESET, } from '../contants/companyConstants';
// import { Country, State } from 'country-state-city';
// import { Button } from '@mui/material';
import Loader from './component/Loader';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import FormContainer from './component/FormContainer';
import "./NewList.scss"


const NewList = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const history = useHistory()
  const { loading, error, success } = useSelector(state => state.company)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")



  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success("New Data created")
      history.push("/all")
      dispatch({ type: NEW_DETAILS_RESET })
    }
  }, [alert, dispatch, error, history, success])

  // const createProductSubmitHandler = (e) => {
  //     e.preventDefault()
  //     if (contact.length < 10 || contact.length > 10) {
  //         alert.error("Phone number should be 10 Digits Long")
  //         return
  //     }
  //     const myForm = new FormData();

  //     myForm.set("name", name);
  //     myForm.set("description", description);
  //     myForm.set("contact", contact);
  //     myForm.set("email", email);
  //     myForm.set("country", country);
  //     myForm.set("state", state)
  //     console.log(myForm)


  //     dispatch(createCompany(myForm));
  // }
  const submitHandler = (e) => {
    if (contact.length < 10 || contact.length > 10) {
      alert.error("Phone number should be 10 Digits Long")
      return
    }
    e.preventDefault()
    dispatch(createCompany({ name, description, contact, email, country, state }))
  }



  return (
    <Fragment>
      {loading ? (<Loader />) : (
        <Fragment>
          <Metadata title="Create List" />
          <FormContainer className="container">
            <h1 className='create__list'><center>Create</center></h1>

            <Form onSubmit={submitHandler} className="form">
              <Form.Group controlId='name'>
                <Form.Label className='form__name'><center>Name</center></Form.Label>
                <Form.Control
                  type='name'
                  className="form__input"
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='description'>
                <Form.Label><center>Description</center></Form.Label>
                <Form.Control
                  type='text'
                  className="form__input"
                  placeholder='Enter description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='contact'>
                <Form.Label><center>contact</center></Form.Label>
                <Form.Control
                  className="form__input"
                  type='number'
                  placeholder='Enter Contact'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='email'>
                <Form.Label><center>Email</center></Form.Label>
                <Form.Control
                  // BEM CONVENCTION CSS
                  className="form__input"
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='country'>
                <Form.Label><center>City</center></Form.Label>
                <Form.Control
                  type='text'
                  className="form__input"
                  placeholder='Enter City'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>

              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label><center>State</center></Form.Label>
                <Form.Control
                  type='text'
                  className="form__input"
                  placeholder='Enter State'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button className='btn1' type='submit' variant='primary'>
                Create
              </Button>
            </Form>

          </FormContainer>
        </Fragment>
      )}
    </Fragment>
  )
};

export default NewList




