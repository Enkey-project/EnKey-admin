import React, { useState, useEffect, useRef } from "react";
import PhoneMockup from "../components/PhoneMockup";
// 앱 화면 이미지를 import 하세요.
import matchingMockupImage from "../Feature/jobType.png";

const MatchingBenefit: React.FC = () => {
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
    // 배경색을 연회색(#f9fafb)으로 설정하여 이전 섹션과 대비를 줍니다.
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* 메인 콘텐츠 영역 (PC에서는 텍스트 왼쪽, 이미지 오른쪽) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* [좌측] 텍스트 영역 */}
          <div
            className={`flex-1 text-center md:text-left order-2 md:order-1 mt-12 md:mt-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-tight mb-2 tracking-tight">
              장비·경력 등록으로
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-tight mb-6 sm:mb-8 tracking-tight">
              더 잘 맞는 매칭
            </h2>
            <div className="space-y-6">
              <p className="text-[#4e5968] text-lg md:text-[20px] font-medium leading-relaxed">
                사용할 수 있는 장비나 보유 경력을 등록하면 경험과 숙련도에 맞는
                일자리를 자동으로 추천받을 수 있습니다.
              </p>
              <p className="text-[#4e5968] text-lg md:text-[20px] font-medium leading-relaxed">
                단순한 일 매칭을 넘어, 실제 현장에서 쌓은 기술이 더 나은 기회로
                이어질 수 있도록 돕습니다.
              </p>
            </div>
          </div>

          {/* [우측] 이미지 영역 (앱 모컵) */}
          <div
            className={`flex-1 flex justify-center md:justify-end order-1 md:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <PhoneMockup imageSrc={matchingMockupImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingBenefit;
