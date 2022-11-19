import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../../redux/apiRequest';

function Home() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        getUserLogin(user?.access_token, dispatch);
    }, [])
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;