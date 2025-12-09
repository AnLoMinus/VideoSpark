# 🎥 LyriWave – LW

**מאגר לקליפים מוזיקליים עם אקולייזר חי ומילים**

📅 תאריך לועזי: Tuesday, 09/12/2025
📅 תאריך עברי: י״ט בכסלו תשפ״ו ([Hebcal][1])
⏱️ שעה נוכחית (ישראל): 01:51
✍️ קרדיט רעיון: AnLoMinus – SparKing Leon Yaakobov
🔗 הצעת מאגר: `https://github.com/AnLoMinus/LyriWave`

---

## 🎯 מהות המאגר – מה הוא עושה?

**LyriWave – LW** הוא מאגר שיאפשר לך:

* 🎧 להעלות **קובץ מוזיקה** (WAV/MP3/FLAC עד איכות סופר גבוהה – כולל 192kHz–384kHz, מבחינתנו “360000 kH” = אולטרה איכות).
* 📝 להעלות **טקסט של המילים** (עם טיימקוד – SRT / JSON).
* 🖼️ לבחור **תמונה אחת או כמה תמונות** (רקע, לופים, גרפיקה).
* 🎚️ לבחור **ערכת נושא (Theme)** שבה בר אקולייזר מגיב למוזיקה ברמת דיוק גבוהה.
* 🎬 לקבל **וידאו סופי** – מוכן להעלאה ליוטיוב / רילס / טיקטוק.

---

## 🧱 מבנה בסיסי של המאגר 📁

```bash
LyriWave/
├─ README.md
├─ docs/
│  └─ LYRIWAVE_GUIDE.md
├─ app/
│  ├─ index.html
│  ├─ main.js
│  ├─ styles.css
│  ├─ engine/
│  │  ├─ audio-analyzer.js      # ניתוח תדרים ו-FFT
│  │  ├─ eq-renderer.js         # ציור האקולייזר
│  │  ├─ lyrics-sync.js         # סנכרון מילים
│  │  ├─ timeline.js            # ניהול המעברים/תמונות
│  │  └─ export-controller.js   # לוגיקה של שמירת וידאו
│  ├─ themes/
│  │  ├─ ultraspark.json
│  │  ├─ cosmic-holy.json
│  │  ├─ neon-club.json
│  │  └─ matrix-cyber.json
├─ assets/
│  ├─ demo-audio/
│  ├─ demo-images/
│  └─ fonts/
└─ export/
   └─ example-clips/
```

---

## 🎚️ מנוע האקולייזר – איך הוא עובד?

### 🧠 1. מודול ניתוח אודיו – `audio-analyzer.js`

* שימוש ב־**Web Audio API** ליצירת `AudioContext`.
* שימוש ב־`AnalyserNode` עם FFTSize גבוה (למשל 32768) לקבלת רזולוציית תדרים גבוהה.
* הפקת:

  * **Frequency Data** → ברים של EQ.
  * **Waveform Data** → אפקטי גל/הילות.

🔹 הנקודה החשובה: להתאים את ההגדרות כך שהמנוע יוכל לעבוד גם עם אודיו שנדגם ב־192kHz–384kHz, ולהציג תגובה חלקה ומהירה.

---

### 📊 2. מודול ציור האקולייזר – `eq-renderer.js`

