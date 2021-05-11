import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portfolio.css';
//import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Logo from '../../Components/Logo';


const Portafolio = () => {

    return (

    <div className="portf">

    <Logo/>
    <motion.div className='portafolio' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
       <div>
       <Row >
            <Col><motion.div whileHover={{scale: 1.04}} className="card-img"></motion.div></Col>
            <Col><motion.div whileHover={{scale: 1.04}} className="card-img2"></motion.div></Col>
        </Row>
       </div>
       <div className="demo">
       <Row >
            <Col><motion.div whileHover={{scale: 1.04}} className="card-img4"></motion.div></Col>
            <Col><motion.div whileHover={{scale: 1.04}} className="card-img5"></motion.div></Col>
        </Row>
       </div>
    </motion.div>
    </div>   



        

);
};

export default Portafolio;