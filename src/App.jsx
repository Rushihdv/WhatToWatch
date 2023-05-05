import { useState } from 'react'
import s from './style.module.css'
import { TVSHOWAPI, BACKDROP_BASE_URL } from './tv-show'
import { useEffect } from 'react';
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail';
import { Logo } from './components/Logo/Logo';
import logoImg from "./assests/images/logo.png"
// import { TvShowList } from "./components/TvShowList/TvShowList"
import { TvShows } from './components/TVShows/TvShows';
import { SearchBar } from './components/SearchBar/SearchBar';


export function App() {

    const [currShow, setShow] = useState();
    const [recommendations, setRecommendations] = useState([]);

    async function fetchPopulars() {
        try {


            const popularShow = await TVSHOWAPI.fetchPopulars();
            if (popularShow.length > 0) {
                setShow(popularShow[0])
            }
        } catch (error) {
            alert("Something went wrong")
        }
    }

    async function fetchRecommendations(tvShowID) {
        try {


            const recommend = await TVSHOWAPI.fetchRecommendations(tvShowID);

            if (recommend.length > 0) {
                setRecommendations(recommend.slice(0, 10));
            }
        } catch (error) {
            alert("Something went wrong")
        }
    }

    async function fetchByTitle(title) {
        try {

            const search = await TVSHOWAPI.fetchByTitle(title);

            if (search.length > 0) {
                setShow(search[0]);
            }
        } catch (error) {
            alert("Something went wrong")
        }
    }

    function updateShow(tvShow) {
        setShow(tvShow)
    }

    useEffect(() => {
        fetchPopulars();

    }, []);

    useEffect(() => {
        if (currShow) {
            fetchRecommendations(currShow.id);
            console.log(currShow.id)
        }

    }, [currShow]);


    return (

        <div
            className={s.main_container}
            style={{
                background: currShow
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${currShow.backdrop_path}") no-repeat center / cover`
                    : "black",
            }}
        >

            <div className={s.header} >
                <div className='row'>
                    <div className='col-4'>
                        < Logo img={logoImg} title={"WatoWatch"} subtitle={"Find what you like!"} />

                    </div>
                    <div className='col-md-12 col-lg-4'>
                        < SearchBar onSubmit={fetchByTitle} />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_details}>
                {currShow && <TVShowDetail tvShow={currShow} />
                }
            </div>

            <div className={s.recommended_shows}>
                {currShow && <TvShows onClickItem={updateShow} tvShowList={recommendations} />}
            </div>
        </div>
    )
}

// (
//     <>                  < TvShowList onClick={() => {
//         console.log("clicked me")
//     }} tvShow={currShow} />
//         < TvShowList onClick={() => {
//             console.log("clicked me")
//         }} tvShow={currShow} />
//         < TvShowList onClick={() => {
//             console.log("clicked me")
//         }} tvShow={currShow} />

//     </>
// )