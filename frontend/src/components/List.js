import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import FlowPage from '../pages/FlowPage';

const List = () => {

    const [ items, setItems ] = useState(null);
    //const [asanas, setAsanas] = useState(null);

    const FlowsURL = "https://flowpath.onrender.com/flows/";
    //const AsanasURL = "https://flowpath.onrender.com/asanas/"

    // const getAsanas = async () => {
    //     const response = await fetch(AsanasURL);
    //     const data = await response.json();
    //     setAsanas(data);
    // }

    // function load() {
    //     getItems();
    //     getAsanas();
    // }

    useEffect(() => {
        //load()
        const getItems = async () => {
            const response = await fetch(FlowsURL);
            const data = await response.json();
            setItems(data);
        }
        getItems();
    }, []);

    return (  
        <Routes>
            <Route path="flows" element={ <Index items={items} /> } />
            <Route
                path="/flows/:id"
                element={
                    <FlowPage
                        flows={items}
                        // asanas={asanas}
                    />
                }
            />
        </Routes>
    );
}

export default List