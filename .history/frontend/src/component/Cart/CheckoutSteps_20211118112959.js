import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {

    const step = [
        {
            label: <Typography>Shipping Details</Typography>,
            icon: <LocalShippingIcon />
        }
    ];

    return (
        <div>
            
        </div>
    )
}

export default CheckoutSteps;
