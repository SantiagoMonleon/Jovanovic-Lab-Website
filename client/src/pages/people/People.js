import React from 'react';

import ImgBox from '../../shared/components/UIELements/ImgBox';
import Card from '../../shared/components/UIELements/Card';
import PeopleImg from './components/PeopleImg';
import PeopleDesc from'./components/PeopleDesc';
import MorePeople from './components/MorePeople';

import GoranImg from './images/Jovanovic-img.jpg';
import JadImg from './images/Jad-img.jpg';
import BannerImg from './images/JWebPeople.jpg';
import MatthewImg from './images/Matthew_Coblyn.jpg'

import './People.css';

const People = () => {
    const cardStyle = {
        marginTop: "30px",
        marginBottom: "20px",
        paddingBottom: "10px"
    }

    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="People"/>
            <div className="people-holder">
                <MorePeople />
                <Card style={cardStyle}>
                    <PeopleImg src={GoranImg}/>
                    <PeopleDesc 
                        name="Goran Jovanovic - Professor of Chemical and Biological Engineering"
                        desc="
                        <strong>Education</strong>
                        <p>Dr. Jovanovic received a B.Sc. degree in chemical engineering
                        from Belgrade University (Belgrade, Serbia). He was awarded
                        the Fulbright Grant for graduate study in the US, where he
                        received M.Sc. and a Ph.D. degree in chemical engineering.
                        Dr. Jovanovic taught chemical engineering at Belgrade
                        University from 1980 to 1991. In 1991 he moved back to the
                        US at Oregon State University (OSU), where he is Professor of
                        Chemical and Biological Engineering at School of Chemical,
                        Biological, and Environmental Engineering (CBEE). Dr.
                        Jovanovic is the founding member of OSU’s ATAMI institute. </p>
                        <strong>Research Interest</strong>"
                        descExt="
                        <strong>Education</strong>
                        <p>Dr. Jovanovic received a B.Sc. degree in chemical engineering
                        from Belgrade University (Belgrade, Serbia). He was awarded
                        the Fulbright Grant for graduate study in the US, where he
                        received M.Sc. and a Ph.D. degree in chemical engineering.
                        Dr. Jovanovic taught chemical engineering at Belgrade
                        University from 1980 to 1991. In 1991 he moved back to the
                        US at Oregon State University (OSU), where he is Professor of
                        Chemical and Biological Engineering at School of Chemical,
                        Biological, and Environmental Engineering (CBEE). Dr.
                        Jovanovic is the founding member of OSU’s ATAMI institute. </p>
                        <strong>Research Interest</strong>
                        <p>Dr. Jovanovic's research interest is focused on the development of microscale-based technologies
                        in several engineering areas. Currently, Dr. Jovanovic is developing a new class of high volume
                        microscale-based reactors and microfluidic devices for production of biofuels (biodiesel synthesis,
                        biofuel upgrading), biological conversion of methane into high-value chemical compounds, CO2
                        conversion into high-value carbon-based compounds, dry reforming of methane in corona
                        microscale-based reactor, desulphurization of fossil fuels, water desalination, separation processes,
                        and biomedical devices (kidney dialyzer, haemo-oxygenator, semi-artificial veins, and arteries).
                        Graduate students in his laboratories at OSU and ATAMI, are developing microscale biosensors,
                        microscale-based chemical reaction processes, and microscale-based separation operations
                        suitable for the development of high volume production in industrial chemical processes.</p>
                        <strong>Scholarly Contribution</strong>
                        <p>Under Dr. Jovanovic's mentorship, 51 graduate students obtained advanced degrees in chemical
                        engineering, out of which 29 PhDs. His former graduate students are researchers in private
                        industry, national laboratories, consultants, and university professors throughout the World.
                        Currently, Dr. Jovanovic advises seven Ph.D. students.
                        He has published 149 refereed papers out of which 14 monograph contributions, presented 96
                        invited lectures, seminars, workshops, and over 130 presentations at scientific conferences. He has
                        completed 88 research projects funded by DOE, ARPAe, DARPA, NASA, NIH, NSF, ONAMI, OBEST, and private industry. Dr. Jovanovic has five US and International patents under his name
                        and 27 OSU invention disclosures.</p>
                        <strong>Economic Opportunities</strong>
                        <p>Dr. Jovanovic is currently involved in expanding economic opportunities in the State of Oregon by
                        enabling the development of several emerging companies in the Northwest US. Two start-up
                        companies use intellectual property developed by Dr. Jovanovic. Currently, Dr. Jovanovic is the
                        CTO & Founder of Process Transformation Technologies LLC. Dr. Jovanovic is a consultant with
                        several companies in Europe and the USA.</p>
                        <strong>Awards and Recognitions</strong>
                        <p>In addition to being a Fulbright Scholar, Dr. Goran Jovanovic is the recipient of numerous honors
                        and professional and scholastic awards. Some of the awards include Austin Paul Engineering
                        Faculty Award (OSU 1997); Outstanding Faculty Advisor Award (WERC Consortium & Los Alamos
                        National Laboratory 1999), Elizabeth Ritchie OSU Distinguished Professor Award (OSU 2001);
                        Collaborative Research Award, (OSU 2003); OSU College of Engineering Research Award (OSU
                        2005); OSU Alumni Award (OSU 2006); Life-Long Achievement Award, (WERC - NM State
                        University 2008); Alumni Distinguished Professor Award (OSU 2012); Royal-Thai Insignia of Honor
                        for the contribution to academic advances at King Mongkut University in Bangkok Thailand (2014),
                        Engineering Innovator Award (OSU-COE 2020) goran.jovanovic@oregonstate.edu</p>"

                    />
                </Card>
                <Card style={cardStyle}>
                    <PeopleImg src={MatthewImg}/>
                    <PeopleDesc 
                        name="Mathew Coblyn - Research Associate"
                        desc="Enter Bio Here."
                        descExt = {null}
                    />
                </Card>
                <Card style={cardStyle}>
                    <PeopleImg src={JadImg}/>
                    <PeopleDesc 
                        name="Jad G. Touma - Ph.D Candidate in Chemical Engineering"
                        desc="Jad lives in the Corvallis International House."
                        descExt = {null}
                    />
                </Card>
            </div>
        </React.Fragment>
    );
}

export default People;