import {useContext} from 'react';

import CardIcon from '../Cart/CardIcon';
import CartContext from '../../store/card-context';
import classes from './HeaderCartButton.module.css';

const HeaderCardButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CardIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCardButton;
