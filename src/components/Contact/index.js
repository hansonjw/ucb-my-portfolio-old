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
            <div>
                <section>
                    <div>this is the CONTACT section</div>
                </section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )

    }
}

export default Contact;