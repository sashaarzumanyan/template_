import React from 'react'
import './searchStyle.css'

const SearchPanel = ({ onClose, open }) => {
    return (
        <div className='searchDiv'>
            <button
            onClick={() => onClose(!open)}
                className='closeBtn'
            >
                <span style={{ fontSize: "30px", color: "white" }}>X</span>
                <p style={{ color: "white" }}>close</p>
            </button>
            <div className='inputParent'>
                <input placeholder='Search' className='searchInput' />
            </div>
            <div className='enterBtn'>
                <button>Go</button>
            </div>
        </div>
    )
}

export default SearchPanel