import React, {Component} from "react";
import wellcome from './index.module.css';

export default class Wellcome extends Component{
    render() {
        return(
            <div className={wellcome.title}>Wellcome</div>
        )
    }
}