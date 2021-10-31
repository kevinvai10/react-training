import React from 'react'

const Card = (props) => {
    return (
        <div className="Card">
            <img alt="card" src={props.img}/>
            <div>
                <h6>{props.title}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card
