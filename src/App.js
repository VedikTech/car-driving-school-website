

import Navbar from './Component/Navbar/Navbar';
import Services from './Component/Services/services';
import Slideimg  from './Component/Slideimage/slideimg';
import Enquire from './Component/Enquires/enquire';
import Subscribe from './Component/Suscribe/Suscribe_form';
import Footer from './Component/Footer/Footer.js';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slideimg/>
    <Services/>
    <Enquire/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default App;
