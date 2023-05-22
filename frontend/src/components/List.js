import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import FlowPage from '../pages/FlowPage';

const List = () => {

    const [ items, setItems ] = useState(null);
    const [asanas, setAsanas] = useState(null);

    const FlowsURL = "http://localhost:3000/flows/";
    const AsanasURL = "http://localhost:3000/asanas/"

    const getItems = async () => {
        const response = await fetch(FlowsURL);
        const data = await response.json();
        setItems(data);
    }

    const getAsanas = async () => {
        const response = await fetch(AsanasURL);
        const data = await response.json();
        setAsanas(data);
    }

    function load() {
        getItems();
        getAsanas();
    }

    useEffect(() => load);

    return (  
        <Routes>
            <Route path="flows" element={ <Index items={items} /> } />
            <Route
                path="/flows/:id"
                element={
                    <FlowPage
                        flows={items}
                        asanas={asanas}
                    />
                }
            />
        </Routes>
    );
}

export default List