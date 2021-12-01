import React from 'react'

const Card = (properties) => {
    console.log(properties)
    return (
        <div className="card">
            <h3>Full Name : {properties.name}</h3>
            <p>Age : {properties.age}</p>
            <p>Job : {properties.job}</p>
            <p>id : {properties.id}</p>
        </div>
    )
}
export default Card