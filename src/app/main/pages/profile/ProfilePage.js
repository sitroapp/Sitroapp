import React, {Component} from 'react';
import {withStyles, Avatar, Button, Tab, Tabs, Typography} from '@material-ui/core';
import {FusePageSimple, FuseAnimate} from '@fuse';
import TimelineTab from './tabs/TimelineTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import AboutTab from './tabs/AboutTab';
import { FormattedMessage } from 'react-intl';


const styles = theme => ({
    layoutHeader : {
        height                        : 320,
        minHeight                     : 320,
        [theme.breakpoints.down('md')]: {
            height   : 240,
            minHeight: 240
        }
    }
});

class ProfilePage extends Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render()
    {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <FusePageSimple
                classes={{
                    header : classes.layoutHeader,
                    toolbar: "px-16 sm:px-24"
                }}
                header={
                    <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                            <FuseAnimate animation="transition.expandIn" delay={300}>
                                <Avatar className="w-96 h-96" src="assets/images/avatars/Velazquez.jpg"/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                <Typography className="md:ml-24" variant="h4" color="inherit">John Doe</Typography>
                            </FuseAnimate>
                        </div>

                        <div className="flex items-center justify-end">
                            <Button className="mr-8 normal-case" variant="contained" color="secondary" aria-label="Follow">
                          <FormattedMessage id="follow" defaultMessage="Follow" />
                            </Button>
                            <Button className="normal-case" variant="contained" color="primary" aria-label="Send Message">
                          <FormattedMessage id="sendmessage" defaultMessage="Send Message" />
                            </Button>
                        </div>
                    </div>
                }
                contentToolbar={
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons="off"
                        classes={{
                            root: "h-64 w-full border-b-1"
                        }}
                    >
                        <Tab
                            classes={{
                                root: "h-64"
                            }}
                            label="Timeline"/>
                        <Tab
                            classes={{
                                root: "h-64"
                            }} label="About"/>
                        <Tab
                            classes={{
                                root: "h-64"
                            }} label="Photos & Videos"/>
                    </Tabs>
                }
                content={
                    <div className="p-16 sm:p-24">
                        {value === 0 &&
                        (
                            <TimelineTab/>
                        )}
                        {value === 1 && (
                            <AboutTab/>
                        )}
                        {value === 2 && (
                            <PhotosVideosTab/>
                        )}
                    </div>
                }
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(ProfilePage);
