import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUser, getUser } from '../store/action/user.action';


export default function User() {
    const dispatch = useDispatch()
    let state = useSelector((store) => store.user)

    useEffect(() => {
        dispatch(getUser())
        return () => { };
    }, []);


    return (
        <>
            {state.isLoading ? <p>Loading</p> : <></>}
            {state.error != "" ? <p>{state.error}</p> : <></>}
            <ul>

                {state.data.map(ele => <li key={ele.id}>{ele.name}</li>)}
            </ul>

        </>
    )
}
