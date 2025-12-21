import React from 'react';

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
    <h1 className="text-xl font-semibold text-gray-900">관리자 페이지</h1>
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
      관리자 로그아웃
    </button>
  </header>
);

const Sidebar: React.FC<{ onPageChange: (page: 'worker-records' | 'site-info') => void }> = ({ onPageChange }) => (
  <aside className="w-64 bg-white border-r border-gray-200">
    <nav className="p-6">
      <div className="space-y-2">
        <div className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          대시보드
        </div>
        <div
          className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => onPageChange('worker-records')}
        >
          근로자 기록
        </div>
        <div className="px-4 py-3 text-sm font-medium text-white bg-[#0064FF] rounded-lg cursor-pointer">
          현장 정보
        </div>
        <div className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          설정
        </div>
      </div>
    </nav>
  </aside>
);

const CompanyBasicInfo: React.FC = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm relative">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900">회사 기본 정보</h2>
      <button className="px-4 py-2 text-sm font-medium text-[#4e5968] bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
        수정하기
      </button>
    </div>

    <div className="space-y-6">
      <div className="flex items-center">
        <label className="w-24 text-sm font-medium text-gray-600">상호명</label>
        <span className="text-gray-900">00건설</span>
      </div>

      <div className="flex items-center">
        <label className="w-24 text-sm font-medium text-gray-600">회사 주소</label>
        <span className="text-gray-900">용인시 수지구 죽전로 152, 202호</span>
      </div>

      <div className="flex items-center">
        <label className="w-24 text-sm font-medium text-gray-600">회사 번호</label>
        <span className="text-gray-900">010-2845-3526</span>
      </div>
    </div>
  </div>
);

const FieldInfo: React.FC = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm relative">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900">현장 정보</h2>
      <button className="px-4 py-2 text-sm font-medium text-[#4e5968] bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
        수정하기
      </button>
    </div>

    <div className="space-y-6">
      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">근무 내용</label>
        <span className="text-gray-500">(예: 건설 현장 자재 정리 및 보조)</span>
      </div>

      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">근무 장소</label>
        <span className="text-gray-500">(예: 경기 용인시 수지구 신축 현장)</span>
      </div>

      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">근로 시간</label>
        <span className="text-gray-500">(예: 08:00 ~ 17:00)</span>
      </div>

      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">임금</label>
        <span className="text-gray-500">(예: 일급 150,000원)</span>
      </div>

      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">지급일</label>
        <span className="text-gray-500">(예: 매주 금요일)</span>
      </div>

      <div className="flex items-start">
        <label className="w-24 text-sm font-medium text-gray-600 mt-1">지급방법</label>
        <span className="text-gray-500">(예: 계좌이체)</span>
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => (
  <main className="flex-1 bg-[#f2f4f6] p-8">
    <div className="max-w-7xl mx-auto">
      <div className="space-y-8">
        <CompanyBasicInfo />
        <FieldInfo />
      </div>
    </div>
  </main>
);

export const SiteInfoPage: React.FC<{ onPageChange: (page: 'worker-records' | 'site-info') => void }> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar onPageChange={onPageChange} />
        <Dashboard />
      </div>
    </div>
  );
};
