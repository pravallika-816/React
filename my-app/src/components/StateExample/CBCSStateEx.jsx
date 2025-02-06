import React ,{Component} from 'react'
class CBCSStateEx extends Component{
    constructor(){
        super()
        this.state={
            username:"Pravallika"
        };
    }
    ChangeName=()=>{
        this.setState({username:"Navya"})
    }
    render(){
        console.log(this.state);
        return (
            <div>CBCSStateEx
                <h1>{this.state.username}</h1>
                <button onClick={this.ChangeName}>click here</button>
            </div>
        )
    }
}
export default CBCSStateEx
