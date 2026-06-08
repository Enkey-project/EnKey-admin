import { trackStoreClick, type StorePlacement } from "../utils/analytics";
import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/constants";

type StoreBadgeLinksProps = {
  /** 래퍼: `store-badges`, `store-badges fade-up fade-up--d3`, `final-cta__store` 등 */
  className?: string;
  /** GA4에서 클릭 위치 구분용 (hero / final_cta) */
  placement: StorePlacement;
  appHref?: string;
  playHref?: string;
};

export function StoreBadgeLinks({
  className = "store-badges",
  placement,
  appHref = APP_STORE_URL,
  playHref = PLAY_STORE_URL,
}: StoreBadgeLinksProps) {
  return (
    <div className={className}>
      <a
        href={appHref}
        className="store-badge"
        aria-label="App Store 다운로드"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackStoreClick("app_store", placement)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <span className="store-badge__text">
          <span className="store-badge__small">Download on the</span>
          <span className="store-badge__large">App Store</span>
        </span>
      </a>
      <a
        href={playHref}
        className="store-badge"
        aria-label="Google Play 다운로드"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackStoreClick("play_store", placement)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.808 1.626L15.146 12l2.552-2.492zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
        </svg>
        <span className="store-badge__text">
          <span className="store-badge__small">GET IT ON</span>
          <span className="store-badge__large">Google Play</span>
        </span>
      </a>
    </div>
  );
}
