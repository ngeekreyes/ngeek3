
import React from 'react';
//import { Link } from 'react-router-dom';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import {MobileApp} from '../../../Data/data-proyectos';
import '../DetailsProject/Port-List.css';
import { motion } from "framer-motion";
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById2 } from '../../../selectors/getProjectById';
//import { CardDetails } from '../../../Components/CardDetails';

const CompanyList = () => {

    const {projectid} = useParams();
    const company = getProjectById2( projectid );
    if(!company){
        return <Redirect to="/" />
    }
    const {
        tittle,
        Overview,
        picture
       
     
    } = company;
    
    return(  
        <motion.div>
            <div className="head-port"  style={{backgroundImage:`linear-gradient(to bottom,rgba(244, 244, 242, 0.50),rgba(255, 255, 255, 1)),url(/${picture})`}}>
                <h1>{tittle}</h1>           
            </div>
            <div className="conten">
                <div className="txtinfo">
                    <h1>{Overview}</h1>
                </div>
            </div>
        </motion.div>
    );

};

export default CompanyList;