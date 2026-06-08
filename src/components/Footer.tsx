import React from "react";

const Footer: React.FC = () => {
  return (
    // [수정] 배경색을 #f9fafb 보다 한 단계 진한 #f2f4f6로 변경했습니다.
    <footer className="bg-[#f2f4f6] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* 상단 정보 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#333d4b]">
              인력특공대
            </h3>
            <p className="text-[#4e5968] text-sm leading-relaxed">
              현장 일자리 매칭의 새로운 기준을 제시합니다.
              <br />
              일하는 사람들과 현장을 연결하는 스마트 솔루션입니다.
            </p>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#333d4b]">
              연락처
            </h4>
            <div className="space-y-2 text-sm text-[#4e5968]">
              <p className="flex items-center">
                <span className="mr-2 opacity-70">📧</span>
                <span>barojob0.naver.com</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 opacity-70">📞</span>
                <span>010-2845-3526</span>
              </p>
            </div>
          </div>

          {/* 회사 상세 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#333d4b]">
              회사 정보
            </h4>
            <div className="space-y-2 text-sm text-[#4e5968]">
              <p>
                <span className="text-[#8b95a1] mr-1">상호명:</span> 인력특공대
              </p>
              <p>
                <span className="text-[#8b95a1] mr-1">대표:</span> 김정우
              </p>
              <p>
                <span className="text-[#8b95a1] mr-1">사업자등록번호:</span>{" "}
                240-93-02404
              </p>
              <p>
                <span className="text-[#8b95a1] mr-1">
                  직업소개사업신고번호:
                </span>{" "}
                2025-5610018-14-5-00010
              </p>
              <p>
                <span className="text-[#8b95a1] mr-1">개인정보관리책임자:</span>{" "}
                김정우
              </p>
              <p>
                <span className="text-[#8b95a1] mr-1">주소:</span> 경기 용인시
                수지구 죽전로 152번길, 글로컬 산학협력관 202호
              </p>
            </div>
          </div>
        </div>

        {/* 하단 저작권 및 링크 */}
        {/* [수정] 배경이 진해졌으므로 구분선 색상도 #e5e8eb에서 #d1d6db로 살짝 더 진하게 조정했습니다. */}
        <div className="border-t border-[#d1d6db] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8b95a1] text-sm mb-4 md:mb-0">
              © 2024 인력특공대. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-[#4e5968] hover:text-[#333d4b] transition-colors"
              >
                이용약관
              </a>
              <a
                href="#"
                className="text-[#4e5968] hover:text-[#333d4b] font-bold transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-[#4e5968] hover:text-[#333d4b] transition-colors"
              >
                고객센터
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
