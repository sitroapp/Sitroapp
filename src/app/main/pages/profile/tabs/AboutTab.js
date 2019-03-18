import React, {Component} from 'react';
import {Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';


class AboutTab extends Component {

    state = {
        general: null,
        work   : null,
        contact: null,
        groups : null,
        friends: null
    };

    componentDidMount()
    {
        axios.get('/api/profile/about').then(res => {
            this.setState(res.data);
        });
    }

    render()
    {
        const {general, work, contact, groups, friends} = this.state;

        return (
            <div className="md:flex max-w-2xl">

                <div className="flex flex-col flex-1 md:pr-32">
                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {general && (
                            <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                        <FormattedMessage id="" defaultMessage="General Information" />    
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="Gender"/> </Typography>
                                        <Typography>{general.gender}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                           <FormattedMessage id="" defaultMessage="Birthday"/> </Typography>
                                        <Typography>{general.birthday}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        < FormattedMessage id="" defaultMessage="Locations"/> </Typography>

                                        {general.locations.map((location) => (
                                            <div className="flex items-center" key={location}>
                                                <Typography>{location}</Typography>
                                                <Icon className="text-16 ml-4" color="action">
                                               <FormattedMessage id="" defaultMessage="location_on" /> </Icon>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="About Me" /> </Typography>
                                        <Typography>{general.about}</Typography>
                                    </div>

                                </CardContent>
                            </Card>
                        )}

                        {work && (
                            <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                         <FormattedMessage id="" defaultMessag="Work" />   
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="ccupation"/> </Typography>
                                        <Typography>{work.occupation}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        < FormattedMessage id="" defaultMessage="Skills"/></Typography>
                                        <Typography>{work.skills}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="Jobs"/></Typography>
                                        <table className="">
                                            <tbody>
                                                {work.jobs.map((job) => (
                                                    <tr key={job.company}>
                                                        <td className="pr-16">
                                                            <Typography>{job.company}</Typography>
                                                        </td>
                                                        <td>
                                                            <Typography color="textSecondary">{job.date}</Typography>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {contact && (
                            <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                          <FormattedMessage id="" defaultMessage="Contact"/>  
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="Address"/></Typography>
                                        <Typography>{contact.address}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        < FormattedMessage id="" defaultMessage="Tel." /></Typography>

                                        {contact.tel.map((tel) => (
                                            <div className="flex items-center" key={tel}>
                                                <Typography>{tel}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="Webiste"/></Typography>

                                        {contact.websites.map((website) => (
                                            <div className="flex items-center" key={website}>
                                                <Typography>{website}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">
                                        <FormattedMessage id="" defaultMessage="Emails"/></Typography>

                                        {contact.emails.map((email) => (
                                            <div className="flex items-center" key={email}>
                                                <Typography>{email}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                </CardContent>
                            </Card>
                        )}
                    </FuseAnimateGroup>
                </div>

                <div className="flex flex-col md:w-320">
                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        <Card className="w-full mb-16">
                            <AppBar position="static" elevation={0}>
                                <Toolbar className="pl-16 pr-8">
                                    <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    <FormattedMessage id="" defaultMessage="Friends"/>  
                                    </Typography>
                                    <Button className="normal-case" color="inherit" size="small">
                                    <FormattedMessage id="" defaultMessage="See 454 more"/> </Button>
                                </Toolbar>
                            </AppBar>
                            <CardContent className="p-0">
                                <List className="p-8">
                                    {friends && friends.map((friend) => (
                                        <img key={friend.id} className="w-64 m-4" src={friend.avatar} alt={friend.name}/>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>

                        <Card className="w-full mb-16">
                            <AppBar position="static" elevation={0}>
                                <Toolbar className="pl-16 pr-8">
                                    <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    <FormattedMessage id="" defaultMessage="Joined Groups"/>  
                                    </Typography>
                                    <Button className="normal-case" color="inherit" size="small">
                                    <FormattedMessage id="" defaultMessage="See 6 more"/></Button>
                                </Toolbar>
                            </AppBar>
                            <CardContent className="p-0">
                                <List className="p-0">
                                    {groups && groups.map((group) => (
                                        <ListItem key={group.id}>
                                            <Avatar alt={group.name}>{group.name[0]}</Avatar>
                                            <ListItemText
                                                primary={(
                                                    <div className="">
                                                        <Typography className="inline font-medium" color="primary" paragraph={false}>
                                                            {group.name}
                                                        </Typography>

                                                        <Typography className="inline ml-4" paragraph={false}>
                                                            {group.category}
                                                        </Typography>
                                                    </div>
                                                )}
                                                secondary={group.members}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton>
                                                    <Icon>more_vert</Icon>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </FuseAnimateGroup>
                </div>
            </div>
        );
    }
}

export default AboutTab;
