export function GlowOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full animate-glow-drift opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(200, 241, 124, 0.10) 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full animate-glow-drift-slow opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(200, 241, 124, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full animate-glow-drift opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(200, 241, 124, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
          animationDuration: '18s',
        }}
      />
    </div>
  );
}
