import classes from './Header.module.css';
import mealImage from '../../images/buffetMeal.jpg';
import HeaderCartButton from './HeaderCardButton';


const Header = () => {
    return(
        <div>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food"/>
            </div>
            
        </div>
    )
}

export default Header;