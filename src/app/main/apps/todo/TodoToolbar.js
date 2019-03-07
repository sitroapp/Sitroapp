import React, {Component} from 'react';
import {Icon, IconButton, MenuItem, FormControl, Select} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './store/actions';
import { FormattedMessage } from 'react-intl';

class TodoToolbar extends Component {

    handleOrderChange = (ev) => {
        this.props.changeOrder(ev.target.value);
    };

    render()
    {
        const {orderBy, orderDescending, toggleOrderDescending} = this.props;

        return (
            <div className="flex justify-between w-full">
                <div className="flex"/>
                <div className="flex items-center">
                    <FormControl className="">
                        <Select
                            value={orderBy}
                            onChange={this.handleOrderChange}
                            displayEmpty
                            name="filter"
                            className=""
                        >
                            <MenuItem value="">
                                <em><FormattedMessage id="order.by" values={{name: 'React.js'}}/></em>
                            </MenuItem>
                            <MenuItem value="startDate"><FormattedMessage id="start.date" values={{name: 'React.js'}}/></MenuItem>
                            <MenuItem value="dueDate"><FormattedMessage id="due.date" values={{name: 'React.js'}}/></MenuItem>
                            <MenuItem value="title"><FormattedMessage id="title" values={{name: 'React.js'}}/></MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton onClick={toggleOrderDescending}>
                        <Icon style={{transform: orderDescending ? 'scaleY(-1)' : 'scaleY(1)'}}>
                            sort
                        </Icon>
                    </IconButton>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        changeOrder          : Actions.changeOrder,
        toggleOrderDescending: Actions.toggleOrderDescending
    }, dispatch);
}

function mapStateToProps({todoApp})
{
    return {
        orderBy        : todoApp.todos.orderBy,
        orderDescending: todoApp.todos.orderDescending
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoToolbar));
