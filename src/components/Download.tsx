import { useEffect } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/constants";
import { getStoreRedirectUrl } from "../utils/device";
import "../pages/landing-nav.css";

const Download = () => {
  useEffect(() => {
    const target = getStoreRedirectUrl();

    if (target === "play") {
      window.location.href = PLAY_STORE_URL;
    } else if (target === "app") {
      window.location.href = APP_STORE_URL;
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="download-page">
      <div className="download-page__card">
        <div className="download-page__brand">
          <img
            src="/images/Logo.png"
            alt=""
            width={42}
            height={42}
            draggable={false}
          />
          인력특공대
        </div>
        <div className="download-page__spinner" aria-hidden="true" />
        <p className="download-page__title">스토어로 이동 중입니다</p>
        <p className="download-page__desc">잠시만 기다려 주세요</p>
      </div>
    </div>
  );
};

export default Download;
