import React, { Fragment, useEffect } from 'react'
import { useAlert } from "react-alert"
import { useSelector, useDispatch } from "react-redux"
import { getAllCompany, clearErrors } from "../actions/companyActions"
import Metadata from './home/Metadata'
import CompanyCard from "./component/CompanyCard.js"
import Loader from "./component/Loader.js"
import "./Detail.scss"


const Detail = ({ match }) => {

    const alert = useAlert()
    const dispatch = useDispatch()

    const { error, loading, companys } = useSelector(state => state.companys)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getAllCompany(keyword))
    }, [alert, dispatch, error, keyword])
    return (
        <div className="detail">
            <Fragment>
                {loading ? (<Loader />) : (
                    <Fragment>
                        <Metadata title="Company" />
                        <h2 className="companysHeading">Comapny</h2>
                        <div className='companys'>
                            {companys &&
                                companys.map((company) => (
                                    <CompanyCard key={company._id} company={company} />
                                ))}
                        </div>
                    </Fragment>
                )}
            </Fragment>
        </div>
    )
}

export default Detail
