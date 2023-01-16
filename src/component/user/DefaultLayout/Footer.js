import React from 'react'
import discord from '../../../assets/images/svg/discord.svg'
import etherscan from '../../../assets/images/svg/etherscan.svg'
import looksrare from '../../../assets/images/svg/looksrare.svg'
import opensea from '../../../assets/images/svg/opensea.svg'
import twitter from '../../../assets/images/svg/twitter.svg'


function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <p className='footer-text'>Non Fungible Library</p>
                    <ul className='footer-list'>
                        <li>
                            <a href='#'>
                                <img src={opensea} alt='icon'></img>
                                <span>Opensea</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={looksrare} alt='icon'></img>
                                <span>LooksRare</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={etherscan} alt='icon'></img>
                                <span>Etherscan</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={discord} alt='icon'></img>
                                <span>Discord</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={twitter} alt='icon'></img>
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer