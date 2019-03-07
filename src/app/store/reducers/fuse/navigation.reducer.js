import * as Actions from '../../actions/fuse/index';
import navigationConfig from 'app/fuse-configs/navigationConfig';
import navigationConfig_fi from 'app/fuse-configs/navigationConfig_fi';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const initialState = navigationConfig;
const initialState_fi = navigationConfig_fi;
var test = read_cookie('sitroLang'); 

if(test == "fi"){
    var language = "fi-FI";
}
    else{
       
if(language == "fi-FI"){
    var language = navigator.language;
}

    }


//var language = navigator.language;
if(language == "fi-FI"){
var navigation = function (state = initialState_fi, action) {
    switch ( action.type )
    {
        case Actions.GET_NAVIGATION:
        {
            return [
                ...state
            ];
        }
        case Actions.SET_NAVIGATION:
        {
            return [
                ...action.navigation
            ];
        }
        case Actions.RESET_NAVIGATION:
        {
            return [
                ...initialState
            ];
        }
        default:
        {
            return state;
        }
    }
};
}
else{
var navigation = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_NAVIGATION:
        {
            return [
                ...state
            ];
        }
        case Actions.SET_NAVIGATION:
        {
            return [
                ...action.navigation
            ];
        }
        case Actions.RESET_NAVIGATION:
        {
            return [
                ...initialState
            ];
        }
        default:
        {
            return state;
        }
    }
};
}

export default navigation;
