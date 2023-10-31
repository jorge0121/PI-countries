import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../Controllers/index'
import style from './Card.module.css';

import planet from '../../images/planet.png';
import { useParams } from 'react-router-dom';

function Card(props) {
    const dispatch = useDispatch()
    const details = useSelector(state => state.details) // accedo al estado global 
    const loading = useSelector(state => state.loading)
    let {id}=useParams(); // obtengo id por params
    // solicitud a detail
    useEffect(() => {
        dispatch(getDetail(id));
      }, [id]);
      //console.log(details.activities,"countries details");

      
      // si existen actividades las mapeo
    const activities = details.activities?.map(e => {
        return {
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })
    
    //renderizo la info que contiene una card

    return (
        
            <>
                {loading ? <img src={planet} /> : details !== null ?
                    <div className={style.container}>
                        <div className={style.flag}>
                            <h2>{details.name}</h2>
                            <img src={details.image} alt={details.name} className={style.imagen} />
                        </div>
                        <div className={style.cont}>
                            
                                <div className={style.details}>
                                    <h1>Details</h1>
                                    <div className={style.inf}>
                                    <p>Code:</p>
                                    <h4>{details.id}</h4>
                                    </div>
                                    <div className={style.inf}>
                                    <p>Continent:</p>
                                    <h4> {details.continent}</h4>
                                    </div>
                                    <div className={style.inf}>
                                    <p>Capital:</p>
                                    <h4>{details.capital}</h4>
                                    </div>
                                    <div className={style.inf}>
                                    <p>Population:</p>
                                     <h4>{details.population}</h4>
                                   </div>  
                                   <div className={style.inf}>  
                                    <p>Subregion:</p>
                                    <h4>{details.subregion}</h4>
                                    </div>
                                </div>
                                <div className={style.activities}>
                                    <h1>Activities</h1>
                                   {activities?.length > 0 ? activities?.map(e => {
                                        return (
                                            <div key={e.id}>
                                                <p>Name: {e.name}</p>
                                                <p>Difficulty: {e.difficulty}</p>
                                                <p>Duration: {e.duration} </p>
                                                <p>Season: {e.season}</p>
                                                <hr></hr>
                                            </div>
                                        )
                                    })
                                : <p>Sin Actividades</p>}
                                </div>
                            
                        </div>
                    </div> : <p>Country not found</p>
                }
            </>
    
    )
}

export default Card