import React from "react";
import { StoreBadgeLinks } from "../components/StoreBadgeLinks";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center bg-transparent pt-24 sm:pt-28"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight px-2">
          건설 인력,
          <br />
          찾는 데 힘쓰면 언제 일하나
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
          전국 어디서든 인력 매칭이 가능한 인력특공대
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          앱에서 바로 인력·일자리 매칭을 시작해보세요
        </p>

        <StoreBadgeLinks className="store-badges" placement="hero" />
      </div>
    </section>
  );
};

export default Hero;
