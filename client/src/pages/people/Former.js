import React from 'react';

import ImgBox from '../../shared/components/UIELements/ImgBox';

import BannerImg from './images/JWebPeople.jpg';

import './Former.css';

const Former = () => {
    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="People"/>
            <div className="former-container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Degree/Year</th>
                        <th>Thesis Title</th>
                        <th>Current Employer</th>
                    </tr>
                    <tr>
                        <td>Rajesh Sundrani [India]</td>
                        <td>M.Sc.(91-93)</td>
                        <td>Gasification and TiO2Autocausticizing of Black Liquor  or Bleach Plant Effluent</td>
                        <td>Independent Businessman - Major supplier for Pulp and Paper industry in India</td>
                    </tr>
                    <tr>
                        <td>Pajongwit Pongsivapai [Thailand]</td>
                        <td>M.Sc.(92-93)</td>
                        <td>Residence Time Distribution of Solids in a Multi-Compartment Fluidized Bed</td>
                        <td>Star Petroleum Co. - Thailand</td>
                    </tr>
                    <tr>
                        <td>Laure Honorez [France]</td>
                        <td>M.Sc.(92-94)</td>
                        <td>Fluid Dynamic Characteristics of a Magnetically stabilized Liquid-Solid Fluidized Bed</td>
                        <td>Pechiney SA - France</td>
                    </tr>
                    <tr>
                        <td>Woo-Kul Lee [Korea]</td>
                        <td>M.Sc.(91-94)</td>
                        <td>The Effect of Interparticle Forces on Fluidization Regimes; A Study of Magnetized Fluidized Beds</td>
                        <td>Dankook University - Korea</td>
                    </tr>
                    <tr>
                        <td>Niels Thulstrup [Denmark]</td>
                        <td>M.Sc.(93-95)</td>
                        <td>Fluidized Bed Granulator for an	Autocausticization Recovery Process of Sodium in Black Liquor Experiment and Theory </td>
                        <td>FLS Miljo A/S - Denmark</td>
                    </tr>
                    <tr>
                        <td>Mohammed Al-Mulhim [Saudi Arabia]</td>
                        <td>M.Sc.(92-95)</td>
                        <td>Enhancement of Mass Transfer Coefficient in Magnetically Stabilized Liquid-Solid Fluidized Bed </td>
                        <td>ARAMCO - Saudi Arabia</td>
                    </tr>
                    <tr>
                        <td>Mohammed Al-Mulhim [Saudi Arabia]</td>
                        <td>M.Sc.(92-95)</td>
                        <td>Enhancement of Mass Transfer Coefficient in Magnetically Stabilized Liquid-Solid Fluidized Bed </td>
                        <td>ARAMCO - Saudi Arabia</td>
                    </tr>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Former;