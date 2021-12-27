import React from 'react'
const greet = (props)=>{ // or we can destructure inside arguments itself
    console.log(props)
    const {name,role} = props; // for directly using instead of props.name and props.role
    return(
        <div>
            <h1>Hello {name} Role = {role}</h1>
            <p>{props.children}</p>
        </div>
        
    )
}
export default greet;