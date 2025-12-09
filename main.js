(function () {
  const APP_VERSION = "v0.3.0";

  const audioFileInput = document.getElementById("audioFileInput");
  const audioFileButton = document.getElementById("audioFileButton");
  const audioFileName = document.getElementById("audioFileName");

  const imageFileInput = document.getElementById("imageFileInput");
  const imageFileButton = document.getElementById("imageFileButton");
  const imageFileName = document.getElementById("imageFileName");
  const bgImagePreview = document.getElementById("bgImagePreview");

  const themeSelect = document.getElementById("themeSelect");
  const currentThemeLabel = document.getElementById("currentThemeLabel");
  const barsCountInput = document.getElementById("barsCountInput");

  const lyricsInput = document.getElementById("lyricsInput");
  const reloadLyricsButton = document.getElementById("reloadLyricsButton");
  const lyricsCurrentEl = document.getElementById("lyricsCurrent");
  const lyricsNextEl = document.getElementById("lyricsNext");

  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const stopButton = document.getElementById("stopButton");

  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");
  const timeLabel = document.getElementById("timeLabel");
  const sampleRateLabel = document.getElementById("sampleRateLabel");
  const yearSpan = document.getElementById("yearSpan");

  const brandPill = document.getElementById("brandPill");
  const brandSub = document.getElementById("brandSub");
  const badgeMode = document.getElementById("badgeMode");
  const badgeSync = document.getElementById("badgeSync");
  const badgeAuthor = document.getElementById("badgeAuthor");
  const versionTag = document.getElementById("versionTag");
  const languageSelect = document.getElementById("languageSelect");

  const visualizerTitle = document.getElementById("visualizerTitle");
  const visualizerSub = document.getElementById("visualizerSub");
  const themeIndicatorLabel = document.getElementById("themeIndicatorLabel");
  const displaySizeLabel = document.getElementById("displaySizeLabel");
  const displaySizeSelect = document.getElementById("displaySizeSelect");
  const visualizerStage = document.querySelector(".visualizer-stage");

  const audioLabel = document.getElementById("audioLabel");
  const audioHint = document.getElementById("audioHint");
  const audioButtonLabel = document.getElementById("audioButton");

  const imageLabel = document.getElementById("imageLabel");
  const imageHint = document.getElementById("imageHint");
  const imageButtonLabel = document.getElementById("imageButton");

  const themeLabel = document.getElementById("themeLabel");
  const barsLabel = document.getElementById("barsLabel");
  const barsHint = document.getElementById("barsHint");
  const chipFft = document.getElementById("chipFft");
  const chipSmooth = document.getElementById("chipSmooth");
  const chip4k = document.getElementById("chip4k");

  const lyricsLabel = document.getElementById("lyricsLabel");
  const lyricsHint = document.getElementById("lyricsHint");
  const timeHint = document.getElementById("timeHint");

  const transportLabel = document.getElementById("transportLabel");
  const playButtonLabel = document.getElementById("playButtonLabel");
  const pauseButtonLabel = document.getElementById("pauseButtonLabel");
  const stopButtonLabel = document.getElementById("stopButtonLabel");
  const parseButtonLabel = document.getElementById("parseButtonLabel");
  const transportTip = document.getElementById("transportTip");

  const footerLeftText = document.getElementById("footerLeftText");
  const footerBy = document.getElementById("footerBy");
  const footerLink = document.getElementById("footerLink");

  const canvas = document.getElementById("visualizerCanvas");
  const ctx = canvas.getContext("2d");

  const translations = {
    en: {
      versionLabel: "Version {version}",
      brandPill: "Audio · Visual · Lyrics",
      brandSub: "Reactive equalizer · Cosmic themes · Lyrics-on-beat",
      badgeMode: "HacKing-DJ Mode",
      badgeSync: "Ultra Visual Sync",
      badgeAuthor: "Made by AnLoMinus",
      visualizerTitle: "🎛️ Live Visualizer",
      visualizerSub: "Drop your track · Watch the bars ignite",
      themeIndicator: "Theme:",
      displaySizeLabel: "View:",
      displaySizeOptions: {
        full: "Full view",
        half: "Half view",
        quarter: "Quarter view",
        small: "Mini view"
      },
      overlayDefault: "Load audio · Add lyrics · Hit Play",
      overlayNextHint: "",
      sampleRatePrefix: "Sample rate: ",
      sampleRateUnknown: "Sample rate: —",
      statusIdleNoAudio: "Idle · No audio loaded",
      statusPlaying: "Playing · Visualizer active",
      statusPaused: "Paused",
      statusStopped: "Stopped · Ready",
      statusFinished: "Finished · Ready to replay",
      statusLoaded: "Audio loaded · Ready to play",
      statusLoadFirst: "Load audio first",
      statusUnablePlay: "Unable to play (interaction required)",
      audioLabel: "Audio file (WAV/MP3/FLAC) 🎵",
      audioHint: "High sample-rate ready",
      audioButton: "⬆️ Load Audio",
      audioNone: "No file selected",
      imageLabel: "Background artwork 🖼️",
      imageHint: "Static cover or looping art",
      imageButton: "🌌 Load Image",
      imageNone: "No image selected",
      themeLabel: "Visualizer theme ✨",
      barsLabel: "Bars count 🔢",
      barsHint: "16 – 160",
      chipFft: "FFT-based",
      chipSmooth: "Smoothing",
      chip4k: "4K Canvas Ready",
      lyricsLabel: "Lyrics with timing 🎤",
      lyricsHint: "Format: time|text (one line per bar)",
      lyricsPlaceholder: "Examples:\n0.0|In the beginning of the spark\n4.2|Light breaks out of the dark\n8.1|AnLoMinus riding every bar\n",
      timeHint: "⏱️ Time can be in seconds (e.g. <code>12.5</code>) or <code>mm:ss</code> (e.g. <code>01:23</code>).",
      transportLabel: "Transport & preview 🔁",
      playButton: "▶️ Play / Resume",
      pauseButton: "⏸️",
      stopButton: "⏹️",
      parseButton: "🔄 Parse Lyrics",
      transportTip: "Tip: load the audio, paste your lyrics, set a theme, then hit Play – bars + text will sync in real time.",
      footerLeftText: " VideoSpark · Crafted for HacKing-DJ · All rights reserved.",
      footerBy: "By AnLoMinus (SparKing Leon Yaakobov)",
      footerLink: "GitHub Profile",
      lyricsNone: "Lyrics: none parsed (check format)",
      lyricsReady: "Lyrics ready · {count} lines",
      lyricsReadyNext: "They will appear in sync while playing.",
      themeOptions: {
        "ultra-spark": "Ultra SparKing Ascension",
        "cosmic-holy": "Cosmic Holy Creation",
        "neon-club": "Neon DJ Pulse",
        "matrix-cyber": "Cyber Matrix Code"
      }
    },
    he: {
      versionLabel: "גרסה {version}",
      brandPill: "אודיו · ויזואל · מילים",
      brandSub: "אקולייזר מגיב · תמות קוסמיות · מילים על הביט",
      badgeMode: "מצב HacKing-DJ",
      badgeSync: "סנכרון ויזואלי אולטרה",
      badgeAuthor: "נוצר ע" + "י AnLoMinus",
      visualizerTitle: "🎛️ ויזואלייזר חי",
      visualizerSub: "העלו את הטראק · ותראו את הפסים נדלקים",
      themeIndicator: "ערכת נושא:",
      displaySizeLabel: "תצוגה:",
      displaySizeOptions: {
        full: "תצוגה מלאה",
        half: "חצי תצוגה",
        quarter: "רבע תצוגה",
        small: "תצוגה קטנה"
      },
      overlayDefault: "העלו אודיו · הוסיפו מילים · לחצו פליי",
      overlayNextHint: "",
      sampleRatePrefix: "קצב דגימה: ",
      sampleRateUnknown: "קצב דגימה: —",
      statusIdleNoAudio: "בהמתנה · אין אודיו",
      statusPlaying: "מנגן · ויזואלייזר פעיל",
      statusPaused: "הושעה",
      statusStopped: "נעצר · מוכן",
      statusFinished: "הסתיים · מוכן להפעלה מחדש",
      statusLoaded: "אודיו נטען · מוכן לנגן",
      statusLoadFirst: "נא לטעון אודיו קודם",
      statusUnablePlay: "לא ניתן לנגן (יש ללחוץ קודם)",
      audioLabel: "קובץ אודיו (WAV/MP3/FLAC) 🎵",
      audioHint: "מוכן לדגימה גבוהה",
      audioButton: "⬆️ העלאת אודיו",
      audioNone: "לא נבחר קובץ",
      imageLabel: "תמונת רקע 🖼️",
      imageHint: "קאבר סטטי או לופינג",
      imageButton: "🌌 העלאת תמונה",
      imageNone: "לא נבחרה תמונה",
      themeLabel: "ערכת נושא ✨",
      barsLabel: "מספר פסים 🔢",
      barsHint: "16 – 160",
      chipFft: "מבוסס FFT",
      chipSmooth: "החלקה",
      chip4k: "Canvas 4K",
      lyricsLabel: "מילים עם תזמון 🎤",
      lyricsHint: "פורמט: זמן|טקסט (שורה לכל פס)",
      lyricsPlaceholder: "דוגמה:\n0.0|בהתחלה של הניצוץ\n4.2|האור פורץ מהחושך\n8.1|AnLoMinus רוכב על כל תיבה\n",
      timeHint: "⏱️ ניתן לכתוב שניות (לדוגמה 12.5) או דקה:שניה (לדוגמה 01:23).",
      transportLabel: "בקרת ניגון ותצוגה 🔁",
      playButton: "▶️ נגן / המשך",
      pauseButton: "⏸️",
      stopButton: "⏹️",
      parseButton: "🔄 ניתוח מילים",
      transportTip: "טיפ: העלו אודיו, הדביקו מילים, בחרו ערכת נושא ולחצו פליי – הפסים והמילים יסתנכרנו בזמן אמת.",
      footerLeftText: " VideoSpark · נוצר עבור HacKing-DJ · כל הזכויות שמורות.",
      footerBy: "נוצר על ידי AnLoMinus (SparKing Leon Yaakobov)",
      footerLink: "פרופיל GitHub",
      lyricsNone: "מילים: לא זוהו (בדקו את הפורמט)",
      lyricsReady: "מילים מוכנות · {count} שורות",
      lyricsReadyNext: "יופיעו מסונכרנות בזמן הניגון.",
      themeOptions: {
        "ultra-spark": "עליית Ultra SparKing",
        "cosmic-holy": "בריאה קוסמית קדושה",
        "neon-club": "Neon DJ Pulse",
        "matrix-cyber": "Cyber Matrix Code"
      }
    }
  };

  let audioCtx;
  let analyser;
  let dataArray;
  let bufferLength;
  let sourceNode;
  let audioElement;
  let audioUrl;
  let animationId;
  let lastLyricsIndex = -1;
  let lyricsData = [];
  let currentLang = "he";

  function stopAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function setupAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
      updateSampleRateLabel();
    }
  }

  function connectSource() {
    if (!audioElement) return;
    if (!audioCtx) setupAudioContext();
    if (sourceNode) {
      sourceNode.disconnect();
    }
    sourceNode = audioCtx.createMediaElementSource(audioElement);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  function setDefaultLyricsPrompt() {
    lyricsCurrentEl.textContent = t("overlayDefault");
    lyricsNextEl.textContent = t("overlayNextHint");
  }

  function updateSampleRateLabel() {
    if (audioCtx && audioCtx.sampleRate) {
      sampleRateLabel.textContent = t("sampleRatePrefix") + audioCtx.sampleRate + " Hz";
    } else {
      sampleRateLabel.textContent = t("sampleRateUnknown");
    }
  }

  function t(key, params) {
    const dict = translations[currentLang] || translations.en;
    let value = dict[key];
    if (typeof value !== "string") {
      return value;
    }
    if (params) {
      Object.keys(params).forEach(function (p) {
        value = value.replace("{" + p + "}", params[p]);
      });
    }
    return value;
  }

  function getThemeLabel(themeKey) {
    const dict = translations[currentLang] || translations.en;
    const themeOptions = dict.themeOptions || translations.en.themeOptions;
    return themeOptions[themeKey] || themeOptions["ultra-spark"];
  }

  function applyLanguage() {
    versionTag.textContent = t("versionLabel", { version: APP_VERSION });
    brandPill.textContent = t("brandPill");
    brandSub.textContent = t("brandSub");
    badgeMode.textContent = t("badgeMode");
    badgeSync.textContent = t("badgeSync");
    badgeAuthor.textContent = t("badgeAuthor");

    visualizerTitle.textContent = t("visualizerTitle");
    visualizerSub.textContent = t("visualizerSub");
    themeIndicatorLabel.textContent = t("themeIndicator");
    displaySizeLabel.textContent = t("displaySizeLabel");

    audioLabel.textContent = t("audioLabel");
    audioHint.textContent = t("audioHint");
    audioButtonLabel.textContent = t("audioButton");

    imageLabel.textContent = t("imageLabel");
    imageHint.textContent = t("imageHint");
    imageButtonLabel.textContent = t("imageButton");

    themeLabel.textContent = t("themeLabel");
    barsLabel.textContent = t("barsLabel");
    barsHint.textContent = t("barsHint");
    chipFft.textContent = t("chipFft");
    chipSmooth.textContent = t("chipSmooth");
    chip4k.textContent = t("chip4k");

    lyricsLabel.textContent = t("lyricsLabel");
    lyricsHint.textContent = t("lyricsHint");
    lyricsInput.placeholder = t("lyricsPlaceholder");
    timeHint.innerHTML = t("timeHint");

    transportLabel.textContent = t("transportLabel");
    playButtonLabel.textContent = t("playButton");
    pauseButtonLabel.textContent = t("pauseButton");
    stopButtonLabel.textContent = t("stopButton");
    parseButtonLabel.textContent = t("parseButton");
    transportTip.textContent = t("transportTip");

    footerLeftText.textContent = t("footerLeftText");
    footerBy.textContent = t("footerBy");
    footerLink.textContent = t("footerLink");

    themeSelect.innerHTML = "";
    const themes = translations.en.themeOptions;
    Object.keys(themes).forEach(function (key) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = getThemeLabel(key);
      themeSelect.appendChild(option);
    });

    Array.from(displaySizeSelect.options).forEach(function (option) {
      const viewLabels = (translations[currentLang] || translations.en).displaySizeOptions || translations.en.displaySizeOptions;
      option.textContent = viewLabels[option.value] || option.textContent;
    });
    const selectedOption = themeSelect.value;
    currentThemeLabel.textContent = getThemeLabel(selectedOption);

    if (!audioFileInput.files || !audioFileInput.files.length) {
      audioFileName.textContent = t("audioNone");
    }
    if (!imageFileInput.files || !imageFileInput.files.length) {
      imageFileName.textContent = t("imageNone");
    }

    updateSampleRateLabel();

    if (!lyricsData.length) {
      setDefaultLyricsPrompt();
    }

    if (!audioElement) {
      setStatus(false, t("statusIdleNoAudio"));
    }
  }

  yearSpan.textContent = new Date().getFullYear().toString();

  languageSelect.value = currentLang;
  applyLanguage();
  applyDisplaySize(displaySizeSelect.value || "full");

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.floor(rect.width * scale);
    canvas.height = Math.floor(rect.height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function applyDisplaySize(sizeKey) {
    const allowed = ["full", "half", "quarter", "small"];
    const chosen = allowed.indexOf(sizeKey) !== -1 ? sizeKey : "half";
    allowed.forEach(function (key) {
      visualizerStage.classList.remove("size-" + key);
    });
    visualizerStage.classList.add("size-" + chosen);
    if (displaySizeSelect.value !== chosen) {
      displaySizeSelect.value = chosen;
    }
    resizeCanvas();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function setStatus(isPlaying, message) {
    if (isPlaying) {
      statusDot.classList.add("playing");
      statusText.textContent = message || t("statusPlaying");
    } else {
      statusDot.classList.remove("playing");
      statusText.textContent = message || t("statusIdleNoAudio");
    }
  }

  function formatTime(tVal) {
    if (!isFinite(tVal) || tVal < 0) tVal = 0;
    const minutes = Math.floor(tVal / 60);
    const seconds = Math.floor(tVal % 60);
    const mm = minutes.toString().padStart(2, "0");
    const ss = seconds.toString().padStart(2, "0");
    return mm + ":" + ss;
  }

  function updateTimeLabel() {
    if (!audioElement) {
      timeLabel.textContent = "00:00 / 00:00";
      return;
    }
    const cur = formatTime(audioElement.currentTime || 0);
    const dur = isFinite(audioElement.duration) ? formatTime(audioElement.duration) : "00:00";
    timeLabel.textContent = cur + " / " + dur;
  }

  function parseTimeToken(token) {
    token = token.trim();
    if (!token) return null;

    if (token.indexOf(":") !== -1) {
      const parts = token.split(":").map(function (p) { return p.trim(); });
      if (parts.some(function (p) { return p === ""; })) return null;
      let seconds = 0;
      if (parts.length === 2) {
        const m = Number(parts[0]);
        const s = Number(parts[1]);
        if (!isFinite(m) || !isFinite(s)) return null;
        seconds = m * 60 + s;
      } else if (parts.length === 3) {
        const h = Number(parts[0]);
        const m = Number(parts[1]);
        const s = Number(parts[2]);
        if (!isFinite(h) || !isFinite(m) || !isFinite(s)) return null;
        seconds = h * 3600 + m * 60 + s;
      } else {
        return null;
      }
      return seconds;
    }

    const n = Number(token);
    if (!isFinite(n)) return null;
    return n;
  }

  function parseLyrics() {
    const raw = lyricsInput.value || "";
    const lines = raw.split(/\r?\n/);
    const parsed = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const parts = line.split("|");
      if (parts.length < 2) continue;
      const timeToken = parts[0];
      const text = parts.slice(1).join("|").trim();
      if (!text) continue;
      const timeSeconds = parseTimeToken(timeToken);
      if (timeSeconds === null) continue;
      parsed.push({ time: timeSeconds, text: text });
    }

    parsed.sort(function (a, b) {
      return a.time - b.time;
    });

    lyricsData = parsed;
    lastLyricsIndex = -1;

    if (lyricsData.length === 0) {
      lyricsCurrentEl.textContent = t("lyricsNone");
      lyricsNextEl.textContent = "";
    } else {
      lyricsCurrentEl.textContent = t("lyricsReady", { count: lyricsData.length });
      lyricsNextEl.textContent = t("lyricsReadyNext");
    }
  }

  function updateLyricsForTime(currentTime) {
    if (!lyricsData.length) return;

    let idx = lastLyricsIndex;
    if (idx < 0 || currentTime < lyricsData[idx].time || idx >= lyricsData.length - 1) {
      idx = 0;
    }

    for (let i = idx; i < lyricsData.length; i++) {
      const entry = lyricsData[i];
      const nextEntry = lyricsData[i + 1];
      if (currentTime >= entry.time && (!nextEntry || currentTime < nextEntry.time)) {
        idx = i;
        break;
      }
    }

    if (idx !== lastLyricsIndex) {
      lastLyricsIndex = idx;
      const current = lyricsData[idx];
      const next = lyricsData[idx + 1];
      lyricsCurrentEl.textContent = current.text;
      lyricsNextEl.textContent = next ? next.text : "";
    }
  }

  function getThemeStyle(themeKey, valueRatio, barIndex, barCount) {
    const v = Math.max(0, Math.min(1, valueRatio));
    const tTheme = themeKey;

    if (tTheme === "cosmic-holy") {
      const r = Math.round(255 * (0.6 + 0.4 * v));
      const g = Math.round(255 * 0.8);
      const b = Math.round(210 * v);
      return "rgba(" + r + "," + g + "," + b + "," + (0.75 + 0.25 * v) + ")";
    }

    if (tTheme === "neon-club") {
      const hue = 180 + (barIndex / Math.max(1, barCount)) * 120;
      const sat = 70 + 15 * v;
      const light = 40 + 20 * v;
      return "hsl(" + hue + "," + sat + "%," + light + "%)";
    }

    if (tTheme === "matrix-cyber") {
      const g = Math.round(190 + 65 * v);
      return "rgba(140," + g + ",160," + (0.65 + 0.35 * v) + ")";
    }

    const r = Math.round(255 * (0.7 + 0.3 * v));
    const g = Math.round(140 + 90 * v);
    const b = Math.round(60 + 120 * v);
    return "rgba(" + r + "," + g + "," + b + "," + (0.75 + 0.25 * v) + ")";
  }

  function drawFrame() {
    if (!analyser || !dataArray) return;

    animationId = requestAnimationFrame(drawFrame);

    analyser.getByteFrequencyData(dataArray);

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const barsCount = Math.max(16, Math.min(160, Number(barsCountInput.value) || 72));
    const binStep = Math.max(1, Math.floor(bufferLength / barsCount));

    const themeKey = themeSelect.value;

    const grad = ctx.createRadialGradient(
      width * 0.5,
      height * 0.7,
      height * 0.05,
      width * 0.5,
      height,
      height * 0.9
    );
    grad.addColorStop(0, "rgba(8, 8, 28, 0.1)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0.85)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const barWidth = (width * 0.88) / barsCount;
    const baseX = width * 0.06;
    const baseline = height * 0.78;
    const maxBarHeight = height * 0.55;

    for (let i = 0; i < barsCount; i++) {
      const value = dataArray[i * binStep] || 0;
      const ratio = value / 255;
      const barHeight = Math.max(8, ratio * maxBarHeight);
      const x = baseX + i * barWidth;
      const y = baseline - barHeight;
      ctx.fillStyle = getThemeStyle(themeKey, ratio, i, barsCount);
      ctx.fillRect(x, y, barWidth * 0.75, barHeight);
    }

    updateLyricsForTime(audioElement ? audioElement.currentTime : 0);
    updateTimeLabel();
  }

  function stopAudio() {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    stopAnimation();
  }

  function loadAudioFromFile(file) {
    if (!file) return;
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    if (audioElement) {
      stopAudio();
      if (sourceNode) {
        sourceNode.disconnect();
      }
      audioElement = null;
      sourceNode = null;
    }

    audioUrl = URL.createObjectURL(file);
    audioElement = new Audio();
    audioElement.src = audioUrl;
    audioElement.crossOrigin = "anonymous";
    audioElement.preload = "auto";

    audioElement.addEventListener("ended", function () {
      stopAnimation();
      setStatus(false, t("statusFinished"));
    });

    audioElement.addEventListener("loadedmetadata", function () {
      updateTimeLabel();
    });

    setupAudioContext();
    connectSource();

    setStatus(false, t("statusLoaded"));
    updateTimeLabel();
  }

  function loadImageFromFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      bgImagePreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  parseLyrics();

  audioFileButton.addEventListener("click", function () {
    audioFileInput.click();
  });

  audioFileInput.addEventListener("change", function () {
    const file = audioFileInput.files && audioFileInput.files[0];
    if (!file) return;
    audioFileName.textContent = file.name;
    loadAudioFromFile(file);
  });

  imageFileButton.addEventListener("click", function () {
    imageFileInput.click();
  });

  imageFileInput.addEventListener("change", function () {
    const file = imageFileInput.files && imageFileInput.files[0];
    if (!file) return;
    imageFileName.textContent = file.name;
    loadImageFromFile(file);
  });

  themeSelect.addEventListener("change", function () {
    const label = themeSelect.options[themeSelect.selectedIndex].textContent;
    currentThemeLabel.textContent = label;
  });

  displaySizeSelect.addEventListener("change", function () {
    applyDisplaySize(displaySizeSelect.value);
  });

  reloadLyricsButton.addEventListener("click", function () {
    parseLyrics();
  });

  languageSelect.addEventListener("change", function () {
    currentLang = languageSelect.value;
    applyLanguage();
    parseLyrics();
    updateTimeLabel();
  });

  playButton.addEventListener("click", function () {
    if (!audioElement) {
      setStatus(false, t("statusLoadFirst"));
      return;
    }
    setupAudioContext();
    connectSource();

    audioCtx.resume().then(function () {
      audioElement.play().then(function () {
        setStatus(true, t("statusPlaying"));
        stopAnimation();
        drawFrame();
      }).catch(function () {
        setStatus(false, t("statusUnablePlay"));
      });
    });
  });

  pauseButton.addEventListener("click", function () {
    if (!audioElement) return;
    audioElement.pause();
    setStatus(false, t("statusPaused"));
  });

  stopButton.addEventListener("click", function () {
    if (!audioElement) return;
    audioElement.pause();
    audioElement.currentTime = 0;
    stopAnimation();
    setStatus(false, t("statusStopped"));
    updateTimeLabel();
  });

  setStatus(false, t("statusIdleNoAudio"));
})();
