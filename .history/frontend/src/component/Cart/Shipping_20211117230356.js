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

    const data = {
        provinces: [
            {
                id: 1,
                name: 'Thành phố Hà Nội',

            },
            {
                id: 2,
                name: 'Tỉnh Hà Giang',

            },
            {
                id: 3,
                name: 'Tỉnh Cao Bằng',

            },
        ],
        cities: [
            {
                id: 1,
                name: 'Quận Ba Đình',
                provinceId: 1,
            },
            {
                id: 2,
                name: 'Quận Hoàn Kiếm',

                provinceId: 1,

            },
            {
                id: 3,
                name: 'Quận Tây Hồ',
                provinceId: 2,

            },
            {
                id: 4,
                name: 'Quận Tây Hồ',
                provinceId: 3,

            },
        ],
    };

    // class Province extends React.Component {
    //     onSelect = (event) => {
    //         this.props.onSelect(parseInt(event.target.value));
    //     }
    //     render() {
    //         return (
    //             <div>
    //                 <span>Province: </span>
    //                 <select onChange={this.onSelect} >
    //                     <option>Select province</option>
    //                     {
    //                         this.props.data.map(prov => (
    //                             <option
    //                                 key={prov.id}
    //                                 value={prov.id}
    //                                 selected={this.props.selectedId === prov.id}>
    //                                 {prov.name}
    //                             </option>
    //                         ))
    //                     }
    //                 </select>
    //             </div>
    //         );
    //     }
    // };



    // class City extends React.Component {
    //     onSelect = (event) => {
    //         this.props.onSelect(parseInt(event.target.value));
    //     }
    //     render() {
    //         return (
    //             <div>
    //                 <span>City: </span>
    //                 <select onClick={this.onSelect}>
    //                     <option>Select city</option>
    //                     {
    //                         this.props.data.map(city => (
    //                             <option
    //                                 key={city.id}
    //                                 value={city.id}
    //                                 selected={this.props.selectedId === city.id}>
    //                                 {city.name}
    //                             </option>
    //                         ))
    //                     }
    //                 </select>
    //             </div>
    //         );
    //     }
    // }

    // class Address extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             provinces: data.provinces,
    //             provinceId: null,
    //             cities: data.cities,
    //             cityId: null
    //         };
    //     }

    //     onSelectProvince = (provId) => {
    //         const selCities = data.cities.filter(c => c.provinceId === provId);
    //         this.setState({
    //             provinceId: provId,
    //             cities: selCities
    //         });
    //     }

    //     onSelectCity = (city) => {
    //         this.setState({
    //             cityId: city.id
    //         });
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <Province
    //                     data={this.state.provinces}
    //                     selectedId={this.state.provinceId}
    //                     onSelect={this.onSelectProvince} />
    //                 <City
    //                     data={this.state.cities}
    //                     selectedId={this.state.cityId}
    //                     onSelect={this.onSelectCity} />
    //             </div>
    //         );
    //     }
    // }



    const [address, setAddress] = useState(shippingInfo.address);
    const [province, setProvince] = useState(shippingInfo.province);
    const [district, setDistrict] = useState(shippingInfo.district);
    const [ward, setWard] = useState(shippingInfo.ward);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const onSelect = (event) => {
        this.props.onSelect(parseInt(event.target.value));
    }

    const [provinceId, setProvinceId] = useState(null);
    const [cityId, setcityId] = useState(null);


    class Province extends React.Component {
        onSelect = (event) => {
          this.props.onSelect(parseInt(event.target.value));
        }
        render() {
          return (
            
          );
        }
      }

    class Address extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            provinces: data.provinces,
            provinceId: null,
            cities: data.cities,
            cityId: null
          };
        }
      
        onSelectProvince = (provId) => {
          const selCities = data.cities.filter(c => c.provinceId === provId);
          this.setState({
            provinceId: provId,
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
            <div>
              <Province
                data={this.state.provinces}
                selectedId={this.state.provinceId}
                onSelect={this.onSelectProvince} />
              <City
                data={this.state.cities}
                selectedId={this.state.cityId}
                onSelect={this.onSelectCity} />
            </div>
          );
        }
      }

    return (
        <Fragment>
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
                            id = "dropdown"
                            required
                            value={province}
                            // onChange={(e) => setProvince(e.target.value)}
                            onChange={onSelect}
                            selectedId={provinceId}
                            onSelect={pcVN.getDistrictsByProvinceCode()}

                        >
                            <option value="">Tỉnh</option>
                            {Provinces &&
                                this.props.data.map((item) => (
                                    <option key={item.code} value={item.code} selected={this.props.selectedId === item.code}> 
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
                            // onChange={(e) => setDistrict(e.target.value)}
                            onClick={onSelect}
                            selectedId={cityId}
                            onSelect={pcVN.getDistricts()}
                        >
                            <option value="">Quận/ Huyện</option>
                            {Districts &&
                                this.props.data.map((item) => (
                                    <option key={item.code} value={item.code} selected={this.props.selectedId === item.code}>
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

                        {/* <div>

                            <Address />
                        </div> */}


                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping;
