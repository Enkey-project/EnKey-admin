import { Link } from "react-router-dom";
import { getAppDownloadNavHref } from "../utils/device";

export function LandingNav() {
  const downloadHref = getAppDownloadNavHref();

  return (
    <nav className="nav" id="nav">
      <div className="nav__inner">
        <a href="#top" className="brand">
          <img
            src="/images/Logo.png"
            alt=""
            className="brand__logo"
            width={42}
            height={42}
            draggable={false}
          />
          <span>인력특공대</span>
        </a>
        <div className="nav__links">
          <a href="#worker">근로자</a>
          <a href="#employer">구인자</a>
          <a href="#faq">자주 묻는 질문</a>
        </div>
        {downloadHref === "/download" ? (
          <Link to="/download" className="nav__cta">
            앱 다운로드 →
          </Link>
        ) : (
          <a href="#cta" className="nav__cta">
            앱 다운로드 →
          </a>
        )}
      </div>
    </nav>
  );
}
