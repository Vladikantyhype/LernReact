import './App.css';
import {Component} from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

class App extends Component {
    render() {
        return (<div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <Profile/>
                </div>
            </div>
        );
    }
}


export default App;
