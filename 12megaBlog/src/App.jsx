import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);     //This env(environmental variable)file define inside the process

  return (
    <>
      <h1>Godzilla Titan</h1>
    </>
  )
}

export default App
