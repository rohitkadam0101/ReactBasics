import React from 'react';

const NameList = () =>{
    const heroes = ["Superman","Spiderman","Hulk","Thor","Iron Man"]
    const heroList = heroes.map((hero,index)=><h2 key = {index}>{hero} - {index}</h2>)
    return(
        <div>
            <h1>Names of Heroes</h1>
            <div>{heroList}</div>
        </div>
    )
}
// We can use different components for rendering and mapping logic
export default NameList

// .map function always expects a key prop it can be key = {person.id}
// key must be used for lists
// key prop i.e. key = something is reserved at we cannot use key for any other task
// key gives a stable identity
// help react identify items have changed are added and removed

// we can also use index as key props
