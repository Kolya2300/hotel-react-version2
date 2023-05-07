import React from 'react';
import styles from  './SearchHotel.module.css'
import imgLocation from '../../../../../../image/img/pin1.png'
import checkIn from '../../../../../../image/img/calendar1.png'
import checkOut from '../../../../../../image/img/calendar2.png'
import person from '../../../../../../image/img/person1.png'
import searchButton from '../../../../../../image/img/search.png'
const SearchHotel = () => {
    return (
        <div>
            <div className={styles.search__inner}>
                <div className={styles.search}>
                    <nav className={styles.search__menu}>
                        <ul className={styles.search__list}>
                            <li className={styles.search__list_item}>
                                <div className={styles.search__list_img}>
                                    <img src={imgLocation} alt="" className={styles.search__list_img}></img>
                                    <button type='button' className={styles.search__list_btn}>Location</button>
                                </div>
                                <input type="text" className={styles.locationInput} placeholder="Enter location" />
                            </li>
                            <li className={styles.search__list_item}>
                                <div className={styles.search__list_img}>
                                    <img src={checkIn} alt="" className={styles.search__list_img} />
                                    <button type="button" className={styles.search__list_btn}>Check in</button>
                                </div>
                                <input type="date" id="myDate" />
                            </li>
                            <li className={styles.search__list_item}>
                                <div className={styles.search__list_img}>
                                    <img src={checkOut} alt="" className={styles.search__list_img} />
                                    <button type="button" className={styles.search__list_btn}>Check out</button>
                                </div>
                                <input type="date" id="myDate2" />
                            </li>
                            <li className={styles.search__list_item}>
                                <div className={styles.search__list_img}>
                                    <img src={person} alt="" className={styles.search__list_img} />
                                    <button type="button" className={styles.search__list_btn}>Rooms for</button>
                                </div>
                                <button className={styles.search__list_result} id="addBtn">
                                    <span data-counter-people>1</span>
                                    <span>guests</span>
                                    <span data-counter-room-bar>1</span>
                                    <span data-counter-room-end>room</span>
                                </button>
                            </li>
                        </ul>
                        <button className={styles.search__menu_btn} type="button" value="Search">
                            <div className={styles.search__area}>
                                <img src={searchButton} alt=""></img>
                                <span>Search...</span>
                            </div>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SearchHotel;
