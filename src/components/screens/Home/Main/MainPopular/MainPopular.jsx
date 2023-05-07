import React from 'react';
import styles from './MainPopular.module.css'
import Page from '../../../PageHotel/Page'
import './js/star-ratings'
import './star.css'
import { hotels } from '../../allHotels/hotelsArray';
import ShowAllHotels from './ShowAllHotels';
const MainPopular = () => {
    return (
        <div>
            <section className={styles.popular} id="popular">
                <div className={styles.container}>
                    <h1 className={styles.popular__title}>Our most popular Hotels</h1>
                    <div className={styles.popular__box}>
                        <p className={styles.popular__box_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <ShowAllHotels />
                    </div>
                    <div className={styles.hotel__card}>
                        {hotels.filter(hotel => hotel.ratingHotel >=5).slice(0,3).map(hotel =>{
                            return (
                                <div className={styles.hotel__card_item}>
                                    <img src={hotel.imgHotel} alt="" className={styles.hotel__card_img}/>
                                    <a href={hotel.locationHotelURL} className={styles.hotel__card_location}
                                       title="Google maps link">{hotel.locationHotel}</a>
                                    <p className={styles.hotel__card_name_hotel}><a href={Page}>{hotel.nameHotel}</a>
                                    </p>
                                    <div className={styles.hotel__starts}>
                                        <p className={styles.hotel__card_price}>{new Intl.NumberFormat('ru-RU', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                        }).format(hotel.priceHotelPerOneNight)} Par Night</p>
                                        <div className="stars"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPopular;
