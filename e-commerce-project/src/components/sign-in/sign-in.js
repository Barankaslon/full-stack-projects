import React, { Component } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            passwors: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="email"
                         
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="password"
                         
                    />

                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton 
                        onClick={signInWithGoogle} 
                        >{' '}Sign In with Google{' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;