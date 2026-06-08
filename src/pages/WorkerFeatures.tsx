import React, { useState, useEffect, useRef } from "react";
import jobMockupImage from "../Feature/jobMockup.png";

const WorkerFeatures: React.FC = () => {
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
    // 이전 섹션과 배경색을 다르게(예: 흰색 <-> 연회색) 배치하면 더 좋습니다.
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* 1. 섹션 전체 제목 */}
        <h2
  // flex flex-col 사용, gap-2로 줄 간격 조절
  // items-center(중앙정렬) -> md:items-start(왼쪽정렬)로 반응형 정렬 처리
  className={`flex flex-col gap-2 sm:gap-4 items-center md:items-start
    text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#333d4b] leading-tight mb-8 sm:mb-12 lg:mb-20 tracking-tight transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {/* 이제 span에 block이나 mb를 줄 필요가 없습니다 */}
  <span>근로자분들을 위한</span>
  <span>인력특공대 기능</span>
</h2>

        {/* 2. 메인 콘텐츠 영역 (좌우 배치) */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* [좌측] 이미지 영역: 아이콘 + 앱 모컵 */}
          <div className="flex-1 relative flex justify-center md:justify-start">
            {/* 앱 모컵 이미지 */}
            <div className="relative z-0 pl-8 md:pl-0">
              <img
                src={jobMockupImage}
                alt="근로자용 앱 화면"
                // 토스 스타일의 부드러운 그림자와 둥근 모서리 적용
                className="w-[280px] md:w-[320px] h-auto drop-shadow-2xl rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* [우측] 텍스트 영역 */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-tight mb-2 tracking-tight">
              앱 켜면 일이 뜬다.
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333d4b] leading-tight mb-6 sm:mb-8 tracking-tight">
              일 시작하는데 1분!
            </h2>
            <p className="text-[#4e5968] text-lg md:text-xl font-medium leading-relaxed">
              단 몇 번의 터치로 바로 일자리를 요청할 수 있습니다.
              <br className="hidden md:block" />
              복잡한 절차 없이 즉시 매칭되어, 필요한 순간 바로 일할 수 있는
              환경을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkerFeatures;
