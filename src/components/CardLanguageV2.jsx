function CardLanguageV2({
    title = 'Titolo',
    description = 'Descrizione'
}) {




    return <div>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
    </div>

}
export default CardLanguageV2