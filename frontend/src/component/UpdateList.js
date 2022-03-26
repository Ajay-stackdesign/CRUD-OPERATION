
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import "./updateList.scss"
import Metadata from '../component/home/Metadata';
import { clearErrors, getCompanyDetails, updateData } from '../actions/companyActions';
import Loader from './component/Loader';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import FormContainer from './component/FormContainer';
import { UPDATE_COMPANY_RESET } from '../contants/companyConstants';


const UpdateList = ({ match }) => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const history = useHistory()

    const { loading, error, company } = useSelector(state => state.detail)

    const { error: updateError, isUpdated } = useSelector(state => state.update)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")

    const companyId = match.params.id

    useEffect(() => {
        if (company && company._id !== companyId) {
            dispatch(getCompanyDetails(companyId))
        } else {
            setName(company.name)
            setDescription(company.description)
            setContact(company.contact)
            setEmail(company.email)
            setCountry(company.country)
            setState(company.state)
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success("Company detail changes");
            history.push("/all");
            dispatch({ type: UPDATE_COMPANY_RESET });
        }
    }, [alert, company, companyId, dispatch, error, history, isUpdated])

    const submitHandler = (e) => {
        if (contact.length < 10 || contact.length > 10) {
            alert.error("Phone number should be 10 Digits Long")
            return
        }
        e.preventDefault()
        const myForm = new FormData();

        myForm.set("name", name)
        myForm.set("description", description)
        myForm.set("contact", contact)
        myForm.set("email", email)
        myForm.set("country", country)
        myForm.set("state", state)

        dispatch(updateData(companyId, myForm))
    }
    console.log(submitHandler)



    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <Metadata title="Update" />
                    <FormContainer>
                        <h1><center>UPDATE</center></h1>

                        <Form onSubmit={submitHandler} className="form">
                            <Form.Group controlId='name'>
                                <Form.Label><center>Name</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId='description'>
                                <Form.Label><center>Description</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId='contact'>
                                <Form.Label><center>Contact</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='number'
                                    placeholder='Enter contact Number'
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId='email'>
                                <Form.Label><center>Email</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='country'>
                                <Form.Label><center>City</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='text'
                                    placeholder='Enter city'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                ></Form.Control>

                            </Form.Group>
                            <Form.Group controlId='state'>
                                <Form.Label><center>State</center></Form.Label>
                                <Form.Control
                                    className="form__input"
                                    type='text'
                                    placeholder='Enter state'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button className='bt2' type='submit' variant='primary'>
                                UPDATE
                            </Button>
                        </Form>

                    </FormContainer>
                </Fragment>
            )}
        </Fragment>
    )
};

export default UpdateList






