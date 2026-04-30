function Buttons({
    selection = 'HTML',
    title = 'Titolo',
    click = null
}) {

const btnClass = (selection === title ? 'btn-warning' : 'btn-primary')



  return (
    <>
        <button onClick={click} className={`col btn ${btnClass} mx-5`}>{title}</button>
    </>
  )
}
export default Buttons