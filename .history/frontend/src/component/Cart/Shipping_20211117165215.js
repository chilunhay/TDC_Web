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

const Shipping = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const pcVN = require('pc-vn');
    const Provinces = pcVN.getProvinces();
    const Districts = pcVN.getDistricts();
    const Wards = pcVN.getWards();

    const handleSelectProvince = (id) => {
        setChooseProvince({ id });
        
    };

    const handleSelectDistrict = (id) => {
        setChooseDistrict({id});
      };

    
    const [chooseProvince, setChooseProvince] = useState("");
    const [chooseDistrict, setChooseDistrict] = useState("");


    const [address, setAddress] = useState(shippingInfo.address);
    const [province, setProvince] = useState(shippingInfo.province);
    const [district, setDistrict] = useState(shippingInfo.district);
    const [ward, setWard] = useState(shippingInfo.ward);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    return (
        <Fragment>
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

                    {/* <div>
                        <LocationCityIcon />
                        <input
                            type="text"
                            placeholder="Province"
                            required
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                        />
                    </div> */}

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
                        <LocationCityIcon />
                        <select
                            required
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            onClick={chooseProvince.province_code}
                        >
                            <option value="">Tỉnh</option>
                            {Provinces &&
                                Provinces.map((item) => (
                                    <option key={item.province_code} value={item.province_code} 
                                    onClick={() =>
                                        handleSelectProvince(
                                        item.name,
                                        item.province_code
                                        )}
                                >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>


                   
                        <div>
                            <TransferWithinAStationIcon />
                            <select
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                onClick={chooseDistrict.district_code}
                                
                            >
                                <option value="">Quận/ Huyện</option>
                                {Districts &&
                                        pcVN.getDistrictsByProvinceCode(`${chooseProvince.province_code}`).map((item) => (
                                        <option key={item.district_code} value={item.district_code} 
                                        onClick={() =>
                                            handleSelectDistrict(item.district_code)
                                }
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    

                    <div>
                        <PinDropIcon />
                        <select
                            required
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                        >
                            <option value="">Phường/ Xã</option>
                            {Wards &&
                                Wards.map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                </form>
            </div>
        </Fragment>
    );
};

export default Shipping;