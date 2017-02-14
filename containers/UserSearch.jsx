import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {login, getCustomerData, revokeToken} from '../actions';

class UserSearch extends React.Component {
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
        const {
            query,
            results,
            searchInFlight
        } = this.props;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <input
                            type='text'
                            placeholder='username'
                            name="username"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder='password'
                            name="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

                {this.props.login.token
                    ? <div>
                        <p><strong>Using Token:</strong> <code>{this.props.login.token}</code></p>
                        <p>
                            <button type="button" onClick={() => this.getCustomerData()}>Load customer data</button>
                            <button type="button" onClick={() => this.revokeToken()}>Revoke token</button>
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

            </div>
        );
    }
}

export default connect(
    ({routing, userResults, searchInFlight, login}) => ({
        query: routing.locationBeforeTransitions.query.q,
        results: userResults,
        searchInFlight,
        login
    }),
    {loginUser: login, getCustomerData, revokeToken}
)(UserSearch);
