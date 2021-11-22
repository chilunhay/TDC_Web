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
import { getProvinces } from 'pc-vn';


const Shipping = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const pcVN = require('pc-vn');
    const Provinces = pcVN.getProvinces();
    const Districts = pcVN.getDistricts();
    // const Wards = pcVN.getWards();

    const data = {
        provinces: Provinces,
        cities: Districts,
    }
    

    class Province extends React.Component {
        onSelect = (event) => {
            this.props.onSelect(parseInt(event.target.value));
        }
        render() {
            return (
                <div>
                    <LocationCityIcon />

                    <select required
                        value={province}
                        onChange={this.onSelect}

                    >
                        <option>Chọn Tỉnh/ Thành phố</option>
                        {
                            this.props.data.map(prov => (
                                <option
                                    key={prov.code}
                                    value={prov.code}
                                >
                                    {prov.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            );
        }
    };



    class City extends React.Component {
        onSelect = (event) => {
            this.props.onSelect(parseInt(event.target.value));
        }
        render() {
            return (

                <div>
                    <TransferWithinAStationIcon />
                    <select
                        onClick={this.onSelect}
                        value={district}

                    >
                        <option>Chọn Quận/ Huyện</option>
                        {
                            this.props.data.map(city => (
                                <option
                                    key={city.code}
                                    value={city.code}
                                >
                                    {city.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            );
        }
    }

    class Address extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                provinces: data.provinces,
                province_code: province,
                cities: data.cities,
                cityId: district
            };
        }

        onSelectProvince = (provId) => {
            const selCities = data.cities.filter(c => c.province_code === provId);
            this.setState({
                province_code: provId,
                cities: selCities
            });
        }

        onSelectCity = (city) => {
            this.setState({
                cityId: city.id
            });
        }

        render() {
            return (
                <Fragment>
                    <Province
                        data={this.state.provinces}

                        onSelect={this.onSelectProvince}
                    />
                    <City
                        data={this.state.cities}

                        onSelect={this.onSelectCity}
                        onChange={(event) => { setDistrict(event.target.value) }}
                    />
                </Fragment>
            );
        }
    }



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


                        {province && (
                        <div>
                            <TransferWithinAStationIcon />
                            <select
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option value="">Quận/ Huyện</option>
                                {Districts &&
                                    pcVN.getDistrictsByProvinceCode(Pro).map((item) => (
                                        <option key={item.code} value={item.code}>
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
                        />


                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping;
