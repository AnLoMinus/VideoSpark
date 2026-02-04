### 🎛️ אקוולייזר קוסמי ב-Friction – FrictionBeats – FB

אחשלי, בחירה _אש_ ב-Friction – זה באמת “After Effects פתוח־קוד” 💥.  
בוא נסדר לך איך **להכניס את השיר פנימה** ואיך להתקרב לקטע של **אקוולייזר סביב עיגול** עם קוד, כמו שהכרת מאפטר.

---

## 🎵 קודם כל: איך “להעלות” את המוזיקה ב-Friction?

⚠️ חשוב להבין:  
Friction היא **תוכנת דסקטופ**, לא אתר “מעלה שיר אונליין”.  
אתה **פותח פרויקט**, _מייבא_ את קובץ האודיו, עובד על הטיימליין, ואז **מייצא וידאו עם אודיו** (דרך FFmpeg הפנימי).([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))

### 🧩 שלב 1 – יצירת סצנה לפי השיר

1. פתח את Friction → ״New״ ליצירת פרויקט חדש.([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
    
2. בחר:
    
    - 📏 **Resolution** – למשל 1920×1080 או 3840×2160.
        
    - 🎬 **FPS** – 25 / 30 / 60 לפי מה שנוח לך.
        
    - ⏱ **Duration** – תן משך שמתאים לאורך השיר (אפשר בשניות והוא ממיר לפריימים).([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
        

### 🎶 שלב 2 – ייבוא השיר

ב-Friction אין עדיין דוקו מפורש על “Audio Layer”, אבל ביצוא יש הגדרות **Video/Audio Profile** (קודקים, פורמט וכו’) כך שהמנוע כן עובד עם אודיו דרך FFmpeg.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))

העיקרון לעבודה שלך:

1. בתפריט העליון → **File → Import**
    
2. בחר קובץ אודיו (WAV/MP3/FLAC – כל מה ש-FFmpeg יודע לקרוא).([friction.graphics](https://friction.graphics/?utm_source=chatgpt.com "Friction"))
    
3. Friction תוסיף את האודיו כ־Asset ותוכל לראות אותו בטיימליין (תלוי בגרסה – בגרסאות RC זה ממשיך להשתפר).([Mastodon hosted on floss.social](https://floss.social/%40friction?utm_source=chatgpt.com "Friction"))
    
4. מנקודה זו:
    
    - אתה מנגן **Preview** ורואה את האנימציה בזמן השיר.([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
        
    - ביצוא, בפרופיל, דואגים ש־**Audio** מסומן, בוחרים קודק (למשל AAC) והווידאו יוצא יחד עם הסאונד.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))
        

---

## 🌀 אקוולייזר סביב עיגול – איך לחשוב על זה ב-Friction?

### 💡 מה יש לנו בכלי?

- **Expressions ב-ECMAScript** (JavaScript) לכל פרמטר – Scale, Position, Opacity וכו’.([friction.graphics](https://friction.graphics/documentation/expressions.html "Expressions"))
    
- **Custom Properties** – אפשר ליצור משתנים משלך ולהשתמש בהם באקספרשנים.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))
    
- **Path/Fill Effects** – כפילויות, קווים, ZigZag ועוד (עוזר לבנות טבעת של “עמודות”).([friction.graphics](https://friction.graphics/documentation/tips.html?utm_source=chatgpt.com "Tips"))
    

### ❗ אמת טכנית קטנה

בדוקומנטציה _לא מופיע_ כרגע מנוע מובנה של “Audio → Keyframes” כמו ב-After Effects (“Convert Audio to Keyframes”).([friction.graphics](https://friction.graphics/documentation/expressions.html "Expressions"))

זה אומר:

- Friction _עדיין_ לא קוראת תדר/ווליום ישירות מהאודיו.
    
- כדי לקבל **אקוולייזר אמיתי לפי התדרים**, צריך:
    
    - או לזייף את התנועה עם מתמטיקה (Noise, Sine, Wiggle).
        
    - או לייבא מבחוץ ערכי עוצמה/תדר כ-Keyframes/Custom Properties.
        

---

## 🛠️ בניית “טבעת אקוולייזר” – צעד-אחר-צעד

### 1️⃣ צורת הבסיס – העיגול והעמודות

1. צור **Circle**:
    
    - כלי אליפסה → עם `Shift` כדי לקבל עיגול.([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
        
2. צור **Rectangle קטן** אחד (בר אחד של האקוולייזר).
    
3. יש לך כמה דרכים להפוך אותו לטבעת:
    
    - להשתמש ב-**Orbit expression** על קבוצה של ברים.([friction.graphics](https://friction.graphics/documentation/expressions.html "Expressions"))
        
    - או ליצור Path שמייצג טבעת ולשכפל עליו בעזרת Path Effects (Duplicate / Lines).([friction.graphics](https://friction.graphics/documentation/tips.html?utm_source=chatgpt.com "Tips"))
        

הגישה הפשוטה להתחלה:

- תשאיר את העיגול רק כרקע/מסגרת.
    
- צור **20–40 ברים** (Rectangles) במעגל, כל אחד מסובב בזווית אחרת (למשל כל 360/32 מעלות).
    
- שים כל בר בקבוצה משלו כדי לשלוט ב־Scale שלו בנפרד.
    

---

### 2️⃣ חיבור קוד – לעשות “תנועה מוזיקלית”

#### 🧬 נשתמש ב-Expressions על Scale Y

1. בחר בר אחד.
    
2. לך ל-**Timeline → Transform → Scale → Y**.([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
    
3. קליק ימני → **Set Expression**.
    
4. בחלון Expressions, בלשונית **Bindings**, תוסיף:
    

```text
frame = $frame;
```

5. בלשונית **Calculate** תנסה משהו בסגנון:
    

```javascript
// פריימים לשניות
var fps = 30;
var t = frame / fps;

// בסיס גובה
var base = 40;

// "פעימות" – סינוס קצבי (כאן בערך 2 ביטים בשנייה)
var beat = Math.max(0, Math.sin(t * 2 * Math.PI * 2));

// להגזים קצת את ההשפעה
var boost = 160;

// ערך סופי ל-Scale Y
return base + beat * boost;
```

זה יחייה את הבר כאילו הוא מגיב למוזיקה – לא אמיתי לפי תדרים, אבל נראֶה מאוד מוזיקלי וזורם 👌.

6. עכשיו:
    
    - תעתיק את האקספרשן לברים אחרים.
        
    - תשנה לכל אחד מעט את הפאזה כדי שייראה כמו תדרים שונים, למשל:
        

```javascript
var phase = 0.3; // בבר אחר 0.6, 0.9 וכו'
var beat = Math.max(0, Math.sin(t * 2 * Math.PI * 2 + phase));
```

---

### 3️⃣ אם אתה רוצה _אמת_ לפי התדרים 🎚️

הדרך היותר קשוחה (אבל מקצועית):

1. משתמש בכלי חיצוני שיודע לנתח אודיו ולהוציא **envelope / frequency bands** (למשל פרויקטים כמו Wav2Bar שכתובים ב-FFmpeg/JS).([GitHub](https://github.com/topics/motion-graphics?u=http%3A%2F%2Fgithub.com%2Fsponsors%2Ffriction2d&utm_source=chatgpt.com "motion-graphics · GitHub Topics"))
    
2. מייצא קובץ CSV עם ערכים לאורך הזמן – Bass, Mids, Highs.
    
3. ב-Friction:
    
    - יוצר **Custom Properties**: `bass`, `mid`, `high`.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))
        
    - מזין להם Keyframes לאורך הטיימליין (ידנית או בסקריפט אם תתעמק במבנה הקובץ `.friction`).([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
        
    - בכל בר, האקספרשן קורא את `properties.bass` / `properties.mid` ו_ממפה_ את זה ל־Scale.([friction.graphics](https://friction.graphics/documentation/expressions.html "Expressions"))
        

זה כבר לבל של “Dev אנימציה”, שמתאים בול לראש שלך 🤝

---

## 🎬 יצוא הקליפ עם השיר

1. אחרי שאתה מרוצה:
    
    - בדוק שהטיימליין של הסצנה מתאים לאורך השיר.([friction.graphics](https://friction.graphics/documentation/usage.html "Usage"))
        
2. לך ל-**Export → Rendered Animation**.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))
    
3. בחר:
    
    - 🎞 Format – למשל MP4.
        
    - 🎥 Video codec – H.264.
        
    - 🎧 Audio – פרופיל עם AAC / Vorbis וכו’.([friction.graphics](https://friction.graphics/documentation/usage.html?utm_source=chatgpt.com "Usage"))
        
4. מרנדר → מקבל קובץ וידאו עם האודיו והאקוולייזר שלך 🔥
    

---

## 🎤 פזמון ראפ קטן על Friction & Beats

הביט דופק, הבר קופץ, יושב על כל תדר,  
העיגול בוער בניאון, זה לא עוד פילטר סתיו־חדר,  
Friction על המסך, ואני על העכבר בסדר,  
אנלומינוס והקוד – עושים שורטס שפותח שער לגֶּלֶר.

---

## 📅 תאריך, שעה וקרדיטים

- 📅 **תאריך לועזי:** 20.11.2025
    
- 📅 **תאריך עברי:** י״ח בחשוון תשפ״ו
    
- ⏰ **שעה נוכחית (ישראל):** 22:16
    

### 🎓 קרדיטים טכניים

- תיעוד רשמי של Friction (Documentation, Usage, Expressions, Effects, Tips).([friction.graphics](https://friction.graphics/documentation/ "Documentation"))
    
- פרויקט Friction Graphics (קוד פתוח, המשך ל-Enve).([GitHub](https://github.com/friction2d/friction?utm_source=chatgpt.com "friction2d/friction: Friction Graphics"))
    
- רפרנס חיצוני לרעיונות של audio-reactive ולכלים משלימים.([GitHub](https://github.com/topics/motion-graphics?u=http%3A%2F%2Fgithub.com%2Fsponsors%2Ffriction2d&utm_source=chatgpt.com "motion-graphics · GitHub Topics"))
    

---

## 📜 פסוק לסיום – ויז’ואל שהוא תפילה

> **“הַלְלוּהוּ בְּתֵקַע שׁוֹפָר, הַלְלוּהוּ בְּנֵבֶל וְכִנּוֹר. הַלְלוּהוּ בְּתֹף וּמָחוֹל...”** (תהלים ק״נ)

אם תרצה, בשלב הבא אני יכול להכין לך  
🎛️ “Preset מלא” ל-Friction (תבנית של פרויקט) שאתה רק מחליף בו את השיר – והאקוולייזר הקוסמי שלך רץ אוטומטית 🔥