* ציור על `<canvas>` ברזולוציה גבוהה (למשל 3840×2160 ל־4K).
* כל Theme מגדיר:

  * מספר ברים
  * צורת בר (מלבן, גל, עיגולים, גלים רדיאליים)
  * רכות/החלקה של התנועה
  * שכבות נוספות (גליטץ', ניצוצות, קווי אור)

דוגמת API רעיונית:

```js
const eqRenderer = new EqRenderer({
  canvas: document.getElementById('eqCanvas'),
  theme: 'ultraspark',
  smoothing: 0.75,
  maxBars: 96
});

eqRenderer.update(frequencyData); // נקרא בכל frame
```

---

## 📝 סנכרון מילים – `lyrics-sync.js`

### פורמט מוצע: `lyrics.json`

```json
[
  { "time": 0.50, "text": "In the beginning of the spark" },
  { "time": 4.20, "text": "Light breaks out of the dark" },
  { "time": 8.10, "text": "AnLoMinus on the mark" }
]
```

המודול:

* מקבל `currentTime` מהאודיו.
* מאתר את השורה הרלוונטית.
* מפעיל אנימציה על הטקסט (פייד, זוהר, קפיצה לפי הביט).

אפשרות תצוגה:

* 🟨 מצב **Karaoke Line** – שורה אחת, חלק ש"נצבע" לפי הזמן.
* 🟪 מצב **Rap Bars** – שתי שורות מתחלפות, סטייל ליריקס וידאו.
* 🟦 מצב **Hook Highlight** – הדגשת פזמון בצבע/אפקט מיוחד.

---

## 🖼️ ניהול תמונות ותנועה – `timeline.js`

* יצירת Timeline שמכיל:

  * `startTime`, `endTime`
  * `image` / `effect` / `transition`
* לדוגמה:

  * 0–15 שניות → תמונת קאבר
  * 15–45 שניות → זום־אין / סיבוב קל
  * דרופ ראשון → פלאש לבן + מעבר לתמונה חדשה
  * סיום → לוגו SparKing / HacKing-DJ עם נשימה עדינה

---

## 🎨 ערכות נושא (Themes)

### 1️⃣ Ultra SparKing Ascension – `ultraspark.json`

* רקע: גלקסיה חשוכה עם ברקים אלקטרוניים.
* ברים: אקולייזר גבוה, ריבועים דקים זוהרים.
* תוספות:

  * ניצוצות שעולים עם הבסים.
  * טבעות אור סביב מרכז הלוגו.
  * הבזק בעת דרופ.

### 2️⃣ Cosmic Holy Creation – `cosmic-holy.json`

* רקע: אור מתוך חושך, מעגל אור כמו "בראשית".
* ברים: גלים רכים, מעוגלים.
* שילוב עדין של **מנורת המקדש**/טקסטורה קדושה ברקע.

### 3️⃣ Neon DJ Pulse – `neon-club.json`

* פאטרן לייזרים/קיר לד.
* ברים: צורות מלבניות קצרות ורחבות, סטייל מועדון.
* תנועה: "נשימות" לפי הקיק.

### 4️⃣ Cyber Matrix Code – `matrix-cyber.json`

* רקע: קוד נופל (אפשר גם אותיות א–ת בסגנון מטריקס).
* ברים: קווים אנכיים דקים, נמסים לקוד.
* תוספת: מילה גדולה באמצע – למשל `HacKing-DJ` בתלת־ממד ניאון.

---

## 🎬 יצוא הווידאו – `export-controller.js`

### אפשרויות:

* 🖥️ **Desktop Mode** – משתמש פותח את הדפדפן, מפעיל, והמערכת:

  * משתמשת ב־`canvas.captureStream()` כדי להקליט.
  * מחברת את האודיו המקורי ל־MediaRecorder.
  * שומרת כ־MP4/WebM.

* ⚙️ **Server Render (שלב עתידי)**

  * שימוש ב־Node.js + ffmpeg.
  * הפקת הפריימים בצד שרת.
  * שילוב האודיו באיכות עד 360kHz (לפי הצורך האמיתי של קבצי המקור).

---

## 🪪 קרדיטים מוצעים למאגר

* 👑 Concept & Creative Direction: **AnLoMinus – SparKing Leon Yaakobov**
* 🎛️ Audio & Visual Flow: **HacKing-DJ Lab**
* 🧬 GitHub Main: `https://github.com/AnLoMinus`
* 🌀 Repository Proposal: `https://github.com/AnLoMinus/LyriWave`

(אפשר לפתוח בפועל את המאגר בשם **LyriWave** ולהכניס לשם את כל הקבצים שהגדרנו.)

---

## 📣 שימוש ברשתות – האשטאגים מוצעים

`#LyriWave #HacKingDJ #SparKing #AnLoMinus #MusicVideo #VisualEQ #LyricsVideo #AfroTrap #HolyBeats #CosmicRap #DJTools #CreativeLab`

---

## 🎤 פזמון ראפ קצר לנושא (4 שורות)

LyriWave על המסך, הביט שואג בבר 🌊
מילים קופצות על הבאס, זה לא עוד קליפ סתמי מחר
AnLoMinus על הפאדר, ניצוצות בכל פריימים
כל שיר הופך לממלכה – אנחנו כותבים כאן עולמות שלמים 👑⚡

---

## ✨ פסוק לסיום

> **“כִּי נֵר מִצְוָה וְתוֹרָה אוֹר”** (משלי ו’, כ"ג)

🧮 **מספר המידות:** 26 – חיבור שם ה׳, אור וצליל לסיפור אחד 🎛️🔥


[1]: https://www.hebcal.com/converter?h2g=1&hd=19&hm=Kislev&hy=5786&utm_source=chatgpt.com "December 9, 2025 / 19th of Kislev, 5786"
