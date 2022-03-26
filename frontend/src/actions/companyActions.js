import {
    ALL_DETAILS_REQUEST,
    ALL_DETAILS_SUCCESS,
    ALL_DETAILS_FAIL,

    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAIL,

    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,

    CLEAR_ERROS,
    COMPANY_DETAILS_FAIL,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_REQUEST

} from "../contants/companyConstants"

import axios from "axios"

export const getAllCompany = (keyword = "") => async (dispatch) => {
    try {
        dispatch({ type: ALL_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/getall?keyword=${keyword}`)
        console.log(data)

        dispatch({
            type: ALL_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const createCompany = (product) => async (dispatch) => {
    try {
        dispatch({ type: 'COMPANY_CREATE_REQUEST' })

        const { data } = await axios.post('/api/v1/company', product)
        setTimeout(() => {
            dispatch({
                type: 'COMPANY_CREATE_SUCCESS',
                payload: data
            })
            // history.push("/");
        }, 1000);
    } catch (error) {
        dispatch({
            type: 'COMPANY_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const deleteData = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_COMPANY_REQUEST })

        const { data } = await axios.delete(`/api/v1/delete/${id}`)
        console.log(data)
        dispatch({
            type: DELETE_COMPANY_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: DELETE_COMPANY_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getCompanyDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: COMPANY_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/company/${id}`)

        dispatch({
            type: COMPANY_DETAILS_SUCCESS,
            payload: data.company,
        })
    } catch (error) {
        dispatch({
            type: COMPANY_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const updateData = (id, companyData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_COMPANY_REQUEST })

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(`/api/v1/update/${id}`,
            companyData,
            config
        )

        dispatch({
            type: UPDATE_COMPANY_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_COMPANY_FAIL,
            payload: error.response.data.message,
        })
    }
}

// export const updateData = (company, id, history) => async (dispatch) => {
//     try {
//         dispatch({ type: 'COMPANY_UPDATE_REQUEST' })

//         const config = {
//             headers: {
//                 "Content-type": "application/json"
//             }
//         }

//         const { data } = await axios.put(`/update/${id}`, company, config)
//         setTimeout(() => {
//             dispatch({
//                 type: 'COMPANY_UPDATE_SUCCESS',
//                 payload: data
//             });
//             history.push("/");
//         }, 1000);
//     } catch (error) {
//         dispatch({
//             type: 'COMPANY_UPDATE_FAIL',
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         })
//     }
// }

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROS })
}
