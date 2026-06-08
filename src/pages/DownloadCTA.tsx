import React, { useState, useEffect, useRef } from "react";
// 캐릭터 이미지들을 import 하세요.
import characterLeft from "../Feature/charBlue.png";
import characterRight from "../Feature/charRed.png";

const DownloadCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    // 마지막 섹션이므로 상하 여백을 충분히(py-32) 줍니다.
    <section ref={sectionRef} className="py-32  bg-[#f9fafb] ">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        {/* 1. 상단 슬로건 */}
        <p
          className={`text-[24px] md:text-[32px] font-bold text-[#333d4b] mb-12 tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          "찾는 데 힘쓰면 언제 일하나"
        </p>

        {/* 2. 메인 메시지 */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-[20px] md:text-[26px] font-bold text-[#4e5968] leading-tight mb-2">
            이젠, 일도 사람도
          </h2>
          <h2 className="text-[20px] md:text-[26px] font-bold text-[#4e5968] leading-tight">
            알아서 찾아주는 <span className="text-[#333d4b]">'인력특공대'</span>
          </h2>
        </div>

        {/* 3. 캐릭터 이미지 영역 */}
        <div
          className={`flex justify-center items-center gap-4 md:gap-8 mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 border border-[#f2f4f6] rounded-xl overflow-hidden bg-[#f9fafb] flex items-center justify-center">
            <img
              src={characterLeft}
              alt="인력특공대 캐릭터 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 border border-[#f2f4f6] rounded-xl overflow-hidden bg-[#f9fafb] flex items-center justify-center">
            <img
              src={characterRight}
              alt="인력특공대 캐릭터 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 4. 하단 설명 및 버튼 */}
        <div
          className={`space-y-10 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[18px] md:text-[22px] font-bold text-[#333d4b] leading-relaxed">
            반복되는 현장의 문제들,
            <br />
            이젠 앱 하나로 해결하세요!
          </p>

          <button className="inline-block px-10 py-4 border-2 border-[#3182f6] text-[#3182f6] hover:bg-[#3182f6] hover:text-white rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95">
            인력특공대 다운로드
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
