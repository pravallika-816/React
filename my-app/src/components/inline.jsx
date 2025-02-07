import React from "react";

const FunctionalComponent = (props) => {
    console.log(props);

    let className = props.apply ? "heading" : "";

    let inline = {
        backgroundColor: "pink", 
        color: "hotpink",
        fontSize: "100px",
        fontStyle: "italic",
    };

    return (
        <div style={inline}> 
            <h1 className={className}>
                
                Welcome to MRU {props.state}, {props.city}
                                                            
            </h1>
        </div>
    );
};

export default FunctionalComponent;
