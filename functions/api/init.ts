export async function onRequestGet() {
  // 返回合法的 JSON 初始化数据，解决 404 和 JSON 解析错误
  return new Response(
    JSON.stringify({
      success: true,
      data: {
        resolvedTheme: "light",
        models: [],
        user: null,
        config: {}
      }
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
