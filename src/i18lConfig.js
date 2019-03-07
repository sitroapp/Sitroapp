
import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData, IntlProvider,injectIntl,FormattedRelative} from 'react-intl';

let fiLocalData = require('react-intl/locale-data/fi');
let enLocalData = require('react-intl/locale-data/en');

addLocaleData(fiLocalData,enLocalData);

let il8nConfig = {
locale: 'en',
messages: {
"active.users": "How are your active users trending over time?",
"AnalyticsDashboard.usersPages": "How many pages users visit?"
},
messages_en: {
    "active.users": "How are your active users trending over time?",
    "AnalyticsDashboard.usersPages": "How many pages users visit?"
    },
    messages_fi: {
        "active.users": "Mitkä ovat aktiiviset käyttäjätrendit ajan mittaan?",
        "AnalyticsDashboard.usersPages": "Kuinka monella sivulla käyttäjät vierailevat?"
        }
}

