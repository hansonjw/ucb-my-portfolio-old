import React from 'react';
import annie1 from "../../assets/annie1.jpeg";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('message transmitted and message recieved')
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.message);
    }

    render() {
        return(
            <div class="container form-contact">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="nameInput">Name:</label>
                        <input type="text" class="form-control" name="name" id="nameInput" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email:</label>
                        <input type="email" class="form-control" name="email" id='emailInput' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="messageInput">Message:</label>
                        <textarea name="message" class="form-control" rows="5" id="messageInput" value={this.state.message} onChange={this.handleChange} />
                    </div>
                    <div class="form-group py-3 btn-contact-container">
                        <input type="submit" class="btn-contact" />
                    </div>
                </form>
            </div>
        )

    }
}

export default Contact;