import React, { Component, useState} from "react";

class Test extends Component {
    state={
        color:"black",
    }    
    
    handleColorChange = () => {
        this.setState({color:"#ff0000"})
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate")
        console.log(this.state)
        console.log(newState)
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render() {        
        return (
        <div>
            <p id="text" style={{
                color: this.state.color
            }}>{this.props.text}</p>
            <button id="button" onClick={this.handleColorChange}>Change</button>
        </div>
        );
    }
}

const Functional = ()=>{    
    const [color, setColor] = useState("black");
    const handleColorChange = () => {
        setColor("#ff0000")
    }

    return (
        <div>
            <p id="text" style={{
                color: color
            }}>HelloWorld</p>
            <button id="button" onClick={ handleColorChange }>Change</button>
        </div>
    )
}

export default Test
