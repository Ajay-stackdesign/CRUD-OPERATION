import React, { Fragment } from 'react';
import "./companyCard.css"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const ProductCard = ({ company }) => {

    return (
        <Fragment>
            <div className='companyCard'>
                <button className="btn"><Link className='link' to="/all">Back</Link></button>
                <ul className='company'>
                    <center><p>Id --- {`${company._id}`}</p></center>
                    <p><center>COMPANY NAME --- {company.name}</center></p>
                    <p><center>COMPANY DESCRIPTION --- {company.description}</center></p>
                    <p><center>COMPANY CONTACT --- {company.contact}</center></p>
                    <p><center>COMPANY EMAIL --- {company.email}</center></p>
                    <p><center>COMPANY COUNTRY --- {company.country}</center></p>
                    <p><center>COMPANY STATE --- {company.state}</center></p>
                </ul>

            </div>
        </Fragment>

    );
};

export default ProductCard;