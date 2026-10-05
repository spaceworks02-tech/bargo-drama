// 시청 기록(이 브라우저에만 저장) — 이어보기·진행 막대용
window.DramaProgress = (function () {
  const KEY = 'cookcamDramaProgress';
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { eps: {} }; } catch (e) { return { eps: {} }; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }
  return {
    get(id) { return load().eps[id] || null; },
    set(id, time, duration) {
      const d = load();
      d.eps[id] = { time: Math.floor(time), duration: Math.floor(duration || 0) };
      d.last = id;
      save(d);
    },
    touch(id) { const d = load(); d.last = id; save(d); },
    last() { const d = load(); return d.last ? { id: d.last, ...(d.eps[d.last] || {}) } : null; },
    percent(id) {
      const p = load().eps[id];
      return p && p.duration ? Math.min(100, Math.round(p.time / p.duration * 100)) : 0;
    },
  };
})();
