import React, { useEffect, useState } from 'react';

const ExUseEffect = () => {
    // useEffect(()=>{
    //     setCount(1000);
    //     document.title="MRU"
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },4000)
    // })
    
    const [user, setUser] = useState([]);  

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => console.log('err'));
    }, []);

    return (
        <div>ExUseEffect
            {
                user.map((user, i) => {
                    return (
                        <React.Fragment key={i}>
                            <h2>{user.name}</h2>
                            <h4>{user.email}</h4>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}

export default ExUseEffect;