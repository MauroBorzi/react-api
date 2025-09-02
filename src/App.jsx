import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [actresses, setActresses] = useState([])

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => { setActresses(res.data) })
  }

  useEffect(fetchActresses, [])


  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12 my-5 text-center">
          <h1>BEST ACTRESSES</h1>
          <p>General information, best movies and awards</p>
        </div>
        {actresses.map(act => {

          const { id, image, name, biography, birth_year, nationality, awards, most_famous_movies } = act

          return (
            <div className="col-12 col-md-6 col-lg-3" key={id}>
              <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{biography}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{birth_year}</li>
                  <li className="list-group-item">{nationality}</li>
                  <li className="list-group-item">{awards}</li>
                  <li className="list-group-item">
                    <strong>Most famous movies</strong><br />
                    {most_famous_movies.join(', ')}</li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default App
