import React, { useState, useEffect, useRef } from "react";
import PhoneMockup from "../components/PhoneMockup";
// 리뷰 시스템 화면 이미지를 import 하세요.
import reviewMockupImage from "../Feature/review.png";

const ReviewSystem: React.FC = () => {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* 메인 콘텐츠 영역 (PC에서는 이미지 왼쪽, 텍스트 오른쪽) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* [좌측] 이미지 영역 (앱 모컵) */}
          <div
            className={`flex-1 flex justify-center md:justify-start transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <PhoneMockup imageSrc={reviewMockupImage} />
            </div>
          </div>

          {/* [우측] 텍스트 영역 */}
          <div
            className={`flex-1 text-center md:text-left transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b]  leading-[1.3] mb-2 tracking-tight">
              신뢰를 만드는 리뷰 시스템
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-[1.3] mb-6 sm:mb-8 tracking-tight">
              일할수록 빨라지는 매칭
            </h2>
            <div className="space-y-6">
              <p className="text-[#4e5968] text-lg md:text-[20px] font-medium leading-relaxed">
                각 현장에서 받은 리뷰와 평가가 신뢰로 누적되어
                <br className="hidden md:block" />
                경력이 쌓일수록 다음 일자리 매칭이 더 빨라집니다.
              </p>
              <p className="text-[#4e5968] text-lg md:text-[20px] font-medium leading-relaxed">
                좋은 성실함은 데이터로 증명되고, 실력 있는 근로자가
                <br className="hidden md:block" />
                우선적으로 대우받는 환경을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSystem;
