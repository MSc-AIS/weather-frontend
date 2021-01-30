import { Fragment } from 'react';

import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

/**
 * @returns {JSX.Element}
 * @author Stavros Labrinos [stalab at linuxmail.org] on 28/01/21.
 */

const sideDrawer = ( props ) => {
    const attachedClasses = props.open ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close];

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo logoType="appLogo"/>
                </div>
                <nav>
                    <NavigationItems />
                    {/*<NavigationItems isAuthenticated={props.isAuth} />*/}
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;