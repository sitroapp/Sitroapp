import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

//const cookie_key = 'sitroLang';
//bake_cookie(cookie_key, 'en');
//var test = read_cookie(cookie_key); 
function handleClick1(e) {
    e.preventDefault();
    bake_cookie('sitroLang', 'en');
    var test = read_cookie('sitroLang'); 
    //console.log(test);
    window.location.reload();
  }
  function handleClick2(e) {
    e.preventDefault();
    bake_cookie('sitroLang', 'fi');
    var test = read_cookie('sitroLang'); 
    //console.log(test);
    window.location.reload();
  }


const FlaggLinks = () => {
    return (
        <FuseAnimateGroup
            enter={{
                animation: "transition.expandIn"
            }}
            className="hidden sm:flex items-center"
        >
            <Tooltip title="en" placement="top">
                <IconButton className="w-48 h-39 px-4" component="a"  onClick={handleClick1} rel="noreferrer noopener">
                    <img
                        src="assets/images/flags/England.png"
                        alt="en"
                        width="32"
                    />
                </IconButton>
            </Tooltip>
            <Tooltip title="fi" placement="top">
                <IconButton className="w-48 h-39 px-4" component="a" onClick={handleClick2} rel="noreferrer noopener">
                    <img
                        src="assets/images/flags/Finland.png"
                        alt="fi"
                        width="32"
                    />
                </IconButton>
            </Tooltip>
           
           
        </FuseAnimateGroup>
    );
};

export default FlaggLinks;
