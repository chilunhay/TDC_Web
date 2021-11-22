import React, { Fragment, useState } from 'react';
import './Shipping.css';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartAction';
import MetaData from '../layout/MetaData';
import PinDropIcon from '@material-ui/icons/PinDrop';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
// import PublicIcon from '@material-ui/icons/Public';
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { useAlert } from "react-alert";
import CheckoutSteps from '../Cart/CheckoutSteps'


const Shipping = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const pcVN = require('pc-vn');
    const Provinces = pcVN.getProvinces();
    // const Districts = pcVN.getDistricts();
    // const Wards = pcVN.getWards();

    // const data = {
    //     provinces: Provinces,
    //     cities: Districts,
    // }
    


    const [address, setAddress] = useState(shippingInfo.address);
    const [province, setProvince] = useState(shippingInfo.province);
    const [district, setDistrict] = useState(shippingInfo.district);
    const [ward, setWard] = useState(shippingInfo.ward);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);



    return (
        <Fragment>
            <MetaData title="Shipping Info" />
            <div className="shippingContainer">
                <div className="shippingBox">
                    <h2 className="shippingHeading">Shipping Details</h2>

                    <form
                        className="shippingForm"
                        encType="multipart/form-data"
                    // enSubmit={shippingSubmit}
                    >
                        <div>
                            <HomeIcon />
                            <input
                                type="text"
                                placeholder="Address"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <PhoneIcon />
                            <input
                                type="number"
                                placeholder="Phone Number"
                                required
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                size="10"
                            />
                        </div>


                        <div>
                            <PinDropIcon />
                            <input
                                type="text"
                                placeholder="Phường / Xã"
                                required
                                value={ward}
                                onChange={(e) => setWard(e.target.value)}
                            />
                        </div>
                        {/* <Fragment>
                            <Address />
                        </Fragment> */}

                        <div>
                            <PinDropIcon />
                            <input
                                type="text"
                                placeholder="Quận/ Huyện"
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                        </div>

                        <div>
                            <LocationCityIcon />
                            <select
                                id="dropdown"
                                required
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}

                            >
                                <option value="">Tỉnh</option>
                                {Provinces &&
                                    Provinces.map((item) => (
                                        <option key={item.code} value={item.code}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>


                        {/* {province && (
                        <div>
                            <TransferWithinAStationIcon />
                            <select
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option value="">Quận/ Huyện</option>
                                {Districts &&
                                    pcVN.getDistrictsByProvinceCode(`${province.code}`).map((item) => (
                                        <option key={item.code} value={item.code}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        )} */}

                        


                        <input
                            type="submit"
                            value="Continue"
                            className="shippingBtn"
                        />


                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping;
