import React, { Component, Fragment } from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawerToggleHandler = (prevState) => {
        this.setState({showSideDrawer: !prevState.showSideDrawer})
    }

    render() {
        return (
            <Fragment>
                <Toolbar 
                    drawerToggleClicked={this.drawerToggleHandler}
                    closed={this.sideDrawerClosedHandler}
                />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
            </Fragment>
        )
    }
}


export default Layout