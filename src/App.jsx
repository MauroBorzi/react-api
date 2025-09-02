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
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">nome</h5>
              <p className="card-text">biografia</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">anno di nascita</li>
              <li className="list-group-item">nazionalità</li>
              <li className="list-group-item">riconoscimenti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
