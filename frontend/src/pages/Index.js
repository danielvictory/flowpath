import React from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {
    const loading = () => {
        return <h1>loading...</h1>
    }

    const loaded = () => {
        return props.items.map((item) => (
            <Link key={item._id} to={`/flows/${item._id}`}>
                <div  className="card">
                    <h3>{item.name}</h3>
                    <h5>{item.user}</h5>
                </div>
            </Link>
        ))
    }

    return (
        <div className="container">
            <h1>Flows</h1>
            <div className="loaded-list">
                { props.items ? loaded() : loading() }
            </div>
        </div>
    )
}

export default Index