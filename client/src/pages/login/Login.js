import React from 'react';

import './Login.css';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/formElements/Input';
import Button from '../../shared/components/formElements/Button';
import { VALIDATOR_REQUIRE } from '../../shared/util/validator';

const Login = (props) => {
    return (
        <Card className="authentication">
            <h2>Site Administrator Login</h2>
            <hr />
            <form>
                <Input 
                    element="input" 
                    id="username" 
                    type="username" 
                    label="username" 
                    validator={[VALIDATOR_REQUIRE()]}
                    errorText="Enter a valid username"
                />
            </form>
        </Card>
    );
}

export default Login;