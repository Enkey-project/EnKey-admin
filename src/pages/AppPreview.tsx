import React, { useEffect, useRef, useState } from "react";
import PhoneMockup from "../components/PhoneMockup"; // 만든 컴포넌트 불러오기
import jobTypeImage from "../Feature/jobType.png";
import rangeImage from "../Feature/range.png";

const AppPreview: React.FC = () => {
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
        threshold: 0.2, // 요소의 10%가 보일 때 트리거
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
    <div className="bg-white min-h-screen">
      {/* 섹션 1: 구직 활동 소개 */}
      <section
        ref={sectionRef}
        className="max-w-[1100px] mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16"
      >
        <div
          className={`flex-1 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap lg:text-[40px] font-bold text-[#333d4b] leading-tight mb-3 sm:mb-4 lg:mb-6">
            구직활동? 간단하게!
          </h2>
          <h2 className=" whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#333d4b] leading-tight mb-6">
            4번 클릭만으로  구직 종료!
          </h2>
        </div>

        {/* 핸드폰 컴포넌트들 */}
        <div
          className={`flex-1 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <PhoneMockup imageSrc={rangeImage} />
          <PhoneMockup imageSrc={jobTypeImage} />
        </div>
      </section>
    </div>
  );
};

export default AppPreview;
