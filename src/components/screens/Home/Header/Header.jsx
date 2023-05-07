import React from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles from './Header.modules.css'
const Header = () => {
    return (
        <div>
            <div  className={styles.header}>
                <HeaderTop />
                <HeaderContent />

            </div>
        </div>
    );
};

export default Header;
