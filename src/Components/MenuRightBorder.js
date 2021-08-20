import React from 'react'

const MenuRightBorder = () => {

    return (
            <>
            <React.Fragment>
            < li className="contact-show" >
                <a href="#" className="btn-round- trngl btn-br bg-btn"><i className="fas fa-phone-alt"></i></a>
                <div className="contact-inquiry">
                    <div className="contact-info-">
                        <div className="contct-heading">Niwax Contacts</div>
                        <div className="inquiry-card-nn hrbg">
                            <div className="title-inq-c">FOR HR DEPARTMENT</div>
                            <ul>
                                <li className="mb0"><img src="images/flags/us.svg" alt="us office" className="flags-size"/> <a href="tel:1111111111" >+1-123-456-7890</a>
                                </li>
									 </ul>
								  </div>
                            <div className="inquiry-card-nn">
                                <div className="title-inq-c">FOR SALES DEPARTMENT</div>
                                <ul>
                                    <li><a href="tel:1111111111"><img src="images/flags/us.svg" alt="us office" className="flags-size"/> +1-123-456-7890</a></li>
                                        <li><a href="tel:1111111111"><img src="images/flags/au.svg" alt="australia office" className="flags-size"/> +1-123-456-7890</a></li>
                                            <li><i className="fab fa-skype"></i><a href="skype:niwax.company?call" >niwax.company</a></li>
                                            <li><i className="fas fa-envelope"></i><a href="mailto:info@businessname.com" >info@businessname.com</a></li>
							   </ul>
                            </div>
						 </div>
                        <li><a href="get-quote.html" className="btn-br bg-btn3 btshad-b2 lnk">Request A Quote <span className="circle"></span></a> </li>
					  </div>
            </li>
                <div className="mobile-menu2">
                    <ul className="mob-nav2">
                        <li><a href="#" className="btn-round- trngl btn-br bg-btn btshad-b1" data-toggle="modal" data-target="#menu-popup"><i className="fas fa-envelope-open-text"></i></a></li>
                        <li className="navm-"> <a className="toggle" href="#"><span></span></a></li>
                    </ul>
                </div>
                </React.Fragment>
		</>
    )
}

export default MenuRightBorder
