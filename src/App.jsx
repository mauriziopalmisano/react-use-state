import CardLanguage from "./components/CardLanguage"
import languages from "./data/languages"




function App() {


  return (
    <>
      <div className="container">
        {languages.map(language => {
          const { id, title, description } = language;
          return <CardLanguage
            id={id}
            title={title}
            description={description}
          />
        })}
      </div>
    </>
  )
}

export default App
