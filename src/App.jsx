import './App.css'
import { useState } from 'react'

function App() {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    city: ''
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }) // Removed unnecessary brackets
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values) // Logs the correct object now
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form_control">
          <label htmlFor="name">Name: <span>*</span></label>
          <input type="text" name="name" required onChange={(e) => handleChange(e)} /> {/* Added name="name" */}
        </div>

        <div className="form_control">
          <label htmlFor="email">Email: <span>*</span></label>
          <input type="email" name="email" required onChange={(e) => handleChange(e)} /> {/* Added name="email" */}
        </div>

        <div className="form_control">
          <label htmlFor="city">City: <span>*</span></label>
          <input type="text" name="city" required onChange={(e) => handleChange(e)} /> {/* Added name="city" */}
        </div>

        <div className="btn">
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
