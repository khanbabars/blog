import {GET_ABOUT, ABOUT_ERROR} from '../types'
import axios from 'axios'
import {ABOUT_ME} from '../api'



export const getAboutText = () => async dispatch => {
    
    try{
        const res = await axios.get(ABOUT_ME)
        dispatch( {
            type: GET_ABOUT,
            payload: res.data.items
        })
    }
    catch(e){
        dispatch( {
            type: ABOUT_ERROR,
            payload: console.log(e),
        })
    }

}