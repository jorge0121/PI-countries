import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { getByName } from '../Controllers/index';
import style from '../NavBar/NavBar.module.css';
import planet from '../../images/planet.png'
import { AiOutlineSearch } from "react-icons/ai";

function Nav() {
    const dispatch = useDispatch();
    const location = useLocation();

    const error = useSelector(state => state.error)

    function handleChange(e) {
        dispatch(getByName(e.target.value))
    }
        return (
            <div>
                <div className={style.container}>
                    {location.pathname === '/countries' ?
                        <>
                        <Link to='/activity' className={style.activity}>
                                Activity +
                            </Link>
                        
                            
                            <div className={style.search}>
                                <input type="text" placeholder="Country..." onChange={handleChange} />
                                <AiOutlineSearch className={style.submit} />
                            </div>
                        </>
                        : location.pathname === '/activity' ?
                            <div className={style.pathActivity}>
                                <Link to='/countries' >
                                    <img src={planet} className={style.img} alt='image' />
                                </Link>
                                <Link to='/countries' className={style.home}>
                                    Home
                                </Link>
                            </div>
                            :
                            <>
                                <Link to='/countries' >
                                    <img src={planet} className={style.img} alt='image' />
                                </Link>
                                <Link to='/countries' className={style.home}>
                                    Home
                                </Link>
                                <Link to='/activity' className={style.activity}>
                                    Add Activity
                                </Link>
                            </>
                    }
                </div>
                {error !== "" && <p className={style.error}>{error}</p>}
            </div>
        )
    }
    
    export default Nav