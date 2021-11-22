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

    const { error: deleteError, isDeleted } = useSelector((state) => state.review);

    const { error, reviews } = useSelector((state) => state.productReviews);

    const deleteProductHandler = (id) => {
        //dispatch(deleteProduct(id));
    };

    productReviewsSubmitHandler

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success("Review Deleted Successfully");
            history.push("/admin/reviews");
            dispatch({ type: DELETE_REVIEW_RESET });
        }
    }, [dispatch, alert, error, deleteError, history, isDeleted]);

    const columns = [
        { field: 'id', headerName: 'Review ID', minWidth: 200, flex: 0.5 },

        {
            field: 'name',
            headerName: 'Name',
            minWidth: 150,
        },
        {
            field: 'comment',
            headerName: 'Comment',
            minWidth: 350,
            flex: 1,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            minWidth: 270,
            flex: 0.5,
            cellClassName: (params) => {
                return params.getValue(params.id, "rating") >= 3
                    ? "greenColor"
                    : "redColor";
            },
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
                rating: item.rating,
                comment: item.comment,
                name: item.user,
            });
        });

    return (
        <Fragment>
            <MetaData title={`ALL REVIEWS - Admin`} />

            <div className="dashboard">
                <Sidebar />
                <div className="productListContainer">

                    <form
                        className="createProductForm"
                        onSubmit={productReviewsSubmitHandler}
                    >
                        <h1>ALL REVIEWS</h1>

                        <div>
                            <PersonIcon />
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <MailOutlineIcon />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <VerifiedUserIcon />
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Choose Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={
                                updateLoading ? true : false || role === "" ? true : false
                            }
                        >
                            Update
                        </Button>
                    </form>

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
