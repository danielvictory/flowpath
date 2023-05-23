import React from 'react'
import { useParams } from 'react-router-dom'

const FlowPage = (props) => {

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
            { flow ? loaded() : loading() }
        </div>
    )
}

export default FlowPage