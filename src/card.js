import React from "react";

const Card = ({name,email}) => {
    return (
        <div className="card tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card