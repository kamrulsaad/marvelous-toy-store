import React from 'react';
import Brands from '../Brands/Brands';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Statistic from '../Statistics/Statistic';
import Step from '../StepSection/Steps';
import Team from '../Teams/Team';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div initial={{width: 0} } animate={{width: '100%', transition: {delay: 0.5}}} exit={{x: window.innerWidth}}>
            <Header></Header>
            <Inventory></Inventory>
            <Step></Step>
            <Brands></Brands>
            <Team></Team>
            <Statistic></Statistic>
        </motion.div>
    );
};

export default Home;