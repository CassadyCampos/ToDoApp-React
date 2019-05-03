import React from 'react'

class NextTask extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSUbmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Next task was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <input type='text' value={this.state.value}
            placeholder='Next Task. . .' nChange={this.handleChange} />

        )
    }
}

export default NextTask