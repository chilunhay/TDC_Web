import React, { Fragment, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './productReviews.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearErrors,
    getAllReviews,
    deleteReviews,
} from '../../actions/productAction';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Sidebar from './Sidebar';
import { DELETE_REVIEW_RESET } from '../../constants/productConstant';

const ProductReview = ({ history }) => {

    const dispatch = useDispatch();

    const alert = useAlert();

    const { error: deleteError, isDeleted  } = useSelector((state) => state.review);

    const { error, reviews } = useSelector((state) => state.productReviews);

    const deleteProductHandler = (id) => {
        //dispatch(deleteProduct(id));
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if(isDeleted) {
            alert.success("Review Deleted Successfully");
            history.push("/admin/reviews");
            dispatch({ type: DELETE_REVIEW_RESET });
        }
    }, [dispatch, alert, error, deleteError, history, isDeleted]);

    const columns = [
        { field: 'id', headerName: 'Review ID', minWidth: 200, flex: 0.3 },

        {
            field: 'name',
            headerName: 'Name',
            type: 'number',
            minWidth: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            minWidth: 200,
            flex: 0.3,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 0.3,
            minWidth: 150,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/admin/product/${params.getValue(params.id, 'id')}`}>
                            <EditIcon />
                        </Link>

                        <Button onClick={() => deleteProductHandler(params.getValue(params.id, 'id'))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];

    const rows = [];

    reviews &&
        reviews.forEach((item) => {
            rows.push({
                id: item._id,
                stock: item.Stock,
                price: item.price,
                name: item.name,
            });
        });

    return (
        <Fragment>
            <MetaData title={`ALL REVIEWS - Admin`} />

            <div className="dashboard">
                <Sidebar />
                <div className="productListContainer">
                    <h1 id="productListHeading">ALL REVIEWS</h1>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        className="productListTable"
                        autoHeight
                    />
                </div>
            </div>
        </Fragment>
    );
};


export default ProductReview;
