import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // 创建路由跳转实例
  const navigate = useNavigate();

  // 核心逻辑：组件加载后立即跳转到聊天主页面（/）
  useEffect(() => {
    navigate('/'); // 强制跳转到根路由（聊天页）
  }, [navigate]);

  // 保留原有UI（就算显示也会立刻跳转，不影响）
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">登录以继续</h1>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => {}} // 空点击事件，不影响跳转
          >
            使用 GitHub 账号登录
          </button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={() => {}} // 空点击事件，不影响跳转
          >
            使用 Google 账号登录
          </button>
        </div>
      </div>
    </div>
  );
}
