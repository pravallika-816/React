import React, {Component} from "react";

class CBCPropsex1 extends Component{
    render(){
        console.log(this);
        return(
            <div>
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                <div>
                    <h3>{this.props.desig[0]}</h3>
                </div>
                <h4>{this.props.userDetails.area}</h4>
                <button onClick={this.props.sendFun}>Click on Button</button>
            </div>
        )
    }
}
export default CBCPropsex1;
