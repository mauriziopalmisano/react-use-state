import { useState } from "react"


function CardLanguage({
  title = 'Titolo',
  description = 'Descrizione'
}) {

  const [show, setShow] = useState(false)

  const clickListener = () => {
    setShow(!show)
  }

  const btnClass = (show ? 'btn-warning' : 'btn-primary')

  return (
    <>
      <div className="card col my-3">
        <div className="card-body">
          <button onClick={clickListener} className={`btn ${btnClass} mb-3`}>{title}</button>
          {show && (<p className="card-text">{description}</p>)}
        </div>
      </div>
    </>
  )
}
export default CardLanguage