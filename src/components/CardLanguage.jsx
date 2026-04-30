function CardLanguage({
  id = 0,
  title = 'Titolo',
  description = 'Descrizione'
}) {



  return (
    <>
    <div className="row" key={id}>
      <div class="card col my-3">
        <div class="card-body">
          <button className="btn btn-primary">{title}</button>
          <p>{description}</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default CardLanguage