import { useState } from "react"


function CardLanguage({
  id = 0,
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
    <div className="row" key={id}>
      <div class="card col my-3">
        <div class="card-body">
          <button onClick={clickListener} className={`btn ${btnClass} mb-3`}>{title}</button>
          {show && (<p>{description}</p>)}
        </div>
      </div>
    </div>
    </>
  )
}
export default CardLanguage