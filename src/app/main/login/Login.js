import React, {Component} from 'react'
import {withStyles, Card, CardContent, Typography, Tabs, Tab} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {Link, withRouter} from 'react-router-dom';
import classNames from 'classnames';
import JWTLoginTab from './tabs/JWTLoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import { FormattedMessage } from 'react-intl';

const styles = theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
});

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends React.Component {
    state = {
      language: "finish"
    };
  
    _updateLanguage = e => this.setState({ language: e.target.value });
    get updateLanguage() {
        return this._updateLanguage;
    }
    set updateLanguage(value) {
        this._updateLanguage = value;
    }
   
    render() {
      return (
        <LanguageContext.Provider
          value={{
            language: this.state.language,
            updateLanguage: this.updateLanguage
          }}
        >
          {this.props.children}
        </LanguageContext.Provider>
      );
    
  }
}

  const Header = () => {
    return (
      <LanguageConsumer>
        {({ updateLanguage }) => (
          <header>
             Change Language
            <select onChange={updateLanguage}>
              <option value="finish">finish</option>
              <option value="english">english</option>
            </select>
          </header>
        )}
      </LanguageConsumer>
    );
  };

  var updatedLanguage = e =>LanguageConsumer.getState();
console.log(updatedLanguage);

const TranslatableText = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

class Login extends Component {

    state = {
        tabValue: 0
    };

    handleTabChange = (event, value) => {
        this.setState({tabValue: value});
    };

    render()
    {
        const {classes} = this.props;
        const {tabValue} = this.state;
        
        return (
            <LanguageProvider> 
         <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>
<div> <Header /> </div>
                <div className="flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left">

                    <FuseAnimate animation="transition.expandIn">
                        <img className="w-128 mb-32" src="assets/images/logos/Sitro_Keltainen.png" alt="logo"/>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                        <Typography variant="h3" color="inherit" className="font-light">
                            < TranslatableText 
                            dictionary={{
                                english: "Welcome to the FUSE!",
                                finish: "Tervetuloa Sitroon!"
                            }}/> 
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate delay={400}>
                        <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                        Ota tehtävät ja vuorovaikutus haltuun. 
                        </Typography>
                    </FuseAnimate>
                </div>

                <FuseAnimate animation={{translateX: [0, '100%']}}>

                    <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                            <Typography variant="h6" className="text-center md:w-full mb-48">
                            <TranslatableText 
                            dictionary={{
                                finish: "KIRJAUDU TILILLESI",
                                english: "LOGIN TO YOUR ACCOUNT"
                            }}/>
                           
                            </Typography>

                            <Tabs
                                value={tabValue}
                                onChange={this.handleTabChange}
                                variant="fullWidth"
                                className="mb-32"
                            >
                                <Tab
                                    icon={<img className="h-40 p-4 bg-black rounded-12" src="assets/images/logos/jwt.svg" alt="firebase"/>}
                                    className="min-w-0"
                                    label="JWT"
                                />
                                <Tab
                                    icon={<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase"/>}
                                    className="min-w-0"
                                    label="Firebase"
                                />
                                <Tab
                                    icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0"/>}
                                    className="min-w-0"
                                    label="Auth0"
                                />
                            </Tabs>

                            {tabValue === 0 && <JWTLoginTab/>}
                            {tabValue === 1 && <FirebaseLoginTab/>}
                            {tabValue === 2 && <Auth0LoginTab/>}

                            <div className="flex flex-col items-center justify-center pt-32">
                                <span className="font-medium">
                               <TranslatableText 
                               dictionary={{
                                   finish: "Eikö sinulla ole tiliä?",
                                   english: "Don't have an account?"
                               }}/> 
                                </span>
                                <Link className="font-medium" to="/register">
                                <TranslatableText 
                                dictionary={{
                                    finish: "Luo tili",
                                    english: "Create an account"
                                }}
                                /></Link>
                                <Link className="font-medium mt-8" to="/">
                                <TranslatableText 
                                dictionary={{
                                    finish: "Takaisin kojelautaan",
                                    english: "Back to Dashboard"
                                }}/></Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
            </LanguageProvider>
        )
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Login));
