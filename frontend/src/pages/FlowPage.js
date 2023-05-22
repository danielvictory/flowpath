import React from 'react'
import { useParams } from 'react-router-dom'

const FlowPage = (props) => {

    const {id} = useParams();
    const flows = props.flows
    const flow = flows ? flows.find((f) => f._id === id) : null;

    const loading = () => {
        return <h1>loading...</h1>
    }

    const loaded = () => {
        return(
            <div className="container">
                <h1>{flow.name}</h1>
            </div>
        );
    }


    return (
        <div>
            { flow ? loaded() : loading() }
        </div>
    )
}

export default FlowPage