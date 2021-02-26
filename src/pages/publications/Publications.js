import React from 'react';

import ImgBox from '../../shared/components/UIELements/ImgBox';
import PublicationHolder from './components/PublicationHolder';

import BannerImg from './images/JWebPubs.jpg';

import './Publications.css';

const Publications = (props) => {
    return (
        <React.Fragment>
            <ImgBox banner={BannerImg} title="Publications"/>
            <PublicationHolder>
                <h3>PAPERS RED AT THE SERBIAN ACADEMY OF ARTAND SCIENCES</h3>
                <h4>1. "Aquaplantation in an Integrated Production Cycle; Design, Technological Possibilities and Resources in Serbia", <strong>Goran N. Jovanovic</strong>,The Proceedings of Biomass Conference, Joint Meeting of Serbian Academy  of  Sciences  and  Arts  (Committee  for  Biomass)  and  Hungarian  Academy  of  Sciences, Arandjelovac, YU (1985)</h4>
                <h4>2. “Microreactors –One Likely Future of Catalytic Chemical Processes”, <strong>Goran N. Jovanovic</strong>,The Proceedings of Conference on Catalysis, Annual Meeting of Serbian Academy of Sciences and Arts (Committee for Catalysis), Belgrade, Serbia, October 24 (2007)</h4>
                <h3>CONTRIBUTIONS TO MONOGRAPHS AND BOOK CHAPTERS (REFEREED) </h3>
                <h4>1. "Principles  of  Bioreactors  Design  and  Laboratory  Investigations"  (  G.    Novakovic,  D.  Vukovic  and <strong>G.N.  Jovanovic</strong>),  in Yugoslavia  Exporter  of  Advanced  Technologies -Biotechnology  and  Genetic Engineering,  Privredni Pregled, Belgrade  Vol.19  (1985)</h4>
                <h4>2. "Design and Operation of the Bioreactor for the Production of Immunochemicals" (B. Bugarski, <strong>G.N.  Jovanovic</strong>,  G.  Novakovic  and  M.  Goosen),  in Biologicals  from  Recombinant  Microorganisms  and Animal  Cells,  Production  and  Recovery,  (Eds.  M.D.White,  S.  Reuvenyand  A.  Shafferman)  VCH Publishers Inc., Weinheim, Germany, pp.213-220  (1991)</h4>
                <h4>3. "Operation  of  an  Air-Lift  Bioreactor  for  Production  of  Immunochemicals  by  Immobilized  Hybridoma Cells"  (B.  Bugarski,  G.  Novakovic, <strong>G.N.  Jovanovic</strong>,  K.  Cuperlovic  and  M.  Goosen),  in Animal  Cell Culture  and  Production  of  Biologicals",(Editors.  R.  Sasake  and  K.  Ikura),  Kluwer  Academic Publishers, Netherlands, p.135-141  (1991)</h4>
                <h4>4. "Oxygen  Transfer  in  an  External  Air-Lift  Bioreactor  for  the  Production  of  Monoclonal  Antibodies"  (B. Bugarski, L. Sofronic, M. Goosen, G. Novakovic,, <strong>G.N.  Jovanovic</strong>), in Microscopic and Macroscopic Heat  and  Mass  Transfer  in  Biomedical  Engineering,  (Editors.  K.R.  Diller  &  H.L.  Kent)  ICHMT  Press Belgrade p.83-93 (1992)</h4>
                <h4>5. "Semipermeable  Alginate-PLL  Microcapsules  as  a  Bioartificial  Pancreas"  (  B.  Bugarski,  L.  Sofronic, K.  Cuperlovic,  A.  Nikolic,  M.  Goosen,  G.  Novakovic  and <strong>G.N.  Jovanovic</strong>),  in Microscopic  and Macroscopic  Heat  and  Mass  Transfer  in  Biomedical  Engineering,  (Editors.  K.R.  Diller  &  H.L.  Kent) ICHMT Press Belgrade, p.27-37 (1992)</h4>
                <h4>6. "Pharmacokinetic   Models   of   Anesthesia"   (<strong>G.N.  Jovanovic</strong>,   B.   Bugarski,   R.   Seagrave),   in Microscopic  and  Macroscopic  Heat  and  Mass  Transfer  in  Biomedical  Engineering,  (Editors -K.R. Diller & H.L. Kent) ICHMT Press Belgrade, p.p.7-17 (1992)</h4>
                <h3>REFEREED PUBLICATIONS </h3>
                <h4>1. "SteadyState  Process  Simulation  and  Optimization;  Program  for  Modular  Simulation",  (<strong>G.N.  Jovanovic</strong> and N. Catipovic), in Chem. Ind.,26(4) 169 (1977)</h4>
                <h4>2. "Steady  State  Process  Simulation  and  Optimization;  Simulation  and  Optimization  of  Chemical Reactors",  (N.Catipovic and <strong>G.N.  Jovanovic</strong>), in Chem. Ind., 26(5) 221 (1977)</h4>
                <h4>3. "Regimes  of  Fluidization  for  Large  Particles",  (T.J.    Fitzgerald,  N.  Catipovic  and <strong>G.N.  Jovanovic</strong>), AIChE J., 24, 543 (1978)</h4>
                <h4>4. "Chemical  Engineering Aspects  of Fluidized Bed Coal  Combustion" (<strong>G.N.  Jovanovic</strong>, N. Catipovic) inChem. Ind.,32(12) 777 (1978)</h4>
            </PublicationHolder>
        </React.Fragment>
    );
}

export default Publications;