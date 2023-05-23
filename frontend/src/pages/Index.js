import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {

    // Create form for Flow creation in state
    const [newForm, setNewForm] = useState({
        name:"",
        user:"",
    })

    const handleChange = (evt) => {
        setNewForm({...newForm, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.createFlow(newForm);
        setNewForm({
            name:"",
            user:"",
        })
        setCreate(prevState => !prevState)
    }

    // Toggle the "New" fields
    const [create, setCreate] = useState(false);

    const toggleCreate = () => {
        setCreate(prevState => !prevState)
    }

    // functions for page display before and after load
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

    // Page return function
    return (
        <div className="container">
            <h1>Flows</h1>
            <button className="btn btn-new-flow" onClick={toggleCreate}>
                {create ? 'Cancel' : 'New Flow'}
            </button>
            { create && (
                <form className="new-form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newForm.user}
                    name="user"
                    placeholder="user"
                    onChange={handleChange}
                    />
                    <input type="submit" value="Create Flow" />
                </form>
            )}
            <div className="loaded-list">
                { props.items ? loaded() : loading() }
            </div>
        </div>
    )
}

export default Index