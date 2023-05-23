import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import FlowPage from '../pages/FlowPage';
import AsanaPage from '../pages/AsanaPage'

const List = () => {

    // Pull data from the backend into state
    const [ items, setItems ] = useState(null);
    const [asanas, setAsanas] = useState(null);

    const FlowsURL = "https://flowpath.onrender.com/flows/";
    const AsanasURL = "https://flowpath.onrender.com/asanas/"

    // Make functions available outside of useEffect for page reload
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

    const createAsana = async (asana) => {
        await fetch(AsanasURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(asana),
        });
        getAsanas();
    }

    const updateFlow = async (flow, id) => {
        // make put request to create people
        await fetch(FlowsURL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(flow),
        });
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
                    createFlow={createFlow}
                    /> 
                } 
            />
            <Route path="asanas" 
                element={ 
                    <AsanaPage asanas={asanas} 
                    createAsana={createAsana}
                    /> 
                } 
            />
            <Route
                path="/flows/:id"
                element={
                    <FlowPage
                        flows={items}
                        asanas={asanas}
                        updateFlow={updateFlow}
                    />
                }
            />
        </Routes>
    );
}

export default List