import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import FlowPage from '../pages/FlowPage';

const List = () => {

    // Pull data from the backend into state
    const [ items, setItems ] = useState(null);
    const [asanas, setAsanas] = useState(null);

    const FlowsURL = "https://flowpath.onrender.com/flows/";
    const AsanasURL = "https://flowpath.onrender.com/asanas/"

    const getItems = async () => {
        const response = await fetch(FlowsURL);
        const data = await response.json();
        setItems(data);
    }

    // Functions to pass through props for REST updates to DB
    const createFlow = async (flow) => {
        await fetch(FlowsURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(flow),
        });
        getItems();
    }

    // populate data on page render
    // async functions placed inside to avoid dependency error
    useEffect(() => {
        const getItems = async () => {
            const response = await fetch(FlowsURL);
            const data = await response.json();
            setItems(data);
        }
        getItems();

        const getAsanas = async () => {
            const response = await fetch(AsanasURL);
            const data = await response.json();
            setAsanas(data);
        }
        getAsanas();
    }, []);

    return (  
        <Routes>
            <Route path="flows" 
                element={ 
                    <Index items={items} 
                    createFlow={createFlow}/> 
                } 
            />
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