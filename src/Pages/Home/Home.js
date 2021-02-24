import React from 'react';
import '../../style/text.css';
import { Data } from "../../Data/data-ngk";
import {  motion } from "framer-motion";

const Home = () => {

    return (
    <div className='App-header'>

        {Data.map((Home, key) => {
            return(

                <motion.div key={key} className="Home"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  >
                    <h1>{Home.Tittle}</h1>
                    <h2>{Home.SubTittle}</h2>
                    <h3>{Home.text}</h3>
                    <p>{Home.ngeek}</p>
                </motion.div>

            );
        })}
    </div>
    );
};

export default Home;
