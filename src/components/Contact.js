import React, { useState } from 'react';
import axios from "axios";

const MyForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/2a24ba85-11ca-4b8a-9bf3-4bdcf424b823",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
    <form onSubmit={handleOnSubmit}>
        <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required="required"
                />
            </div>
            <div className="6u 12u$(xsmall)">
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required="required"
                />
            </div>
            <div className="12u">
                <textarea
                name="message"
                id="message"
                placeholder="Message"
                required="required"
                rows="4"
                ></textarea>
            </div>
        </div>
        <ul className="actions" style={{ marginTop: 30 }}>
        <li>
            <input type="submit" disabled={serverState.submitting} value="Send Message" />
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
    )}
        </li>
        </ul>
    </form>     
    );
  };
  
  export default MyForm;