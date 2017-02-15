import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {login, getCustomerData, revokeToken} from '../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        // this.handleUsernameInput(this.props.query);
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.query !== nextProps.query) {
        //     this.handleUsernameInput(nextProps.query);
        // }
    }

    submit(event) {
        event.preventDefault();
        this.props.loginUser({
            username: this.state.username,
            password: this.state.password
        });
    }

    handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    getCustomerData () {
        this.props.getCustomerData();
    }

    revokeToken () {
        this.props.revokeToken();
    }

    render() {
        return <div>
            <form action="#" onSubmit={this.submit}>
                <div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="username" name="username" onChange={this.handleInput} />
                        <label className="mdl-textfield__label" htmlFor="username">Email:</label>
                    </div>
                </div>
                <div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="password" name="password" onChange={this.handleInput} />
                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" disabled={this.props.login.loading}>
                    Login
                </button>
            </form>
            <br/>

            <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate" hidden={!this.props.login.loading}></div>


            {this.props.login.token
                ? <div>
                    <p><strong>Using Token:</strong> <code>{this.props.login.token}</code></p>
                    <p>
                        <button className="mdl-button mdl-js-button mdl-button--raised" onClick={() => this.getCustomerData()}>Load Customer Data</button>
                        <button className="mdl-button mdl-js-button" onClick={() => this.revokeToken()}>Revoke Token</button>
                    </p>
                    {this.props.login.customer.id
                        ? <pre>{JSON.stringify(this.props.login.customer, null, 2)}</pre>
                        : null
                    }
                </div>
                : null
            }

            {this.props.login.error
                ? <p><strong>Error:</strong> {this.props.login.error ? 'AUTH ERROR' : null}</p>
                : null
            }

        </div>;
    }
}

const mapStateToProps = (state, props) => ({
    login: state.login
});

const mapDispatchToProps = {
    loginUser: login,
    getCustomerData,
    revokeToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
