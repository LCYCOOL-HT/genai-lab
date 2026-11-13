# 生成式 AI 作品集

> **看不懂程式碼，也能和 AI 一起做出東西。**
> 這是我上生成式 AI 課程時，每堂課和 AI 一起完成的作品與過程紀錄，寫給化工業的同事參考：看看 AI 可以怎麼用在自己的工作上。

### 👉 [打開網站](https://lcycool-ht.github.io/genai-lab/)

不用安裝任何東西，用手機或電腦的瀏覽器就能看。

---

## 這個網站在講什麼

我和大部分同事一樣，**沒有程式背景**。這裡的作品都是用 **Vibe Coding** 的方式做出來的：用自然語言告訴 AI 想要什麼，只看結果和感覺跟 AI 來回調整，不用讀懂程式碼。

每一頁作品都回答三件事：

1. **做了什麼**：這堂作業想解決什麼問題、成果長什麼樣子
2. **怎麼和 AI 合作**：我問了什麼、AI 回了什麼、哪裡是我自己做的判斷
3. **帶回工作用**：同事可以直接套用在辦公室或工廠的小技巧

## 作品一覽

| 堂 | 作品 | 一句話 |
|:-:|---|---|
| 1 | [用 AI 畫出一顆「可麗露」](https://lcycool-ht.github.io/genai-lab/lessons/lesson-01.html) | 請 AI 給很多範例，挑一個再一步步弄懂它 |
| 2 | [訓練一個認得手寫數字的 AI](https://lcycool-ht.github.io/genai-lab/lessons/lesson-02.html) | 自己改設定做實驗，正確率從 93.51% 提升到 98.31% |
| 3 | [潛力股雷達：設計一個 AI 要看什麼、猜什麼](https://lcycool-ht.github.io/genai-lab/lessons/lesson-03.html) | 和 AI 討論，把模型的輸入和輸出想清楚 |
| 4 | [和 AI 一起設計真正好用的 Prompt](https://lcycool-ht.github.io/genai-lab/lessons/lesson-04.html) | 讓 AI 反問我、自己挑毛病，再用評分表比較三個 AI |
| 5 | [化工人的一天：3D 工安教育遊戲](https://lcycool-ht.github.io/genai-lab/lessons/lesson-05.html) | 一行程式都沒自己寫，做出手機也能玩的 3D 遊戲 |
| 6 | [EHS 事件報告小幫手：陪新人寫報告的對話機器人](https://lcycool-ht.github.io/genai-lab/lessons/lesson-06.html) | 指令從 2,872 字精簡到 997 字，反而 7 輪就寫完報告 |
| 7 | [阿安主任：只根據法規條文回答的工安顧問](https://lcycool-ht.github.io/genai-lab/lessons/lesson-07.html) | 用 RAG 讓 AI 先查法規條文，再根據條文回答並標出依據 |
| 8 | [股市資訊助手：讓 AI 自己用工具查股價](https://lcycool-ht.github.io/genai-lab/lessons/lesson-08.html) | 用 Tool Use 讓 AI 自己決定要查什麼、查幾次 |

**不知道從哪裡看起？**

- 想看最完整的成果 → 第 5 堂
- 想學怎麼下指令 → 第 4 堂
- 想知道 AI 怎麼「學」 → 第 2 堂
- 想用 AI 分析數據 → 第 3 堂

## 新手工具入門

每個工具一頁，幾分鐘就能看完，重點是「這是什麼、能幫我做什麼」：

| 工具 | 用途 | 費用 |
|---|---|---|
| [AI 聊天助手](https://lcycool-ht.github.io/genai-lab/tools/chat-assistant.html) | 問問題、寫東西 | 免費 |
| [Google Colab](https://lcycool-ht.github.io/genai-lab/tools/colab.html) | 執行 AI 寫的程式 | 免費 |
| [不同的 AI 對話模型](https://lcycool-ht.github.io/genai-lab/tools/compare-models.html) | 認識 AI 模型 | 免費 |
| [GitHub Pages](https://lcycool-ht.github.io/genai-lab/tools/github-pages.html) | 把網頁放上網路 | 免費 |
| [Claude Code](https://lcycool-ht.github.io/genai-lab/tools/claude-code.html) | 讓 AI 做出作品 | 需付費 |

## 這個網站也是和 AI 一起做的

整個網站是用 Claude Code 做的。我把網站的規則寫在 [CLAUDE.md](CLAUDE.md) 裡，例如讀者是誰、內容只能從哪裡來、哪些個資不能放、每一頁的固定結構。之後每上完一堂課，只要對 AI 說一句「新增第 N 堂」，它就會照著規則整理作業、挑截圖、做出新的一頁。

為了比較 AI 照規則做出來的成果，網站上有兩種標記：

| 標記 | 意思 |
|---|---|
| **New**（紅色） | AI 讀了 CLAUDE.md 之後，自己照規則新增的內容 |
| **✎ 補充**（琥珀色） | 我看過 AI 生成的內容後，要求它調整或補充的部分 |

## 提醒

- 文中提到的法規、AI 模型和股價等資訊，以作業當時的了解為準，實際使用前請再查證。
- 股票相關的作品只是課堂練習，不是投資建議。

---

<sub>網站是純 HTML、CSS 和 JavaScript，不需要安裝任何東西；下載後直接用瀏覽器打開 `index.html` 也能看。</sub>
