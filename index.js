import 'babel-polyfill'
import 'typeface-muli';
import './react-table-defaults';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'app/App';
import {addLocaleData, IntlProvider,injectIntl,FormattedRelative} from 'react-intl';
import {BrowserRouter} from 'react-browser-router';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
//import 'i18lConfig.js';
//import mes_en from 'messages_en.js';
//import mes_fi from 'messages_fi.js';
//import * as mes_fi from 'messages_fi.json';
import mes_fi from 'messages_fi.json';
import mes_en from 'messages_en.json';

let fiLocalData = require('react-intl/locale-data/fi');
let enLocalData = require('react-intl/locale-data/en');

addLocaleData(fiLocalData,enLocalData);
/*
var mes_en = {
    "active.users": "How are your active users trending over time?",
    "AnalyticsDashboard.usersPages": "How many pages users visit?"
    };
    */
/*
    var mes_fi = {
        "active.users": "Mitkä ovat aktiiviset käyttäjätrendit ajan mittaan?",
        "AnalyticsDashboard.usersPages": "Kuinka monella sivulla käyttäjät vierailevat?"
        };
*/
let il8nConfig = {

messages_en: 
    mes_en,
    
    messages_fi: 
        mes_fi
}

/*
let il8nConfig = {
    locale: 'en',
    messages: {
    "active.users": "How are your active users trending over time?"
    }
}
*/

var test = read_cookie('sitroLang'); 

var language = navigator.language;
console.log(test);
if(test == "en"){
    var messages = il8nConfig.messages_en;
}
else{
if(test == "fi"){
    var messages = il8nConfig.messages_fi;
}
    else{
       
if(language == "fi-FI"){
    var messages = il8nConfig.messages_fi;
    console.log(language);
}

else{
    var messages = il8nConfig.messages_en;
  }
    }
}

ReactDOM.render(
<IntlProvider
    locale={language}
    messages={messages}
> 
    <BrowserRouter>
    <App/>
    </BrowserRouter>
</IntlProvider>,
 document.getElementById('root')
 );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
