import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css';
import { resolve } from 'styled-jsx/css';

const Movie = async () => {


    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '450fa89f77mshc8a45a803f2742cp1c9594jsnb2a6ad186519',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data);
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.containers}>
                    <h1>Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;