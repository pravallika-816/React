import React, { Component } from 'react';
import './form.css';

export class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            skill: ''  
        };
    }

    changeTextValue = (event) => {
        this.setState({
            textValue: event.target.value
        });
    };

    changeSkillValue = (event) => {
        this.setState({
            skill: event.target.value  
        });
    };

    submitValues = (event) => {
        event.preventDefault(); 
        alert(`Form is submitted\nName: ${this.state.textValue}\nSkill: ${this.state.skill}`);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        value={this.state.textValue} 
                        onChange={this.changeTextValue}
                    />  
                    <br/>            

                    <label>Skill</label>
                    <select value={this.state.skill} onChange={this.changeSkillValue}>
                        <option value="">Select a skill</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="html">HTML</option>
                    </select>
                    <br/>

                    <button type="submit">Submit</button> 
                </form>
            </div>
        );
    }
}
