import React from 'react'

function Home({user,setUser}) {
    const handleClick = (e) => {
        const newRole = e.target.value;
        fetch("http://127.0.0.1:5000/update",{
            method: "patch",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: user.email,
                role: newRole,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('updated role');
            setUser({
                ...user,
                role:newRole,
            })
        })
        .catch = (err) => {
            console.error(err);
        }
        
    }
    return (
        <div className="container">
            <button className="buttons" value="admin" onClick={(e) => handleClick(e)}>
                AccessRedButton
            </button>
            <button className="buttons" value="customer" onClick={(e) => handleClick(e)}>
                AccessGreenButton
            </button> 
            <button className="buttons" id="green" ></button>
            {user.role === 'admin' ? <button className="buttons" id="red" ></button> : undefined}
        </div>
    )
}

export default Home
