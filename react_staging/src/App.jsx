import React from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import './App.css';

export default class App extends React.Component{

    state={

    }
    render() {
        return(
            <div className="body_wrapper">
                <Header/>
                <List/>
                <Footer/>
            </div>
        )
    }
}