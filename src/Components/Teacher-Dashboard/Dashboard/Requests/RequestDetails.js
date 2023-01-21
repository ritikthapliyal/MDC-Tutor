import React from 'react'
import './Requests.css'
import request from '../../../../assets/request.svg'


function RequestDetails({toggleSetDisplay}) {
    return (
        <div>
            <div className='RequestDetails'>
                
                <div className='RequestOverlay-Header'>
                    <div className='RequestOverlay-Header-Left'>
                        <button onClick={toggleSetDisplay}>
                            <svg width="38" height="30" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1773 12.1975H8.68249L14.881 5.99892L13.3064 4.43542L4.43555 13.3063L13.3064 22.1772L14.8699 20.6137L8.68249 14.4152H22.1773V12.1975Z" fill="#4E89FC"/>
                            </svg>
                        </button>
                        <h1>Requests</h1>
                    </div>

                    <div className="RequestOverlay-Header-Right">
                        <button style={{color:"#898B8D"}}>Reject</button>
                        <button style={{backgroundColor:'#4e89fc',color:"white"}}>Approve</button>
                    </div>
                </div>

                <div className='RequestDetails-Body'>
                    <div className='RequestDetails-Body-Left'>
                        
                        <div className='RequestDetails-Body-1'>
                            <h4 style={{ color:'#4e89fc', margin:'0'}}>Grade 10</h4>
                            <p>Subject: <span>Mathematics</span></p>
                            <p>Chapter: <span>Pythagoras theorem</span></p>
                            <p>Topic: <span>Numerical</span></p>
                        </div>

                        <div className='RequestDetails-Body-2'>
                            
                            <h4 style={{color:"#51C485"}}>8/8 criteria Match</h4>
                            
                            <div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Subject</p>
                                </div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Chapter</p>
                                </div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Topic</p>
                                </div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Grade</p>
                                </div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Language</p>
                                </div>
                                <div className='RequestDetails-Criteria'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.78886C0 6.46306 0.941051 4.23252 2.61613 2.58793C4.29122 0.943338 6.56312 0.0194168 8.93204 0.0194168C11.301 0.0194168 13.5729 0.943338 15.2479 2.58793C16.923 4.23252 17.8641 6.46306 17.8641 8.78886C17.8641 11.1147 16.923 13.3452 15.2479 14.9898C13.5729 16.6344 11.301 17.5583 8.93204 17.5583C6.56312 17.5583 4.29122 16.6344 2.61613 14.9898C0.941051 13.3452 0 11.1147 0 8.78886H0ZM8.42232 12.5422L13.5648 6.23052L12.6359 5.5009L8.25082 10.8807L5.14486 8.33986L4.38265 9.23785L8.42232 12.5434V12.5422Z" fill="#51C485"/>
                                    </svg>
                                    <p>Location</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='RequestDetails-Body-3'>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6201 0.737048C12.6875 0.77367 12.7427 0.823207 12.781 0.881286C12.8192 0.939366 12.8392 1.0042 12.8393 1.07007V7.08851C12.8393 7.16864 12.8098 7.24693 12.7545 7.31329C12.6992 7.37965 12.6208 7.43104 12.5292 7.46085L12.3455 7.08851L12.5292 7.46085L12.5263 7.46165L12.5203 7.46406L12.4976 7.47128C12.3678 7.51322 12.2371 7.55334 12.1055 7.59165C11.8448 7.66789 11.4823 7.7706 11.0715 7.87251C10.2656 8.07473 9.21569 8.2922 8.39496 8.2922C7.55842 8.2922 6.86609 8.06751 6.26363 7.87091L6.23597 7.86288C5.60981 7.65826 5.07648 7.48974 4.44439 7.48974C3.75304 7.48974 2.82663 7.67431 2.03751 7.87251C1.68418 7.96198 1.33408 8.05966 0.987642 8.16541V13.107C0.987642 13.2134 0.935614 13.3154 0.843005 13.3907C0.750396 13.4659 0.62479 13.5082 0.493821 13.5082C0.362852 13.5082 0.237246 13.4659 0.144637 13.3907C0.0520275 13.3154 0 13.2134 0 13.107V1.07007C0 0.963655 0.0520275 0.861601 0.144637 0.786356C0.237246 0.711111 0.362852 0.668839 0.493821 0.668839C0.62479 0.668839 0.750396 0.711111 0.843005 0.786356C0.935614 0.861601 0.987642 0.963655 0.987642 1.07007V1.29636C1.21085 1.23297 1.47751 1.15994 1.76788 1.08772C2.57379 0.887107 3.62465 0.668839 4.44439 0.668839C5.27401 0.668839 5.94956 0.89112 6.53918 1.08531L6.58165 1.09976C7.19596 1.30118 7.73126 1.4713 8.39496 1.4713C9.08631 1.4713 10.0127 1.28673 10.8018 1.08852C11.2515 0.974425 11.6959 0.847016 12.1342 0.706554L12.1529 0.700937L12.1569 0.699332H12.1579" fill="#989797"/>
                            </svg>
                            <p>Flag as inappropriate</p>
                        </div>
                    </div>

                    <img src={request}></img>
                    <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="3" fill="black" fill-opacity="0.36"/>
                        <path d="M12 12L22 21.8995" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 47.8995L22 38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.0001 47.8995L38.1006 38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M47.8995 12L38 21.8995" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39 12H48V21" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48 39V48H39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 48H12V39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 21V12H21" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div> 
        </div>
    ) 
}

export default RequestDetails