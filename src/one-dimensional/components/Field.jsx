import React from 'react'

export const Field = ({id, data = []}) => {
    console.log(data)
  return (
    <>
        {data.map(d => {
            if (id == d.colID) {
                return (<td>{d.value}</td>)
            }
            return (<></>)
        })}
    </>
  )
}
