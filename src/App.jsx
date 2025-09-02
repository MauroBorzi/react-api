import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [actresses, setActresses] = useState([])

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => { console.log(res.data) })
  }

  useEffect(fetchActresses, [])

}

export default App
