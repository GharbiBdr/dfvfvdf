import React from 'react'
import { useSelector } from 'react-redux'
import MainNavigation from './mainNavigation'
import InconitoNavigation from './InconitoNavigation'

const MainContainer = () => {
    const auth = useSelector(state => state.AuthReducer)
    return (
        <>
            {
                auth.token ?
                    <MainNavigation />
                    :
                    <InconitoNavigation />
            }
        </>
    );
}

export default MainContainer;