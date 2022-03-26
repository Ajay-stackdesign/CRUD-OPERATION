import {
    ALL_DETAILS_REQUEST,
    ALL_DETAILS_SUCCESS,
    ALL_DETAILS_FAIL,
    
    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAIL,
    UPDATE_COMPANY_RESET,

    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,
    DELETE_COMPANY_RESET,

    CLEAR_ERROS,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_FAIL,
} from "../contants/companyConstants"

export const companysReducers = (state = { companys: [] }, action) => {
    switch (action.type) {
        case ALL_DETAILS_REQUEST:
            return {
                loading: true,
                companys: [],
            }
        case ALL_DETAILS_SUCCESS:
            return {
                loading: false,
                companys: action.payload.companys
            }
        case ALL_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

// export const companyReducer = (state = { company: {} }, action) => {
//     switch (action.type) {
//         case NEW_DETAILS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case NEW_DETAILS_SUCCESS:
//             return {
//                 loading: false,
//                 success: action.payload.success,
//                 company: action.payload.company,
//             }
//         case NEW_DETAILS_FAIL:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             }
//         case NEW_DETAILS_RESET:
//             return {
//                 ...state,
//                 success: false
//             }
//         default:
//             return state
//     }
// }
export const companyCreateReducer = (state = { company: {} }, action) => {
    switch (action.type) {
        case 'COMPANY_CREATE_REQUEST':
            return { loading: true }
        case 'COMPANY_CREATE_SUCCESS':
            return { loading: false, success: true, product: action.payload }
        case 'COMPANY_CREATE_FAIL':
            return { loading: false, error: action.payload }
        case 'COMPANY_CREATE_RESET':
            return {}
        default:
            return state
    }
}

export const companyDetailsReducer = (state = { company: {} }, action) => {
    switch (action.type) {
        case COMPANY_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case COMPANY_DETAILS_SUCCESS:
            return {
                loading: false,
                company: action.payload,
            }
        case COMPANY_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERROS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const updateCompany = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_COMPANY_REQUEST:
        case DELETE_COMPANY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_COMPANY_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
                company: action.payload
            }
        case UPDATE_COMPANY_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case DELETE_COMPANY_FAIL:
        case UPDATE_COMPANY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_COMPANY_RESET:
            return {
                ...state,
                isDeleted: false,
            }
        case UPDATE_COMPANY_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERROS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}