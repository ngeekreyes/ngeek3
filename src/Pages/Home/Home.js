import React from 'react';
import '../../style/text.css';
import Portafolio from '../../Pages/Portafolio/Portafolio';
import { Data } from "../../Data/data-ngk";
import {  motion } from "framer-motion";
import Typical from 'react-typical';


const Home = () => {

    return (
    <div className='App-header'>

        {Data.map((Home, key) => {
            return(

                <motion.div key={key} className="Home"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  >

                  <h1>{Home.Tittle}</h1>

                  <h3 className="word w1">UI Design</h3>
                  <h3 className="word w2">UX Reserch</h3>
                  <h3 className="word w3">Mobile Developer</h3>
                  <h3 className="word w4">Front-End Developer</h3>

                   <div className="de">
                   <h2>{Home.SubTittle}</h2>
                    <h3>{Home.text}</h3>
                    <Typical steps={[Home.ngeek, 1000, Home.signature, 3000]} loop={Infinity} wrapper="p"></Typical>
                   </div>

                </motion.div>
                

            );
        })}
         <Portafolio/>
    </div>
    );
};

export default Home;
