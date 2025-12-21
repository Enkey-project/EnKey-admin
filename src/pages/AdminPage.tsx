import React, { useState } from 'react';

interface WorkerData {
  id: number;
  name: string;
  birthDate: string;
  phone: string;
  date: string;
  checkIn: string;
  checkOut: string;
  isSelected: boolean;
}

const sampleData: WorkerData[] = [
  {
    id: 1,
    name: '김정우',
    birthDate: '2001.04.30',
    phone: '010-9022-3526',
    date: '12.20 (토)',
    checkIn: '06:52',
    checkOut: '18:10',
    isSelected: false,
  },
  {
    id: 2,
    name: '유용석',
    birthDate: '2001.11.11',
    phone: '010-1111-1111',
    date: '12.20 (토)',
    checkIn: '06:58',
    checkOut: '18:05',
    isSelected: false,
  },
];

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
        <div className="px-4 py-3 text-sm font-medium text-white bg-[#0064FF] rounded-lg cursor-pointer">
          근로자 기록
        </div>
        <div
          className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => onPageChange('site-info')}
        >
          현장 정보
        </div>
        <div className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          설정
        </div>
      </div>
    </nav>
  </aside>
);

const Dashboard: React.FC<{ data: WorkerData[]; onSelectAll: (checked: boolean) => void; onSelectItem: (id: number, checked: boolean) => void }> = ({
  data,
  onSelectAll,
  onSelectItem
}) => {
  const allSelected = data.every(item => item.isSelected);

  return (
    <main className="flex-1 bg-[#f2f4f6] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">근로자 기록</h2>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="w-4 h-4 text-[#0064FF] bg-gray-100 border-gray-300 rounded focus:ring-[#0064FF] focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">전체선택</span>
              </label>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                검색 필터
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                선택 항목 삭제
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 w-16">선택</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">근로자 정보</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">문서 관리</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">출/퇴근 기록</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((worker) => (
                  <tr key={worker.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={worker.isSelected}
                        onChange={(e) => onSelectItem(worker.id, e.target.checked)}
                        className="w-4 h-4 text-[#0064FF] bg-gray-100 border-gray-300 rounded focus:ring-[#0064FF] focus:ring-2"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-medium text-gray-900">{worker.name}</span>
                          <span className="text-gray-500">|</span>
                          <span className="text-gray-700">{worker.birthDate}</span>
                          <span className="text-gray-500">|</span>
                          <span className="text-gray-700">{worker.phone}</span>
                          <span className="text-gray-500">|</span>
                          <span className="text-gray-700">{worker.date}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          생년월일: {worker.birthDate} | 연락처: {worker.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium text-[#0064FF] bg-[#0064FF]/10 rounded hover:bg-[#0064FF]/20 transition-colors">
                          근로계약서 출력
                        </button>
                        <button className="px-3 py-1 text-xs font-medium text-[#0064FF] bg-[#0064FF]/10 rounded hover:bg-[#0064FF]/20 transition-colors">
                          건강정보 출력
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">출근</span>
                          <span className="font-medium text-gray-900">{worker.checkIn}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">퇴근</span>
                          <span className="font-medium text-gray-900">{worker.checkOut}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export const AdminPage: React.FC<{ onPageChange: (page: 'worker-records' | 'site-info') => void }> = ({ onPageChange }) => {
  const [workerData, setWorkerData] = useState<WorkerData[]>(sampleData);

  const handleSelectAll = (checked: boolean) => {
    setWorkerData(prev => prev.map(item => ({ ...item, isSelected: checked })));
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    setWorkerData(prev => prev.map(item =>
      item.id === id ? { ...item, isSelected: checked } : item
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar onPageChange={onPageChange} />
        <Dashboard
          data={workerData}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>
    </div>
  );
};
