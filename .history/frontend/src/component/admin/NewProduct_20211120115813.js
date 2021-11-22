import React, { Fragment, useEffect, useState } from 'react';
import './newProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, createProduct } from '../../actions/productAction';
import { useAlert } from 'react-alert';
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import StorageIcon from '@material-ui/icons/Storage';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Sidebar from './Sidebar';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';


const NewProduct = () => {

    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];

    return (
        <Fragment>
            <MetaData title="Create Product" />
            <div className="dashboard">
                <Sidebar />

                <div>
                    <SpellcheckIcon />
                    <input
                        type="'text'"
                        placeholder='Product Name'             
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <AttachMoneyIcon />
                    <input
                        type='number'
                        placeholder='Price'             
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div>
                    <DescriptionIcon />
                    <textarea
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        cols='30'
                        rows='1'
                    ></textarea>
                </div>

                <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose Category</option>
                        {categories.map((cate) => (
                            <option key={cate} value={cate}>
                                {cate}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="createProductFormFile">
                    <input 
                        type="file"
                        name="avatar"
                        accept="image/*"
                    />
                </div>

                <div id="createProductFormImage">
                    {imagesPreview.map((image, index) => (
                        <img key={index} src={image} alt="Avatar Preview" />
                    ))}
                </div>

                <Button
                    id=""
                >

                </Button>
            </div>
        </Fragment>
    )
}

export default NewProduct;
