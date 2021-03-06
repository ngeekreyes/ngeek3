
import React from 'react';
//import { Link } from 'react-router-dom';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import {MobileApp} from '../../../Data/data-proyectos';
import './Port-List.css';
import { motion } from "framer-motion";
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById } from '../../../selectors/getProjectById';
//import { CardDetails } from '../../../Components/CardDetails';

const PortList = () => {

    const {projectid} = useParams();
    const google = getProjectById( projectid );
    if(!google){
        return <Redirect to="/" />
    }
    const {
        tittle,
        Overview,
        picture
       
     
    } = google;
    
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

export default PortList;