export function readCompleted(): Set<string> {
  const set = new Set<string>();
  try {
    const raw = localStorage.getItem("hjkl:progress");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.completed === "object") {
        for (const key of Object.keys(parsed.completed)) {
          if (parsed.completed[key]) set.add(key);
        }
      }
    }
  } catch {}
  return set;
}

export function isCompleted(id: string): boolean {
  return readCompleted().has(id);
}

export function markComplete(id: string): void {
  try {
    const raw = localStorage.getItem("hjkl:progress");
    const state = raw ? JSON.parse(raw) : { completed: {} };
    state.completed[id] = true;
    state.updatedAt = Date.now();
    localStorage.setItem("hjkl:progress", JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("hjkl:progress", { detail: {} }));
  } catch {}
}

export function markIncomplete(id: string): void {
  try {
    const raw = localStorage.getItem("hjkl:progress");
    if (!raw) return;
    const state = JSON.parse(raw);
    if (state.completed && state.completed[id]) {
      delete state.completed[id];
      state.updatedAt = Date.now();
      localStorage.setItem("hjkl:progress", JSON.stringify(state));
      window.dispatchEvent(new CustomEvent("hjkl:progress", { detail: {} }));
    }
  } catch {}
}
