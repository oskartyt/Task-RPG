const changeData=(userData,dispatch)=>{
    fetch('http://localhost:3002/users/user1',{
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        })
        .catch(err => {
            console.log(err);
            dispatch({type: "DATA_ERROR"})
        });
};

export const changeDataAction=(userData)=>{
    return function(dispatch) {
        return changeData(userData,dispatch);
        // fetch('http://localhost:3002/users/user1',{
        //     method : 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         dispatch({ type: "DATA_LOADED", payload: json });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatch({type: "DATA_ERROR"})
        //     });
    };
};

export const getDataAction=()=>{
    return function(dispatch) {
        return fetch('http://localhost:3002/users/user1')
            .then(response => response.json())
            .then(json => {
                if (
                    json.lastVisitDate.year===new Date().getFullYear() &&
                    json.lastVisitDate.month===new Date().getMonth() &&
                    json.lastVisitDate.day===new Date().getDate()
                ){
                    console.log('no date change');
                    dispatch({ type: "DATA_LOADED", payload: json });
                }else{
                    console.log('date change');
                    let userData=json;
                    userData.lastVisitDate={year:new Date().getFullYear(),month:new Date().getMonth(), day:new Date().getDate()};
                    userData.tasks.uncompletedDaily=userData.tasks.daily;
                    changeData(userData,dispatch);
                }
                dispatch({ type: "DATA_LOADED", payload: json });
            })
            .catch(err => {
                console.log(err);
                dispatch({type: "DATA_ERROR"})
            });
    };
};