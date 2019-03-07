import React, {Component} from 'react';
import {Button, Divider, Typography, InputAdornment, Icon} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as authActions from 'app/auth/store/actions';
import { FormattedMessage } from 'react-intl';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

    var test = read_cookie('sitroLang'); 

var language = navigator.language;

class JWTLoginTab extends Component {

    state = {
        canSubmit: false
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        this.props.submitLogin(model);
    };

    componentDidUpdate(prevProps, prevState)
    {
        if ( this.props.login.error && (this.props.login.error.email || this.props.login.error.password) )
        {
            this.form.updateInputsWithError({
                ...this.props.login.error
            });

            this.props.login.error = null;
            this.disableButton();
        }

        return null;
    }

    render()
    {
        const {canSubmit} = this.state;

        return (
            <div className="w-full">
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="flex flex-col justify-center w-full"
                >
                
                    <TextFieldFormsy
                        className="mb-16"
                        type="text"
                        name="email"
                        label="Username/Email"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">email</Icon></InputAdornment>
                        }}
                        variant="outlined"
                        required
                    />

                    <TextFieldFormsy
                        className="mb-16"
                        type="password"
                        name="password"
                        label="Password"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">vpn_key</Icon></InputAdornment>
                        }}
                        variant="outlined"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto mt-16 normal-case"
                        aria-label="LOG IN"
                        disabled={!canSubmit}
                        value="legacy"
                    >
                        
                        <FormattedMessage id="login.login" values={{name: 'React.js'}}/>
                    </Button>

                </Formsy>

                <div className="flex flex-col items-center pt-24">
                    <Typography className="text-14 font-600 py-8">
                    <FormattedMessage id="login.credentials" values={{name: 'React.js'}}/>
                    </Typography>

                    <Divider className="mb-16 w-256"/>

                    <table className="text-left w-256">
                        <thead>
                            <tr>
                                <th><Typography className="font-600" color="textSecondary"><FormattedMessage id="login.role" values={{name: 'React.js'}}/></Typography></th>
                                <th><Typography className="font-600" color="textSecondary"><FormattedMessage id="login.username" values={{name: 'React.js'}}/></Typography></th>
                                <th><Typography className="font-600" color="textSecondary"><FormattedMessage id="login.password" values={{name: 'React.js'}}/></Typography></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Typography>Admin</Typography></td>
                                <td><Typography>admin</Typography></td>
                                <td><Typography>admin</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography><FormattedMessage id="login.staff" values={{name: 'React.js'}}/></Typography></td>
                                <td><Typography>staff</Typography></td>
                                <td><Typography>staff</Typography></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        submitLogin: authActions.submitLogin
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        login: auth.login,
        user : auth.user
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JWTLoginTab));
