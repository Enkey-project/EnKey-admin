import React, { useEffect, useRef, useState } from "react";
import PhoneMockup from "../components/PhoneMockup";
// 임금 보장 관련 아이콘 이미지를 import 하세요.
import payment from "../Feature/payment.png";

const DailyPayment: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 bg-white">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-tight mb-6 sm:mb-8 tracking-tight">
              일당 당일 입금 보장
            </h2>
            <p className="text-[#4e5968] text-lg md:text-[22px] font-medium leading-relaxed">
              인력특공대는 일이 끝난 후 반드시 현장에서
              <br className="hidden md:block" />
              일당 당일 입금을 원칙으로 합니다!
            </p>
            <p className="mt-6 text-[#8b95a1] text-base md:text-lg">
              땀 흘려 일한 대가가 미뤄지지 않도록,
              <br className="hidden md:block" />
              정직한 정산 문화를 만들어갑니다.
            </p>
          </div>

          {/* [우측] 이미지 영역 (아이콘) */}
          <div
            className={`flex-1 flex justify-center md:justify-end order-1 md:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <PhoneMockup imageSrc={payment} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyPayment;
