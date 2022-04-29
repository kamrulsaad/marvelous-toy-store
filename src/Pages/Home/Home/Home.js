import React from 'react';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Step from '../StepSection/Steps';
import Team from '../Teams/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <Step></Step>
            <Team></Team>
        </div>
    );
};

export default Home;