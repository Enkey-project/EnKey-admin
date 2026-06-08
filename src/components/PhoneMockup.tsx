import React from "react";

interface PhoneMockupProps {
  imageSrc: string; // 핸드폰 안에 들어갈 이미지 경로
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageSrc }) => {
  return (
    // 폰의 외부 테두리와 그림자 효과
    <div className="relative mx-auto border-[6px] sm:border-[8px] border-[#1f2937] rounded-[2rem] sm:rounded-[2.5rem] h-[400px] sm:h-[500px] lg:h-[600px] w-[200px] sm:w-[250px] lg:w-[300px] shadow-xl sm:shadow-2xl overflow-hidden bg-white">
      {/* 폰 상단 스피커 부분 (디테일) */}
      <div className="absolute top-0 inset-x-0 h-4 sm:h-5 lg:h-6 bg-[#1f2937] rounded-b-lg sm:rounded-b-xl w-20 sm:w-24 lg:w-32 mx-auto z-10"></div>

      {/* 실제 앱 화면 이미지 */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={imageSrc}
          alt="App screen"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
