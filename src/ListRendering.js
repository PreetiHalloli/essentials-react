import React from 'react'

function ListRendering (){
    const persons = [
        {
            id: 1,
            name: 'Preeti',
            skill: 'coding'
        },
        {
            id: 2,
            name: 'Potter',
            skill: 'acting'
        }
    ]

    const personList = persons.map(person =>(
        <h2>
            I am {person.name}. I know {person.skill}
        </h2>
    ))

    return <div>{personList}</div>
}

export default ListRendering


// -------------------------------------------------------------------------------------- //

/*

*/