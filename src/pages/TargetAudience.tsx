import React, { useState, useEffect, useRef } from "react";
import waitingImage from "../Feature/waiting.png";
import dailyWageImage from "../Feature/dailyWage.png";
import stressImage from "../Feature/stress.png";

const TargetAudience: React.FC = () => {
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
  // 1. 데이터를 배열로 분리하여 관리 (유지보수 용이)
  const targets = [
    {
      description: "일이 없어 새벽에 대기하며\n시간을 보내는 분",
      imageSrc: waitingImage,
    },
    {
      description: "임금이 당일 입금되지 않아서\n 힘들어 하시는 분",
      imageSrc: dailyWageImage,
    },
    {
      description: "일자리 구하는 것에\n 스트레스를 받으시는 분",
      imageSrc: stressImage,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#f9fafb]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* 제목 영역 */}
        <h2
          className={`text-[32px] md:text-[40px] font-bold text-[#333d4b] leading-tight mb-20 tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          어떤 분들이 쓰면
          <br />
          좋을까요?
        </h2>

        {/* 카드 그리드 영역 */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {targets.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* 상단 문구 */}
              <p className="text-[16px] md:text-[18px] font-semibold text-[#333d4b] leading-snug mb-8 min-h-[3rem] whitespace-pre-line">
                {item.description}
              </p>

              {/* 하단 이미지 박스 */}
              <div className="aspect-[16/9] w-full bg-white border border-[#e5e8eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.imageSrc}
                  alt={item.description}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
