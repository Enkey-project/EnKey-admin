import React from "react";

// 1. TypeScript 환경에서 window 객체 내 gtag 함수를 인식하도록 선언합니다.
declare global {
  interface Window {
    gtag: (type: string, action: string, params?: object) => void;
  }
}

const Hero: React.FC = () => {
  // 2. 카카오톡 클릭 시 실행될 핸들러 함수입니다.
  const handleKakaoClick = () => {
    // GA4 이벤트 전송: 'click_kakaotalk_request'라는 이름으로 이벤트를 기록합니다.
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_kakaotalk_request", {
        event_category: "contact",
        event_label: "hero_banner",
        value: 1,
      });
    }

    // 실제 카카오톡 채널 채팅방으로 이동합니다.
    window.open("http://pf.kakao.com/_Mxoxbxkn/chat", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 메인 타이틀 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight px-2">
          건설 인력,
          <br />
          찾는 데 힘쓰면 언제 일하나
        </h1>

        {/* 서브 타이틀 */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
          전국 어디서든 인력 매칭이 가능한 인력특공대
        </p>

        {/* 설명 문구 */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          지금 바로 카카오톡으로 인력/일자리를 요청해보세요
        </p>

        {/* 앱 다운로드 버튼들 */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </button>
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" />
              <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" />
              <path d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" />
              <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
            </svg>
            Google Play
          </button>
        </div> */}

        {/* 카카오톡 채널 추가 버튼 */}
        <div className="flex justify-center items-center px-4">
          <button
            onClick={handleKakaoClick} // 3. 클릭 시 핸들러 함수 실행
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center sm:justify-start gap-2 sm:gap-3 w-auto max-w-xs"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              fill="#FFEB00"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 5.74 2 10.2c0 3.35 2.18 6.31 5.42 7.89L7.5 21l4.38-2.88c.38.11.77.17 1.12.17 5.52 0 10-3.74 10-8.2S17.52 2 12 2z" />
            </svg>
            <span className="whitespace-nowrap">카카오톡 요청</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
