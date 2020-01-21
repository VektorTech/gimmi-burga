import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.div`
    width: 40%;
    height: 10rem;
    margin: 0 auto;
`;

const Signup = () => {
    const history = useHistory();

    const onClickHandler = e => {
        e.preventDefault();
        fetch('http://localhost:5000/signup', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `username=${document.getElementById('username').value}`+
                  `&address=${document.getElementById('address').value}`+
                  `&password=${document.getElementById('password').value}`
        }).then( history.replace('/signin') ).catch(console.log);
    }

    return(
        <Form>
            <form>
                <label >Username:</label><input type="text" id="username" name="username"/>
                <br/>
                <label >Address:</label><input type="text" id="address" name="address"/>
                <br/>
                <label >Password:</label><input type="password" id="password" name="password"/>
                <br/>
                <input type="submit" value="submit" onClick={onClickHandler} />
            </form>
        </Form>
    );
}

export default Signup;