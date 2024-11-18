import Filters from "./components/Filter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import ProductGallery from "./pages/ProductGallery";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-screen-2xl mx-auto px-4 lg:p-0">
        <Filters/>
        <ProductGallery />
      </div>
      <Footer/>
    </div>
  )
}

export default App
