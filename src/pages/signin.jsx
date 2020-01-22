import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setUser } from "../redux/actions/user.action";

const Form = styled.div`
    width: 40%;
    height: 10rem;
    margin: 0 auto;
`;

const SignIn = ({setUser}) => {

    const onClickHandler = e => {
        e.preventDefault();
        fetch('http://localhost:5000/signin', {
            method: 'post',
            credentials: "include",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `username=${document.getElementById('username').value}&password=${document.getElementById('password').value}`
        }).then(res => res.json()).then(setUser);
    }

    return(
        <Form>
            <form>
                <label >Username:</label><input type="text" id="username" name="username"/>
                <br/>
                <label >Password:</label><input type="password" id="password" name="password"/>
                <br/>
                <input type="submit" value="submit" onClick={onClickHandler} />
                <p>Don't have an account. Register</p><Link to="signup" >here.</Link>
            </form>
        </Form>
    );
}

export default connect( null, dispatch => ({setUser: user => dispatch(setUser(user)) }) )(SignIn);