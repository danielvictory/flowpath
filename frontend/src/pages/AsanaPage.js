import React, {useState} from 'react'
//import { Link } from 'react-router-dom'

const Index = (props) => {

    // Create form for Flow creation in state
    const [newForm, setNewForm] = useState({
        english_name: "",
        sanskrit_name_adapted: "",
        sanskrit_name: "",
        translation_name: "",
        pose_description: "",
        pose_benefits: "",
        url_svg: "",
        url_png: "",
        url_svg_alt: "",
    })

    const handleChange = (evt) => {
        setNewForm({...newForm, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.createAsana(newForm);
        setNewForm({
            english_name:"",
            sanskrit_name:"",
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
        return props.asanas.map((asana) => (
            <div key={asana._id} className="card asana">
                <img alt={asana.english_name +" Pose ("+ asana.sanskrit_name +")"} src={asana.url_png} />
                <div className="asana-info">
                    <h3>{asana.english_name}</h3>
                    <h3>({asana.sanskrit_name})</h3>
                </div>
            </div>
        ))
    }

    // Page return function
    return (
        <div className="container">
            <h1>Asanas</h1>
            <button className="btn btn-new-flow" onClick={toggleCreate}>
                {create ? 'Cancel' : 'New Asana'}
            </button>
            { create && (
                <form className="new-form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={newForm.english_name}
                    name="english_name"
                    placeholder="english name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newForm.sanskrit_name}
                    name="sanskrit_name"
                    placeholder="sanskrit name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newForm.pose_description}
                    name="pose_description"
                    placeholder="pose description"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    value={newForm.url_png}
                    name="url_png"
                    placeholder="image link (png)"
                    onChange={handleChange}
                    />
                    <input type="submit" value="Create Asana" />
                </form>
            )}
            <div className="loaded-list">
                { props.asanas ? loaded() : loading() }
            </div>
        </div>
    )
}

export default Index