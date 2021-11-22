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
import pcVN from 'pc-vn';
import { Country, State } from "country-state-city";

const Shipping = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const pcVN = require('pc-vn');
    const Provinces = pcVN.getProvinces();
    const Districts = pcVN.getDistricts();
    const Wards = pcVN.getWards();

    const [address, setAddress] = useState(shippingInfo.address);
    const [province, setProvince] = useState(shippingInfo.province);
    const [district, setDistrict] = useState(shippingInfo.district);
    const [ward, setWard] = useState(shippingInfo.ward);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    return (
        // <Fragment>
        //     <div className="shippingBox">
        //         <h2 className="shippingHeading">Shipping Details</h2>

        //         <form
        //             className="shippingForm"
        //             encType="multipart/form-data"
        //             // enSubmit={shippingSubmit}
        //         >
        //             <div>
        //                 <HomeIcon />
        //                 <input
        //                     type="text"
        //                     placeholder="Address"
        //                     required
        //                     value={address}
        //                     onChange={(e) => setAddress(e.target.value)}
        //                 />
        //             </div>

        //             {/* <div>
        //                 <LocationCityIcon />
        //                 <input
        //                     type="text"
        //                     placeholder="Province"
        //                     required
        //                     value={province}
        //                     onChange={(e) => setProvince(e.target.value)}
        //                 />
        //             </div> */}

        //             <div>
        //                 <PhoneIcon />
        //                 <input
        //                     type="number"
        //                     placeholder="Phone Number"
        //                     required
        //                     value={phoneNo}
        //                     onChange={(e) => setPhoneNo(e.target.value)}
        //                     size="10"
        //                 />
        //             </div>

        //             <div>
        //                 <LocationCityIcon />
        //                 <select
        //                     required
        //                     value={province}
        //                     onChange={(e) => setProvince(e.target.value)}
        //                 >
        //                     <option value="">Province</option>
        //                     {Provinces &&
        //                         Provinces.map((item) => (
        //                             <option key={item.isoCode} value={item.isoCode}>
        //                                 {item.name}
        //                             </option>
        //                         ))}
        //                 </select>
        //             </div>

        //             <div>
        //                 <TransferWithinAStationIcon />
        //                 <select
        //                     required
        //                     value={district}
        //                     onChange={(e) => setProvince(e.target.value)}
        //                 >
        //                     <option value="">Districts</option>
        //                     {Districts &&
        //                         Districts.map((item) => (
        //                             <option key={item.isoCode} value={item.isoCode}>
        //                                 {item.name}
        //                             </option>
        //                         ))}
        //                 </select>
        //             </div>

        //             <div>
        //                 <PinDropIcon />
        //                 <select
        //                     required
        //                     value={ward}
        //                     onChange={(e) => setProvince(e.target.value)}
        //                 >
        //                     <option value="">Ward</option>
        //                     {Wards &&
        //                         Wards.map((item) => (
        //                             <option key={item.isoCode} value={item.isoCode}>
        //                                 {item.name}
        //                             </option>
        //                         ))}
        //                 </select>
        //             </div>

        //         </form>
        //     </div>
        // </Fragment>

        <Fragment>
            <MetaData title="Shipping Details" />

            <CheckoutSteps activeStep={0} />

            <div className="shippingContainer">
                <div className="shippingBox">
                    <h2 className="shippingHeading">Shipping Details</h2>

                    <form
                        className="shippingForm"
                        encType="multipart/form-data"
                        // onSubmit={shippingSubmit}
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
                            <LocationCityIcon />
                            <input
                                type="text"
                                placeholder="City"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div>
                            <PinDropIcon />
                            <input
                                type="number"
                                placeholder="Pin Code"
                                required
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
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
                            <PublicIcon />

                            <select
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Country</option>
                                {Country &&
                                    Country.getAllCountries().map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {country && (
                            <div>
                                <TransferWithinAStationIcon />

                                <select
                                    required
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value="">State</option>
                                    {State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        )}

                        <input
                            type="submit"
                            value="Continue"
                            className="shippingBtn"
                            disabled={state ? false : true}
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping;
