/* Maps the page scroll position to a "chapter" value for the 3D scene.
   Chapter k is reached exactly when section k's focus line (data-focus, a fraction of
   its height, default 0.5) crosses the middle of the viewport. Between two sections
   the value moves linearly with scroll, so the film is always tied to the reader. */

export class Director {
  constructor(sections) {
    this.sections = sections;
    this.anchors = [];
    this.measure();
  }

  measure() {
    const vh = window.innerHeight;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
    let prev = -Infinity;
    this.anchors = this.sections.map((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const focus = el.dataset.focus ? parseFloat(el.dataset.focus) : 0.5;
      let a = Math.min(maxScroll, Math.max(0, top + rect.height * focus - vh * 0.5));
      if (a <= prev) a = prev + 1; // keep anchors strictly increasing
      prev = a;
      return a;
    });
  }

  chapterAt(y) {
    const a = this.anchors;
    if (!a.length) return 0;
    if (y <= a[0]) return 0;
    for (let i = 0; i < a.length - 1; i++) {
      if (y < a[i + 1]) return i + (y - a[i]) / (a[i + 1] - a[i]);
    }
    return a.length - 1;
  }

  /* Scroll position at which a chapter lands (for "jump to" links). */
  scrollFor(chapter) {
    const a = this.anchors;
    const i = Math.max(0, Math.min(a.length - 1, Math.floor(chapter)));
    const f = chapter - i;
    return i < a.length - 1 ? a[i] + (a[i + 1] - a[i]) * f : a[i];
  }
}
