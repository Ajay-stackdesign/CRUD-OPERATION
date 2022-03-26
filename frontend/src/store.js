import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import { companyCreateReducer, companyDetailsReducer, companysReducers, updateCompany } from "./reducers/companyReducers"






const reducer = combineReducers({
    companys: companysReducers,
    company: companyCreateReducer,
    update: updateCompany,
    detail: companyDetailsReducer,
    // companyupdate: companyUpdateReducer,
})

const initialStage = {}

const middleware = [thunk]


const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store