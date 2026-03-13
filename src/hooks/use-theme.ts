import { useState, useEffect } from 'react';

// 模拟主题数据，跳过 /api/init 接口请求
const mockThemeData = {
  resolvedTheme: 'light', // 或 'dark'
  // 模拟项目需要的其他初始化数据
  models: [],
  user: null,
  config: {}
};

export function useTheme() {
  const [theme, setTheme] = useState(mockThemeData);

  // 核心修改：跳过 /api/init 请求，直接使用模拟数据
  useEffect(() => {
    // 原代码：请求 /api/init 接口
    // fetch('/api/init')
    //   .then(res => res.json())
    //   .then(data => setTheme(data));

    // 现在：直接使用模拟数据，不请求接口
    setTheme(mockThemeData);
  }, []);

  return theme;
}
