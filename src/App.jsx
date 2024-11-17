import Filters from "./components/Filter"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-screen-2xl mx-auto px-4 lg:p-0">
        <Filters/>
      </div>
    </div>
  )
}

export default App
