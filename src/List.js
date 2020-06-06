import React from "react"

export default function List({list}){
    return(
        <>{list.map(elem => elem)}</>
    )

}
