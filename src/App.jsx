import Buttons from "./components/Buttons";
import CardLanguage from "./components/CardLanguage"
import CardLanguageV2 from "./components/CardLanguageV2";
import languages from "./data/languages"
import { useState } from "react"



function App() {
  const [btnSelected, setBtnSelected] = useState('HTML')

  const clickHandler = (event) => {
    const target = event.target;
    setBtnSelected(btnSelected === target.textContent ? 'HTML' : target.textContent)


  }

  return (
    <>
      <div>
        <h2>Versione 1</h2>
      </div>
      <div className="container">
        {languages.map(language => {
          const { id, title, description } = language;
          return <div className="row" key={id}>
            <CardLanguage
              title={title}
              description={description}
            />
          </div>
        })}
      </div>

      <div>
        <h2>Versione 2</h2>
      </div>
      <div className="container">
        <div className="row ">
          {languages.map(language => {
            const { id, title } = language;
            return <div key={id} className="col">
              <Buttons
                id={id}
                title={title}
                click={clickHandler}
                selection={btnSelected}
              />
            </div>
          })}
          <div className="card col-12 mt-5">
            {languages.map(language => {
              const { id, title, description } = language;
              return (btnSelected === title &&
                <div className="card-body" key={id}>
                  <CardLanguageV2
                    title={title}
                    description={description}
                  />
                </div>
              )

            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
