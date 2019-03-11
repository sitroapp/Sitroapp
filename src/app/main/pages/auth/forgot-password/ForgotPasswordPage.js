import React, {Component} from 'react';
import {withStyles, Button, Card, CardContent, TextField, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import _ from '@lodash';
import {darken} from '@material-ui/core/styles/colorManipulator';
import { FormattedMessage } from 'react-intl';

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

class ForgotPasswordPage extends Component {

    state = {
        email: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email} = this.state;
        return (
            email.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className="w-full max-w-384">

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <div className="w-128 m-32">
                                    <img src="assets/images/logos/fuse.svg" alt="logo"/>
                                </div>

                                <Typography variant="h6" className="mt-16 mb-32">
                                <FormattedMessage id="ForgotPasswordPage.password" defaultMessage="RECOVER YOUR PASSWORD"/> 
                                
                                </Typography>

                                <form name="recoverForm" noValidate className="flex flex-col justify-center w-full">

                                    <TextField
                                        className="mb-16"
                                        autoFocus
                                        type="email"
                                        name="email"
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth>
                                                  
                                        <FormattedMessage id="email.value" defaultMessage="email" />
                                        </TextField>
                                    
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="w-224 mx-auto mt-16"
                                        aria-label="Reset"
                                        disabled={!this.canBeSubmitted()}
                                    >
                                       <FormattedMessage id="ForgotPasswordPage.link" defaultMessage="SEND RESET LINK" />  
                                    </Button>

                                </form>

                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <Link className="font-medium" to="/pages/auth/login">
                                    <FormattedMessage id="go.back" defaultMessage="Go back to login"/>
                                        </Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ForgotPasswordPage);
