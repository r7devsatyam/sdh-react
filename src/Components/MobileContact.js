import React from "react";

const MobileContact = () => {
  return (
    <div>
      {/* <!--Mobile contact--> */}
      <div className="popup-modal1">
        <div className="modal" id="menu-popup">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="common-heading">
                  <h4 className="mt0 mb0">Write a Message</h4>
                </div>
                <button type="button" className="closes" data-dismiss="modal">
                  &times;
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="form-block fdgn2 mt10 mb10">
                  <form action="#" method="post" name="feedback-form">
                    <div className="fieldsets row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="number"
                          placeholder="Contact Number"
                          name="phone"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea placeholder="Message" name="message" />
                      </div>
                    </div>
                    <div className="fieldsets mt20 pb20">
                      <button
                        type="submit"
                        name="submit"
                        className="lnk btn-main bg-btn"
                        data-dismiss="modal"
                      >
                        Submit <i className="fas fa-chevron-right fa-icon" />
                        <span className="circle" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
