import React from 'react'

const Message = ({count}) => {
    return (
        <div>
            { count>10 ? (

            <p>no more quantity</p>

            ) : 

            ""



            }
        </div>
    )
}

export default Message
