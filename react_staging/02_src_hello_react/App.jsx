import React, {Component} from "react";

import Hello from './components/Hello';
import Wellcome from "./components/Wellcome";

export default class App extends Component{
    render() {
        return(
            <div>
                <Hello/>
                <Wellcome/>
            </div>
        )
    }
    
}