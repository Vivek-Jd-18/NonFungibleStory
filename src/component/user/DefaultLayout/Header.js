import React from 'react'
import btnImg from '../../../assets/images/svg/home-btn.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='header-row'>
                        <div className='logo-col'>
                            <h6>Non Fungible Story</h6>
                        </div>
                        <div className='last-col'>
                            <a href={"http://www.nonfungiblelibrary.org/"} target={"_blank"} className='home-btn'>
                                <img src={btnImg}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header