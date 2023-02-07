import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Customerneed from "./Components/CustomerNeeds/Customerneed";
import Corecapablities from "./Components/Corecapabilities/Corecapablities";
import Contactus from "./Components/contactus/contactus";
import Aboutus from "./Components/aboutus/aboutus";
import Clients from "./Components/clients/clients";
import Solution from "./Components/solution/solution";

function App() {
    return (
        <div>
            <Home/>
            <Customerneed />
            <Corecapablities />
            <Solution />
            <Aboutus />
            <Clients />
            <Contactus />
            <Footer />
        </div>
    );
}

export default App;

