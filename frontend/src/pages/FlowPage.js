import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Dropdown files by Thi Tran, published in TinySo on Medium
// https://medium.com/tinyso/how-to-create-a-dropdown-select-component-in-react-bf85df53e206
import Dropdown from '../components/Dropdown'

const FlowPage = (props) => {
    // Set navigate for redirect use after updating flow
    const navigate = useNavigate()

    // Get data through props to populate information
    const {id} = useParams();
    const flows = props.flows
    const flow = flows ? flows.find((f) => f._id === id) : null;

    const currentAsanas = []
    const findAsanas = () => {
        flow.asanas.forEach((a) => {
            let nextPose = props.asanas.find((x) => x._id === a)
            currentAsanas.push(nextPose)
        })
    }

    // function for dropdown options
    const dropLoad = (arr) => {
        let x = [];
        arr.forEach(a => {
            x.push({
                "value": a._id,
                "label": a.english_name,
            })
        })
        return x
    }

    // add asana based on value in the dropdown
    let asanaIdToAdd
    const handleAsanaIdToAdd = (val) => {
        asanaIdToAdd = val
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        flow.asanas.push(asanaIdToAdd)
        props.updateFlow(flow, id);
        navigate(`/flows/${id}`)
    }

    // functions for page display before and after load
    const loading = () => {
        return <h1>loading...</h1>
    }

    const loaded = () => {

        findAsanas()

        return currentAsanas.map((asana) => (
            <div key={asana._id} className="card asana">
                <img alt={asana.english_name +" Pose ("+ asana.sanskrit_name +")"} src={asana.url_png} />
                <div className="asana-info">
                    <h3>{asana.english_name}</h3>
                    <h3>({asana.sanskrit_name})</h3>
                </div>
            </div>
        ));
    }

    return (
        <div className="container">
            <h1>{flow.name}</h1>
            <form onSubmit={handleSubmit}>
                <Dropdown
                    isSearchable
                    placeHolder="Select Asana..."
                    options={dropLoad(props.asanas)}
                    onChange={(value) => handleAsanaIdToAdd(value.value)}
                />
            <input type="submit" value="Add Asana"/>
            </form>
            { flow ? loaded() : loading() }
        </div>
    )
}

export default FlowPage