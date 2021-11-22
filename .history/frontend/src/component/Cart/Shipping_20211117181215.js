import React, { Fragment, useState, Component } from 'react';
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

    const data = {
        provinces: [
            { id: 1, name: 'P1' },
            { id: 2, name: 'P2' },
            { id: 3, name: 'P3' },
            { id: 4, name: 'P4' },
        ],
        cities: [
            { id: 1, name: 'C1', provinceId: 1 },
            { id: 2, name: 'C2', provinceId: 1 },
            { id: 3, name: 'C3', provinceId: 1 },
            { id: 4, name: 'C4', provinceId: 2 },
            { id: 5, name: 'C5', provinceId: 2 },
            { id: 6, name: 'C6', provinceId: 3 },
            { id: 7, name: 'C7', provinceId: 4 },
        ]
    };


    const [menu, serMenu] = useState("");


    const [address, setAddress] = useState(shippingInfo.address);
    const [province, setProvince] = useState(shippingInfo.province);
    const [district, setDistrict] = useState(shippingInfo.district);
    const [ward, setWard] = useState(shippingInfo.ward);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    class Province extends React.Component {
        onSelect = (event) => {
            this.props.onSelect(parseInt(event.target.value));
        }
        render() {
            return (
                <div>
                    <span>Province: </span>
                    <select onChange={this.onSelect} >
                        <option>Select province</option>
                        {
                            this.props.data.map(prov => (
                                <option
                                    key={prov.id}
                                    value={prov.id}
                                    selected={this.props.selectedId === prov.id}>
                                    {prov.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            );
        }
    }

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

                    {/* <div>
                        <LocationCityIcon />
                        <select
                            id = "dropdown"
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



                    <div>
                        <TransferWithinAStationIcon />
                        <select
                            required
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option value="">Quận/ Huyện</option>
                            {Districts &&
                                pcVN.getDistrictsByProvinceCode("01").map((item) => (
                                    <option key={item.code} value={item.code}>
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
                    </div> */}

                    <select onChange={this.onSelect} >
                        <option>Select province</option>
                        {
                            this.props.data.map(prov => (
                                <option
                                    key={prov.id}
                                    value={prov.id}
                                    selected={this.props.selectedId === prov.id}>
                                    {prov.name}
                                </option>
                            ))
                        }
                    </select>


                </form>
            </div>
        </Fragment>
    );
};

export default Shipping;
