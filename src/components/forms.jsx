import React, { useState } from "react";

export default function Form() {
    const [userName, setUsername] = useState('')
    const [userDetails, setUserDetails] = useState('')

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleUserDetailsChange = (e) => {
        setUserDetails(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" name="Username" value={userName} onChange={handleChange} />
                {/* {display the name in the input field on the screen once the user type in the input field} */}
                <p>username is: {userName}</p>
                <textarea name="User-Details" cols="30" row="10" value={userDetails} onChange={handleUserDetailsChange}></textarea>
                {/* {display the user details in the textarea on the screen once the user type in the input field} */}
                <p>user Details are: {userDetails}</p>
            </form>
        </div>

    )
}