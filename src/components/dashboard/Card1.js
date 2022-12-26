import React from 'react'
import './card1.css'
import { IoStatsChartSharp,IoInformationCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import vc from '../../assests/vc.jpg'
function Card1() {
    return (
        <>
            <div className='row card1 mx-auto'>
                <div className='col-lg-4 col-12 text-center mx-auto mt-4'>
                    <h4>Since joined</h4>
                    <h1>Performance <br/>Overview</h1>
                </div>
                <div className='card incard col-lg-4 col-12 mx-auto mt-4'>
                    <div className='card-body'>
                        <div className='fs-2 d-flex justify-content-between'>
                            <IoStatsChartSharp/>
                            <IoInformationCircleSharp/>
                        </div>
                        <h5 className='mt-3'>Total Revenue</h5>
                    </div>
                    <div className='card-body'>
                        <h1>$125,24</h1>
                    </div>
                </div>
                <div className='card incard col-lg-4 col-12 mx-auto mt-4'>
                    <div className='card-body'>
                        <div className='fs-2 d-flex justify-content-between'>
                            <FaShoppingCart/>
                            <IoInformationCircleSharp/>
                        </div>
                        <h5 className='mt-3'>Total Items Orders</h5>
                    </div>
                    <div className='card-body'>
                        <h1>20,234</h1>
                    </div>
                </div>
            </div>


            <div className='card1 mt-5 mx-auto'>
                <div className='d-flex justify-content-between'>
                    <h3 className='fw-bold'>Top Placements</h3>
                    <i className='fs-2'><IoInformationCircleSharp/></i>
                </div>
                <div className='row mx-auto'>
                    <div className='card icards col-lg-5 col-12 mx-auto'>
                        <img src={vc} alt="" />
                        <div className='card-body'>
                            <p className='card-text'>$32,467</p>
                            <h3 className='card-title'>Vaccum Cleaners</h3>
                        </div>
                    </div>

                    <div className='col-lg-7 col-12 mt-4'>
                        <div className='row ms-5'>
                            <div className='card icards2 mx-auto col-lg-5 col-12 mt-4'>
                                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51eZByxqX9L._SL1500_.jpg" className='bimage' alt="" />
                                <div className='card-body'>
                                    <p className='card-text'>$32,467</p>
                                    <h3 className='card-title'>Air Coolers</h3>
                                </div>
                            </div>
                            <div className='card icards2 mx-auto col-lg-5 col-12 mt-4'>
                                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71aMGLfZcLL._SL1420_.jpg" className='bimage' alt="" />
                                <div className='card-body'>
                                    <p className='card-text'>$32,467</p>
                                    <h3 className='card-title'>Portable Chair</h3>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5 ms-5'>
                            <div className='card icards2 col-lg-5 mx-auto mt-4'>
                                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51-3qDmfc2L._SL1100_.jpg" className='bimage' alt="" />
                                <div className='card-body'>
                                    <p className='card-text'>$32,467</p>
                                    <h3 className='card-title'>Cycling Bikes</h3>
                                </div>
                            </div>
                            <div className='card icards2 col-lg-5 mx-auto mt-4'>
                                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SLlWT86ML.jpg" className='b-image' alt="" />
                                <div className='card-body'>
                                    <p className='card-text'>$32,467</p>
                                    <h3 className='card-title'>Pillows</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1
