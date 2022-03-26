import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { clearErrors, getAllCompany, deleteData } from '../actions/companyActions'
import { DELETE_COMPANY_RESET } from '../contants/companyConstants'

const Details = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const history = useHistory()
    const { error, companys } = useSelector(state => state.companys)
    const { error: deleteError, isDeleted } = useSelector(state => state.update)

    const deleteUserHandler = (id) => {
        dispatch(deleteData(id))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (deleteError) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isDeleted) {
            alert.success("Company delete successfully")
            history.push("/getall")
            dispatch({ type: DELETE_COMPANY_RESET })
        }
        dispatch(getAllCompany())
    }, [error, dispatch, alert, isDeleted, deleteError, history])

    const cols = [
        { field: 'id', headerName: 'id', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 250 },
        { field: 'contact', headerName: 'number', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'profile', headerName: 'Logo', width: 150 },
        { field: 'country', headerName: ' Country', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        // { field: 'actions', headerName: 'Action', width: 150 },
        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/update/${params.getValue(params.id, "id")}`}>
                            Edit
                        </Link>

                        <Button
                            onClick={() =>
                                deleteUserHandler(params.getValue(params.id, "id"))
                            }
                        >
                            Delete
                        </Button>
                    </Fragment>
                );
            },
        },
    ];


    const rows = [
        // { id: 1, companyId: 'Hello', companyName: 'World', companyDesc: "best company too work for", contact: "7894567585", email: "ajayhagag@gmail.com", profile: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg", country: "india", state: "mumbai" },
        // { id: 2, companyId: 'DataGridPro', companyName: 'is Awesome', companyDesc: "best company too work for", contact: "7894567585", email: "ajayhagag@gmail.com", profile: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg", country: "india", state: "mumbai" },
        // { id: 3, companyId: 'MUI', companyName: 'is Amazing', companyDesc: "best company too work for", contact: "7894567585", email: "ajayhagag@gmail.com", profile: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg", country: "india", state: "mumbai" },
    ];

    companys &&
        companys.forEach(item => {
            rows.push({
                id: item._id,
                name: item.name,
                description: item.description,
                contact: item.contact,
                email: item.email,
                country: item.country,
                state: item.state
            })
        });
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={cols} pageSize={5} disableSelectionOnClick autoHeight />
        </div>
    )
}

export default Details