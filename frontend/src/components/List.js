import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import FlowPage from '../pages/FlowPage';

const List = () => {

    const [ items, setItems ] = useState(null);

    const URL = "http://localhost:3000/flows/";

    const getItems = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => getItems, []);

    return (  
        <Routes>
            <Route path="flows" element={ <Index items={items} /> } />
            <Route
                path="/flows/:id"
                element={
                    <FlowPage
                        flows={items}
                    />
                }
            />
        </Routes>
    );
}

export default List