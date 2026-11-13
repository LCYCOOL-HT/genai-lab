/* =========================================================
   作品資料清單（整個網站唯一的資料來源）
   - 首頁的作品卡片、技巧篩選、新手工具入門
   - 每個作品頁的工具標籤連結、「上一篇／下一篇」
   - 每個工具頁的「作品集裡的實例」與上一個／下一個工具
   都是從這裡自動產生。新增一堂課＝在 LESSONS 最後加一筆。
   欄位說明與規則請看 CLAUDE.md
   ========================================================= */

/* AI 技巧清單：skills 欄位只能用這裡的 key。要新增技巧，先在這裡加。 */
window.SKILLS = {
  "ai-ideas":      { name: "請 AI 先給點子",       desc: "沒有靈感時，先請 AI 列出很多選項，自己再挑。" },
  "read-ai-code":  { name: "拆解 AI 給的東西",     desc: "不直接照抄，一步一步弄懂 AI 給的程式或內容在做什麼。" },
  "ai-debug":      { name: "用 AI 找問題原因",     desc: "結果怪怪的時候，把現象告訴 AI，請它解釋原因和修法。" },
  "ai-asks-me":    { name: "讓 AI 反問我",         desc: "先別讓 AI 動手，請它每輪問三個問題，把需求問清楚。" },
  "ai-self-check": { name: "請 AI 自己挑毛病",     desc: "AI 給了初稿之後，請它站在讀者角度列出問題。" },
  "ai-fact-check": { name: "請 AI 上網查證",       desc: "專業知識、法規會過時，請 AI 搜尋並附上來源，查不到就刪掉。" },
  "rubric":        { name: "訂評分表比較多個 AI",  desc: "先訂好可以逐條打分的標準，再把同一份指令交給不同 AI 比較。" },
  "spec":          { name: "先寫規格書再叫 AI 做", desc: "把想法整理成完整規格書，再交給 AI 寫程式，最後逐條對照驗收。" },
  "human-judge":   { name: "加入自己的專業判斷",   desc: "AI 給的選項很多，最後由自己的領域經驗挑選和把關。" },
  "ai-layout":     { name: "請 AI 幫忙排版",       desc: "內容寫好後，把要貼的地方截圖給 AI，請它產生可以直接貼上的格式。" },
  "trim-prompt":   { name: "指令太長就精簡",       desc: "規則太多 AI 反而做不好；只留要收集的重點，刪完一定要再測一次。" },
  "ai-role-play":  { name: "讓 AI 扮演使用者",     desc: "設計固定的測試情境，請 AI 扮演使用者反覆對話，公平比較不同版本。" },
  "ground-in-docs":{ name: "給 AI 資料再回答",     desc: "把法規、手冊等可信資料交給 AI，要求只根據資料回答並標出處，查不到就說沒寫到。" },
  "ai-persona":    { name: "替 AI 設定角色",       desc: "回答規則和說話語氣分開寫，換角色、換語氣也不影響內容的嚴謹。" },
  "ai-tools":      { name: "給 AI 工具去查",       desc: "AI 不知道的最新資料，做成工具讓它自己判斷何時去查、查幾次。" }
};

/* 工具清單：LESSONS 的 tools 欄位只能用這裡的名稱。
   工具之間沒有先後關係；use＝一句話用途，顯示在首頁卡片和工具頁標頭。每個工具都有一頁 tools/<slug>.html */
window.TOOLS = {
  "AI 聊天助手":        { use: "問問題、寫東西", url: "tools/chat-assistant.html", cost: "免費",          desc: "ChatGPT、Claude、Gemini 這類打字就能問的 AI，所有事情的起點。" },
  "Google Colab":       { use: "執行 AI 寫的程式", url: "tools/colab.html",          cost: "免費",          desc: "瀏覽器裡的線上筆記本，把 AI 寫的程式貼上就能執行、畫圖。" },
  "不同的 AI 對話模型": { use: "認識 AI 模型", url: "tools/compare-models.html", cost: "免費",          desc: "同一個問題問不同的 AI，比較誰答得好，重要文件更放心。" },
  "GitHub Pages":       { use: "把網頁放上網路", url: "tools/github-pages.html",   cost: "免費",          desc: "免費把做好的網頁放上網路，得到一個可以分享的網址。" },
  "Claude Code":        { use: "讓 AI 做出作品", url: "tools/claude-code.html",    cost: "需付費",        desc: "會自己動手的 AI Agent：你用自然語言描述需求，它讀程式、改檔案、執行指令，把作品做出來。" }
};

