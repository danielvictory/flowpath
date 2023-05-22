import React from 'react'

const Index = (props) => {
    const loading = () => {
        return <h1>loading...</h1>
    }

    const loaded = () => {
        return props.items.map((item) => (
            <div key={item._id} className="card">
                <h3>{item.name}</h3>
                <h5>{item.user}</h5>
            </div>
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