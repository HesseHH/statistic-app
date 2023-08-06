export const Field = ({ id, dataRow }) => {
  return (
    <>
      {Object.keys(dataRow).map(key => {
        if (id == key) {
          return (<td key={key} className='px-6 py-3 whitespace-nowrap text-cyan-600'>{dataRow[id]}</td>)
        }
        return null
      })}
    </>
  )
}