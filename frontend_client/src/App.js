import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API = "https://smart-grocery-manager.onrender.com/api/items/"

  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  useEffect(() => {
    axios.get(API).then(res => {
      setItems(res.data)
    })
  }, [])

  const addItem = async () => {

    await axios.post(API, {
      name: name,
      quantity: parseInt(quantity)
    })

    window.location.reload()

  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Smart Grocery Manager</h1>

      <input
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} - {i.quantity}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App