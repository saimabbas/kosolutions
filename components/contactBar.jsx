import React from 'react'
import st from '../styles/components/contactBar.module.css'

const contactBar = () => {
    return (
        <div className={st.contactBar}>
            <input type="text" placeholder="Never miss a story" />
            <button>Contact</button>
        </div>
    )
}

export default contactBar
