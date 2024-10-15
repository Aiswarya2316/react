import { Component } from "react";


class Sample_class extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <h2>class component{this.props.color}{this.props.width}</h2>
        )
    }
}

export default Sample_class