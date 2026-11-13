/* =========================================================
   共用互動：全部依 lessons.js 自動產生
   - 首頁：作品卡片、技巧篩選
   - 作品頁：工具與技巧標籤、本頁目錄、上一篇／下一篇
   - 全站：回到頂端、截圖點擊放大
   一般新增作品時「不需要」修改這個檔案
   ========================================================= */
(function () {
  var LESSONS = window.LESSONS || [];
  var SKILLS = window.SKILLS || {};
  var TOOLS = window.TOOLS || {};
  var root = document.body.getAttribute("data-root") || "";   // 作品頁為 "../"

  var NEW_BADGE = ' <span class="badge-new" title="由 AI 依 CLAUDE.md 新增">New</span>';
  function markH1(isNew) {
    var h1 = document.querySelector(".lesson-hero h1");
    if (isNew && h1 && !h1.querySelector(".badge-new")) h1.insertAdjacentHTML("beforeend", NEW_BADGE);
  }

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function md(date) { var p = date.split("-"); return p[1] + "/" + p[2]; }
  function skillName(k) { return SKILLS[k] ? SKILLS[k].name : k; }

  /* ---------- 首頁：作品卡片＋技巧篩選 ---------- */
  var grid = $("lesson-grid");
  if (grid) {
    var filter = new URLSearchParams(location.search).get("skill");

    function card(l) {
      return '<a class="lesson-card" href="' + root + l.url + '">' +
        '<div class="cover"><img src="' + root + l.cover + '" alt="' + esc(l.title) + ' 的畫面" loading="lazy"></div>' +
        '<div class="body">' +
        '<div class="no">第 ' + l.no + ' 堂 · ' + md(l.date) + ' · ' + esc(l.course) + '</div>' +
        '<h3>' + esc(l.title) + (l.isNew ? NEW_BADGE : '') + '</h3>' +
        '<p>' + esc(l.summary) + '</p>' +
        '<div class="tags">' + l.skills.map(function (s) { return '<span class="tag">' + esc(skillName(s)) + '</span>'; }).join("") + '</div>' +
        '</div></a>';
    }

    function render() {
      var list = filter ? LESSONS.filter(function (l) { return l.skills.indexOf(filter) > -1; }) : LESSONS;
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="empty">沒有符合的作品。</p>';

      var bar = $("filter-bar");
      if (bar) {
        var used = Object.keys(SKILLS).filter(function (k) {
          return LESSONS.some(function (l) { return l.skills.indexOf(k) > -1; });
        });
        bar.innerHTML = '<button type="button" class="chip' + (filter ? '' : ' on') + '" data-key="">全部</button>' +
          used.map(function (k) {
            return '<button type="button" class="chip' + (filter === k ? ' on' : '') + '" data-key="' + esc(k) + '" title="' + esc(SKILLS[k].desc) + '">' + esc(skillName(k)) + '</button>';
          }).join("");
      }
      var count = $("filter-count");
      if (count) count.textContent = filter ? (SKILLS[filter] ? SKILLS[filter].desc + "　" : "") + "（" + list.length + " / " + LESSONS.length + " 份作品）" : "";
    }

    var bar = $("filter-bar");
    if (bar) {
      bar.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        var k = b.getAttribute("data-key");
        filter = (k && k !== filter) ? k : null;
        history.replaceState(null, "", location.pathname + (filter ? "?skill=" + encodeURIComponent(filter) : "") + "#works");
        render();
      });
    }
    render();
  }

  /* ---------- 首頁：新手工具入門 ---------- */
  var strip = $("tool-strip");
  if (strip) {
    strip.innerHTML = Object.keys(TOOLS).map(function (name) {
      var t = TOOLS[name];
      return '<a class="tool-card" href="' + root + t.url + '">' +
        '<span class="use">' + esc(t.use || "") + '</span>' +
        '<b>' + esc(name) + (t.isNew ? NEW_BADGE : '') + '</b>' +
        '<span class="cost' + (t.cost === "免費" ? "" : " paid") + '">' + esc(t.cost) + '</span>' +
        '<p>' + esc(t.desc) + '</p></a>';
    }).join("");
  }

  /* ---------- 工具頁：作品集裡的實例、上一個／下一個工具 ---------- */
  var toolName = document.body.getAttribute("data-tool");
  if (toolName && TOOLS[toolName]) {
    markH1(TOOLS[toolName].isNew);
    var ex = $("tool-examples");
    if (ex) {
      var used = LESSONS.filter(function (l) { return l.tools.indexOf(toolName) > -1; });
      ex.innerHTML = used.length ? used.map(function (l) {
        return '<a href="' + root + l.url + '"><small>第 ' + l.no + ' 堂</small>' + esc(l.title) + '</a>';
      }).join("") : '<p class="empty">目前還沒有作品用到。</p>';
    }
    var names = Object.keys(TOOLS), ti = names.indexOf(toolName);
    var tp = $("pager");
    if (tp) {
      var pv = names[ti - 1], nx = names[ti + 1];
      tp.innerHTML =
        (pv ? '<a class="prev" href="' + root + TOOLS[pv].url + '"><small>← 上一個工具</small>' + esc(pv) + '</a>' : '<a class="prev" href="' + root + 'index.html#tools"><small>← 回到</small>新手工具入門</a>') +
        (nx ? '<a class="next" href="' + root + TOOLS[nx].url + '"><small>下一個工具 →</small>' + esc(nx) + '</a>' : '<a class="next" href="' + root + 'index.html"><small>看完了 →</small>回到作品列表</a>');
    }
  }

  /* ---------- 作品頁 ---------- */
  var no = parseInt(document.body.getAttribute("data-lesson"), 10);
  if (no) {
    var idx = -1;
    LESSONS.forEach(function (l, i) { if (l.no === no) idx = i; });
    var cur = LESSONS[idx];

    // 工具與技巧標籤（技巧可點，回首頁篩選）
    if (cur) markH1(cur.isNew);
    var meta = $("lesson-meta");
    if (meta && cur) {
      meta.innerHTML =
        '<div class="meta-row"><span>用到的工具</span>' + cur.tools.map(function (t) {
          return TOOLS[t]
            ? '<a class="tag tool" href="' + root + TOOLS[t].url + '" title="看「' + esc(t) + '」是什麼、怎麼用">' + esc(t) + ' ›</a>'
            : '<span class="tag tool">' + esc(t) + '</span>';
        }).join("") + '</div>' +
        '<div class="meta-row"><span>AI 技巧</span>' + cur.skills.map(function (s) {
          return '<a class="tag" href="' + root + 'index.html?skill=' + encodeURIComponent(s) + '#works">' + esc(skillName(s)) + '</a>';
        }).join("") + '</div>';
    }

    // 本頁目錄：依 section.block 的 h2 自動產生，放在「30 秒看懂」後面
    var blocks = document.querySelectorAll("main section.block[id]");
    var tldr = document.querySelector(".tldr");
    if (blocks.length && tldr) {
      var toc = document.createElement("nav");
      toc.className = "toc";
      toc.setAttribute("aria-label", "本頁目錄");
      toc.innerHTML = '<span>本頁目錄</span>' + Array.prototype.map.call(blocks, function (s) {
        var h = s.querySelector("h2");
        var hc = h ? h.cloneNode(true) : null;
        if (hc) Array.prototype.forEach.call(hc.querySelectorAll(".badge-new, .badge-supp"), function (b) { b.remove(); });
        var text = hc ? hc.textContent.replace(/^\s*\d+\s*/, "") : s.id;
        return '<a href="#' + s.id + '">' + esc(text.trim()) + '</a>';
      }).join("");
      tldr.parentNode.insertBefore(toc, tldr.nextSibling);
    }

    // 上一篇／下一篇
    var pager = $("pager");
    if (pager && idx > -1) {
      var prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
      pager.innerHTML =
        (prev ? '<a class="prev" href="' + root + prev.url + '"><small>← 上一篇・第 ' + prev.no + ' 堂</small>' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a class="next" href="' + root + next.url + '"><small>下一篇・第 ' + next.no + ' 堂 →</small>' + esc(next.title) + '</a>' : '<a class="next" href="' + root + 'index.html"><small>看完了 →</small>回到作品列表</a>');
    }
  }

  /* ---------- 回到頂端（頁面夠長才出現） ---------- */
  var top = document.createElement("a");
  top.className = "to-top";
  top.href = "#";
  top.setAttribute("aria-label", "回到頂端");
  top.textContent = "↑";
  document.body.appendChild(top);
  function onScroll() { top.classList.toggle("show", window.scrollY > 900); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 截圖點擊放大 ---------- */
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  box.addEventListener("click", function () { box.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.classList.remove("open"); });
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.tagName === "IMG" && t.closest(".shot")) {
      box.querySelector("img").src = t.src;
      box.querySelector("img").alt = t.alt;
      box.classList.add("open");
    }
  });
})();
