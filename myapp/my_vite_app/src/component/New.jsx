import { Component } from "react";


class New_class extends Component{
    constructor(){
        super()
        this.state={color:'blue',width:'100px'}
    }
    render(){
        return(
            <h2>class componentss{this.state.color}{this.state.width}</h2>
        )
    }
}

export default New_class