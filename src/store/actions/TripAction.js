import {
    startTripHandler,
    updateTripHandler,
    endTripHandler
} from '../services/tripServices';
import { offline } from '@redux-offline/redux-offline';


export const startTNewrip = (data) =>{
    return (dispatch) =>{
        startTripHandler();
        dispatch({
            type:'START_TRIP',
            payload:data
        })
    }
}

export const updateTrip = (data) =>{
    console.log("Update Final Data ------>",data);
    return (dispatch) =>{
        updateTripHandler();
        dispatch({
            type:'UPDATE_TRIP',
            payload:data
        })
    }
}

export const updateTripp = data => dispatch =>{
    console.log("API Final Data ------>",data);
    dispatch({
        type:'UPDATE_TRIP',
        payload:data,
    meta: {
        offline: {
         effect: { 
            url: 'https://guk63dkzyi.us-east-1.awsapprunner.com/api/app/commfor/trip', 
            //body: `userId=${userId}&content=${content}&status=${status}`
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data) 
        },
       commit: { type: 'ENABLE_LOADING' },
       rollback: { type: 'DISABLE_LOADING' },
    }
}
})
}
export const resumeTrip = data => dispatch =>{

    dispatch({
        type:'UPDATE_TRIP',
        payload:data,
    meta: {
        offline: {
        effect: { url: 'http://localhost:3333/api/dataResume', method: 'POST',json:{data}},
       commit: { type: 'ENABLE_LOADING' },
       rollback: { type: 'DISABLE_LOADING' },
    }
}
})
}

export const endTheTrip = (data) =>{
    return (dispatch) =>{
        endTripHandler();
        dispatch({
            type:'END_TRIP',
            payload:data
        })
    }
}
export const resetTrip = () =>{
    return (dispatch) =>{
        dispatch({
            type:'RESET_TRIP'
        })
    }
}

export const updateDistance = (data) =>{
    console.log(data,"updated distance data");
    return(dispatch)=>{
        dispatch({
            type:'UPDATE_DISTANCE',
            payload:data
        })
    }
} 
export const updateCoins = (data) =>{
    console.log(data,"updated coins");
    return(dispatch)=>{
        dispatch({
            type:'UPDATE_COINS',
            payload:data
        })
    }
} 