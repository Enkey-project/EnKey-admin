import React from 'react';
import { Button } from '../components';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            EnKey Admin
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            React + TypeScript + Tailwind + pnpm 기반 관리자 페이지
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" onClick={() => alert('대시보드 페이지로 이동')}>
              대시보드 보기
            </Button>
            <Button variant="secondary" size="lg" onClick={() => alert('설정 페이지로 이동')}>
              설정
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">사용자 관리</h3>
              <p className="text-slate-600 text-sm">
                사용자 계정 생성, 수정, 삭제 및 권한 관리를 할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">시스템 모니터링</h3>
              <p className="text-slate-600 text-sm">
                실시간 시스템 상태 및 성능 메트릭을 확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">데이터 분석</h3>
              <p className="text-slate-600 text-sm">
                다양한 차트와 그래프로 데이터를 시각화하여 분석할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
