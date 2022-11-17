import "./App.scss";
import ContactMain from "./components/ContactMain/ContactMain";
import SideBar from "./components/SideBar/SideBar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Favorites from "./components/ContactFavorites/Favorites";
// import ContactTable from "./components/ContactTable/ContactTable";

function App() {
    return (
        // <Router>
        //     <div className="App">
        //         <SideBar>
        //             <Route path="/" exact>
        //                 <ContactMain />
        //             </Route>
        //             <Route path="/favorite">
        //                 <Favorites />
        //             </Route>
        //         </SideBar>
        //     </div>
        // </Router>
        <div className="App">
            <SideBar />
            <ContactMain />
        </div>
    );
}

export default App;