window.LESSONS = [
  {
    no: 1,
    date: "2026-09-08",
    course: "課程介紹：如何不焦慮地學 AI",
    title: "用 AI 畫出一顆「可麗露」",
    summary: "作業要畫一個函數圖形。我請 AI 給了很多範例，挑中一個長得像可麗露的 3D 圖形，再一步步拆解公式，弄懂它是怎麼畫出來的。",
    url: "lessons/lesson-01.html",
    cover: "assets/img/lesson-01/final-3views.webp",
    tools: ["AI 聊天助手", "Google Colab"],
    skills: ["ai-ideas", "read-ai-code"]
  },
  {
    no: 2,
    date: "2026-09-15",
    course: "神經網路的概念",
    title: "訓練一個認得手寫數字的 AI",
    summary: "從老師的範例出發，自己改設定、做實驗，再請 AI 解釋為什麼。辨識正確率從 93.51% 提升到 98.31%，最後還能辨識我自己手寫的數字。",
    url: "lessons/lesson-02.html",
    cover: "assets/img/lesson-02/gradio-7-1.webp",
    tools: ["AI 聊天助手", "Google Colab"],
    skills: ["ai-debug", "read-ai-code"]
  },
  {
    no: 3,
    date: "2026-09-22",
    course: "AI 為什麼每次都不一樣",
    title: "潛力股雷達：設計一個 AI 要看什麼、猜什麼",
    summary: "想讓 AI 每天掃描台股、找出還沒被注意的潛力股。重點是和 AI 討論，把模型的「輸入 20 個數字」和「輸出 1 個預測」想清楚。",
    url: "lessons/lesson-03.html",
    cover: "assets/img/lesson-03/x-features.webp",
    tools: ["AI 聊天助手"],
    skills: ["ai-ideas", "human-judge", "ai-layout"]
  },
  {
    no: 4,
    date: "2026-09-29",
    course: "LLM 只是在猜下一個字？",
    title: "和 AI 一起設計真正好用的 Prompt",
    summary: "任務是寫一封赴美設廠的英文詢問信。我讓 AI 反問我、自己挑毛病，訂出 100 分評分表，再拿同一份 Prompt 測三個不同的 AI，一路從 v0 改到 v2。",
    url: "lessons/lesson-04.html",
    cover: "assets/img/lesson-04/ai-asks-me.webp",
    tools: ["不同的 AI 對話模型"],
    skills: ["ai-asks-me", "ai-self-check", "rubric", "human-judge"]
  },
  {
    no: 5,
    date: "2026-10-06",
    course: "AI 怎麼記得前面說過什麼？",
    title: "化工人的一天：3D 工安教育遊戲",
    summary: "一行程式都沒自己寫，做出一款電腦、手機都能玩的 3D 工安遊戲。先和 AI 一起寫規格書、請同事補充、上網查證，再交給 Claude Code 生成並反覆測試修改。",
    url: "lessons/lesson-05.html",
    cover: "assets/img/lesson-05/cover.webp",
    tools: ["AI 聊天助手", "Claude Code", "GitHub Pages"],
    skills: ["ai-asks-me", "spec", "ai-fact-check", "ai-debug", "human-judge"]
  },
  {
    no: 6,
    date: "2026-10-13",
    course: "打造自己的對話機器人",
    title: "EHS 事件報告小幫手：陪新人寫報告的對話機器人",
    summary: "用 AISuite 做一個陪新人寫 EHS 事件報告的對話機器人。第一版指令 2,872 字，AI 問了 20 輪還寫不出報告；精簡到 997 字後，7 輪就完成，AI 評分從 6 分升到 20 分。",
    url: "lessons/lesson-06.html",
    cover: "assets/img/lesson-06/gradio-app.webp",
    tools: ["AI 聊天助手", "不同的 AI 對話模型", "Google Colab"],
    skills: ["ai-asks-me", "trim-prompt", "ai-role-play", "rubric"],
    isNew: true
  },
  {
    no: 7,
    date: "2026-10-20",
    course: "讓 AI 看懂你的世界",
    title: "阿安主任：只根據法規條文回答的工安顧問",
    summary: "用 RAG 讓 AI 先從 9 部職安法規、741 條條文找出相關規定，再只根據條文回答並標出依據。新人口語問法原本找不到條文，先給 AI 看法規目錄再改寫問題後就找得到了。",
    url: "lessons/lesson-07.html",
    cover: "assets/img/lesson-07/gradio-overview.webp",
    tools: ["AI 聊天助手", "Google Colab"],
    skills: ["ground-in-docs", "ai-persona", "read-ai-code", "human-judge"],
    isNew: true
  },
  {
    no: 8,
    date: "2026-10-27",
    course: "教 AI 做事的方法",
    title: "股市資訊助手：讓 AI 自己用工具查股價",
    summary: "AI 不知道今天的股價，所以我給它兩個查證交所資料的工具，讓它自己決定查什麼、查幾輪。只給公司名稱也能先查代號再查股價，還能比較兩檔股票。",
    url: "lessons/lesson-08.html",
    cover: "assets/img/lesson-08/gradio-answer.webp",
    tools: ["AI 聊天助手", "Google Colab"],
    skills: ["ai-tools", "read-ai-code"],
    isNew: true
  }
];
