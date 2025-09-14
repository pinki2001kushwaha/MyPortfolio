import React, { useState, useEffect } from "react";
import "../../style/CookiePolicy.css";

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
         We use cookies to personalize content & improve your experience.{" "}
        <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAccept} className="accept-btn">Accept</button>
        <button onClick={handleReject} className="reject-btn">Reject</button>
      </div>
    </div>
  );
}

export default CookieConsent;
