document.addEventListener("DOMContentLoaded", () => {

const homeScreen = document.getElementById("home-screen");
const playersScreen = document.getElementById("players-screen");
const modeScreen = document.getElementById("mode-screen");
const packScreen = document.getElementById("pack-screen");
const gameIntroScreen = document.getElementById("game-intro-screen");
const gameScreen = document.getElementById("game-screen");
const truthDareScreen = document.getElementById("truth-dare-screen");

const settingsBtn = document.getElementById("settings-btn");
const settingsModal = document.getElementById("settings-modal");
const closeSettingsBtn = document.getElementById("close-settings-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const vibrationToggleBtn = document.getElementById("vibration-toggle-btn");
const languageSelect = document.getElementById("language-select");

const playersCloseHandle = document.getElementById("players-close-handle");

const packBackBtn = document.getElementById("pack-back-btn");
const packCards = document.querySelectorAll(".pack-card");
const packScreenTitle = document.getElementById("pack-screen-title");
const packPlayersBtn = document.getElementById("pack-players-btn");
const launchBtn = document.getElementById("launch-btn");
launchBtn.addEventListener("click", launchSelectedGame);
const introBackBtn = document.getElementById("intro-back-btn");
const introTitle = document.getElementById("intro-title");
const introTagline = document.getElementById("intro-tagline");
const introText = document.getElementById("intro-text");
const introStartBtn = document.getElementById("intro-start-btn");

const packHelpBtn = document.getElementById("pack-help-btn");

const playerInput = document.getElementById("player-input");
const addPlayerBtn = document.getElementById("add-player-btn");
const playerList = document.getElementById("player-list");
const playerCount = document.getElementById("player-count");

const modeCards = document.querySelectorAll(".mode-card");
const modeLabel = document.querySelector(".mode-label");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const gameChangePackBtn = document.getElementById("game-change-pack-btn");
const gameBackGamesBtn = document.getElementById("game-back-games-btn");

const openPlayersBtn = document.getElementById("open-players-btn");

const playerName = document.getElementById("player-name");
const cardText = document.getElementById("card-text");
const sipAmount = document.getElementById("sip-amount");

const truthBtn = document.getElementById("truth-btn");
const dareBtn = document.getElementById("dare-btn");

const truthDarePlayer = document.getElementById("truth-dare-player");
const truthDareText = document.getElementById("truth-dare-text");

const truthDareNextBtn = document.getElementById("truth-dare-next-btn");
const truthDareBackBtn = document.getElementById("truth-dare-back-btn");
const truthDareChangePackBtn = document.getElementById("truth-dare-change-pack-btn");
const truthDareBackGamesBtn = document.getElementById("truth-dare-back-games-btn");

const helpModal = document.getElementById("help-modal");
const helpTitle = document.getElementById("help-title");
const helpText = document.getElementById("help-text");
const closeHelpBtn = document.getElementById("close-help-btn");
const gameAlertModal = document.getElementById("game-alert-modal");
const gameAlertTitle = document.getElementById("game-alert-title");
const gameAlertText = document.getElementById("game-alert-text");
const closeGameAlertBtn = document.getElementById("close-game-alert-btn");
const leaveImposterModal = document.getElementById("leave-imposter-modal");
const stayImposterBtn = document.getElementById("stay-imposter-btn");
const leaveImposterBtn = document.getElementById("leave-imposter-btn");

const mainCard = document.querySelector("#game-screen .card");
const truthDareCard = document.querySelector("#truth-dare-screen .card");

const clearPlayersBtn = document.getElementById("clear-players-btn");

const playersOverlay = document.getElementById("players-overlay");

const imposterSettingsScreen = document.getElementById("imposter-settings-screen");
const imposterSettingsBackBtn = document.getElementById("imposter-settings-back-btn");
const hintToggleBtn = document.getElementById("hint-toggle-btn");
const imposterMinusBtn = document.getElementById("imposter-minus-btn");
const imposterPlusBtn = document.getElementById("imposter-plus-btn");
const imposterCountDisplay = document.getElementById("imposter-count");
const imposterSettingsContinueBtn = document.getElementById("imposter-settings-continue-btn");
const imposterRevealScreen = document.getElementById("imposter-reveal-screen");
const imposterRevealBackBtn = document.getElementById("imposter-reveal-back-btn");
const passPhoneText = document.getElementById("pass-phone-text");
const imposterRevealInstruction = document.getElementById("imposter-reveal-instruction");
const imposterRoleText = document.getElementById("imposter-role-text");
const imposterHintText = document.getElementById("imposter-hint-text");
const revealRoleBtn = document.getElementById("reveal-role-btn");
const nextImposterPlayerBtn = document.getElementById("next-imposter-player-btn");

const imposterResultBackGamesBtn = document.getElementById("imposter-result-back-games-btn");

const timerOptions = document.querySelectorAll(".timer-option");

const imposterDiscussionScreen = document.getElementById("imposter-discussion-screen");
const discussionBackBtn = document.getElementById("discussion-back-btn");
const discussionStarterName = document.getElementById("discussion-starter-name");
const discussionTimer = document.getElementById("discussion-timer");
const voteNowBtn = document.getElementById("vote-now-btn");

const imposterVoteScreen = document.getElementById("imposter-vote-screen");
const voteBackBtn = document.getElementById("vote-back-btn");
const votePlayerList = document.getElementById("vote-player-list");

const imposterResultScreen = document.getElementById("imposter-result-screen");
const imposterResultTitle = document.getElementById("imposter-result-title");
const imposterResultMessage = document.getElementById("imposter-result-message");
const imposterResultDetail = document.getElementById("imposter-result-detail");
const imposterResultContinueBtn = document.getElementById("imposter-result-continue-btn");

const wyrScreen = document.getElementById("would-you-rather-screen");
const wyrBackBtn = document.getElementById("wyr-back-btn");
const wyrPlayerName = document.getElementById("wyr-player-name");
const wyrQuestionText = document.getElementById("wyr-question-text");
const option1Btn = document.getElementById("option1-btn");
const option2Btn = document.getElementById("option2-btn");
const wyrNextBtn = document.getElementById("wyr-next-btn");
const wyrChangePackBtn = document.getElementById("wyr-change-pack-btn");
const wyrBackGamesBtn = document.getElementById("wyr-back-games-btn");

const wheelScreen = document.getElementById("dare-wheel-screen");
const wheelBackBtn = document.getElementById("wheel-back-btn");
const wheelBtn = document.getElementById("spin-wheel-btn");
const wheelResult = document.getElementById("wheel-result");
const wheel = document.getElementById("wheel");
const wheelInner = wheel.querySelector(".wheel-inner");
const wheelChangeCategoryBtn = document.getElementById("wheel-change-category-btn");
const wheelBackGamesBtn = document.getElementById("wheel-back-games-btn");

const kingCupScreen = document.getElementById("king-cup-screen");
const kingCupBackBtn = document.getElementById("king-cup-back-btn");
const kingCardCircle = document.getElementById("king-card-circle");
const kingCardName = document.getElementById("king-card-name");
const kingCardRule = document.getElementById("king-card-rule");
const kingCountText = document.getElementById("king-count-text");
const kingChangePackBtn = document.getElementById("king-change-pack-btn");
const kingBackGamesBtn = document.getElementById("king-back-games-btn");
const kingEndScreen = document.getElementById("king-cup-end-screen");
const kingEndTitle = document.getElementById("king-end-title");
const kingEndMessage = document.getElementById("king-end-message");
const kingEndDetail = document.getElementById("king-end-detail");
const kingPlayAgainBtn = document.getElementById("king-play-again-btn");
const kingEndBackGamesBtn = document.getElementById("king-end-back-games-btn");

let players = [];

function loadSavedPlayers() {
  const savedPlayers =
    localStorage.getItem("hazyPlayers") ||
    localStorage.getItem("afterhoursPlayers");

  try {
    if (savedPlayers) {
      players = JSON.parse(savedPlayers);
    }
  } catch (error) {
    players = [];
    localStorage.removeItem("hazyPlayers");
    localStorage.removeItem("afterhoursPlayers");
  }

  updatePlayerList();
}

let lastPlayer = "";
let currentMode = "sipIf";
let soundEnabled = localStorage.getItem("hazySound") !== "off";
let vibrationEnabled = localStorage.getItem("hazyVibration") !== "off";
let selectedLanguage = localStorage.getItem("hazyLanguage") || "en";
let currentPack = "classic";
let selectedPack = "";
let recentCards = [];
let imposterHintsEnabled = true;
let imposterCount = 1;
let imposterPlayers = [];
let imposterGameActive = false;
let pendingImposterLeaveScreen = null;
let imposterWord = "";
let imposterHint = "";
let currentImposterPlayerIndex = 0;
let discussionMinutes = 1;
let discussionInterval;
let discussionTimeLeft = 0;
let eliminatedPlayers = [];
let foundImposters = [];
let nextResultAction = "";
let wyrCurrentPlayer = "";
let wyrRecentCards = [];
let selectedWheelCategory = "classic";
let wheelRotation = 0;
let kingDeck = [];
let kingsDrawn = 0;

function resetGameState(options = {}) {
  clearInterval(discussionInterval);

  recentCards = [];
  wyrRecentCards = [];
  lastPlayer = "";
  nextResultAction = "";

  sipAmount.textContent = "";
  playerName.textContent = "";
  cardText.textContent = "";

  truthDarePlayer.textContent = "";
  truthDareText.textContent = "Choose Truth or Dare";
  truthBtn.style.display = "block";
  dareBtn.style.display = "block";
  truthDareNextBtn.style.display = "none";

  wyrPlayerName.style.display = "none";
  wyrQuestionText.textContent = "Pick one of the options";
  option1Btn.style.display = "none";
  option2Btn.style.display = "none";
  wyrNextBtn.style.display = "block";
  wyrNextBtn.textContent = "Next Question";

  wheelRotation = 0;
  wheelResult.textContent = "";
  wheelBtn.disabled = false;
  wheelBtn.textContent = "Spin!";

  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";
  wheelInner.style.transform = "rotate(0deg)";
  wheelInner.innerHTML = "";

  if (options.includeImposter) {
    imposterGameActive = false;
    pendingImposterLeaveScreen = null;
    imposterPlayers = [];
    foundImposters = [];
    eliminatedPlayers = [];
    currentImposterPlayerIndex = 0;
    imposterWord = "";
    imposterHint = "";
  }
}

const modeNames = {
  sipIf: "Sip If...",
  mostLikely: "Most Likely To",
  truthOrDare: "Truth or Dare",
  neverHaveIEver: "Never Have I Ever",
  imposter: "Imposter",
  wouldYouRather: "Would You Rather",
  dareRoulette: "Dare Roulette",
  kingCup: "King's Cup"
};

function showScreen(screenToShow) {
  const screens = [
    homeScreen,
    modeScreen,
    packScreen,
    gameIntroScreen,
    gameScreen,
    truthDareScreen,
    imposterSettingsScreen,
    imposterRevealScreen,
    imposterDiscussionScreen,
    imposterVoteScreen,
    imposterResultScreen,
    wyrScreen,
    wheelScreen,
    kingCupScreen,
    kingEndScreen
  ];

  screens.forEach(screen => {
    if (screen) {
      screen.classList.remove("active");
    }
  });

  if (screenToShow) {
    screenToShow.classList.add("active");
  }
}

function updatePlayerList() {
  playerList.innerHTML = "";

  playerCount.textContent = `${getText("playersCount")}: ${players.length}`;
  openPlayersBtn.textContent = `👥 ${getText("players")} (${players.length})`;
  packPlayersBtn.textContent = `👥 ${getText("players")} (${players.length})`;

  localStorage.setItem("hazyPlayers", JSON.stringify(players));

  players.forEach((player, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = player;
  
    const btn = document.createElement("button");
    btn.textContent = "×";
    btn.addEventListener("click", () => removePlayer(index));
  
    li.appendChild(span);
    li.appendChild(btn);
    playerList.appendChild(li);
  });
}

function formatPlayerName(name) {
  return name
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

let audioContext;

function playTone(frequency = 520, duration = 0.06, type = "triangle", volume = 0.025) {
  if (!soundEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioContext) {
      audioContext = new AudioContext();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration + 0.02);
  } catch (error) {
    // Sound is optional, so ignore audio errors.
  }
}

function vibrate(pattern = 15) {
  if (!vibrationEnabled) return;

  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function tapFeedback() {
  playTone(520, 0.045, "triangle", 0.02);
  vibrate(8);
}

function spinFeedback() {
  playTone(180, 0.12, "sawtooth", 0.025);
  vibrate([20, 30, 20]);
}

function resultFeedback() {
  playTone(760, 0.08, "triangle", 0.035);
  setTimeout(() => {
    playTone(980, 0.08, "triangle", 0.03);
  }, 90);
  vibrate([25, 35, 25]);
}

function warningFeedback() {
  playTone(180, 0.12, "square", 0.035);
  vibrate([60, 40, 60]);
}
const languageText = {
  en: {
    startGame: "Start Game",
    settings: "Settings",
    settingsDescription: "Customise your game experience.",
    sound: "Sound",
    soundDescription: "Button taps and game effects",
    vibration: "Vibration",
    vibrationDescription: "Phone haptics for game moments",
    language: "Language",
    languageDescription: "More full translations coming later",

    on: "ON",
    off: "OFF",

    chooseGame: "Choose Game",
    choosePack: "Choose Pack",
    pickVibes: "Pick the vibes for tonight.",
    pickChaos: "Pick how chaotic you want it.",
    launch: "Launch",

    players: "Players",
    playersCount: "Players",
    addPlayer: "Add a player",
    clearPlayers: "Clear Players",
    addPlayersTonight: "Add everyone playing tonight.",

    nextCard: "Next Card",
    nextQuestion: "Next Question",
    nextPlayer: "Next Player",
    changePack: "Change Pack",
    changeCategory: "Change Category",
    backToGames: "Back to Games",

    spin: "Spin!",
    spinning: "Spinning...",
    spinAgain: "Spin Again",

    truth: "Truth",
    dare: "Dare",
    chooseTruthOrDare: "Choose Truth or Dare",

    gotIt: "Got it",
    continue: "Continue",

    chooseAPackTitle: "Choose a pack",
    chooseAPackText: "Pick a category before launching the game.",

    duplicateNameTitle: "Name already used",
    duplicateNameText:
      "Two players have the same name! Add a nickname or initial so nobody gets confused.",

    notEnoughPlayersTitle: "Add more players",
    notEnoughPlayersText: "Add at least 2 players first.",

    comingSoonTitle: "Coming soon",
    comingSoonText: "This pack is coming soon!",

    noCards: "No cards found for this pack.",
    noTruthCards: "No truth cards found for this pack.",
    noDareCards: "No dare cards found for this pack.",
    noDares: "No dares found for this category.",
    noImposterWords: "No words found for this Imposter pack.",

    gameIntroTagline: "Quick rules before you start.",

    introSipIf:
      "Read the card out loud. Anyone the statement applies to drinks the number of sips shown in the corner.",
    introMostLikely:
      "Read the card out loud. Everyone votes for the player who fits it best. The chosen player drinks.",
    introTruthOrDare:
      "Pass the phone to the chosen player. They pick Truth or Dare. If they refuse, they drink.",
    introNeverHaveIEver:
      "Read the card out loud. Anyone who has done the statement drinks the number of sips shown in the corner.",
    introImposter:
      "Pass the phone around one player at a time. Keep your role secret. After everyone has seen their role, discuss and vote for the imposter.",
    introWouldYouRather:
      "Read the question out loud. Everyone chooses one option. The side with fewer people drinks.",
    introDareRoulette:
      "Spin the wheel. Whoever it lands on must complete the dare shown. If they refuse, they drink.",

    helpSipIf:
      "Read the card out loud. Anyone the statement applies to takes the number of sips shown on the card.",
    helpMostLikely:
      "The named player will read the card out loud and everyone votes for the player who fits it best. The chosen player drinks.",
    helpTruthOrDare:
      "The chosen player picks Truth or Dare. If they refuse to answer or complete it, they drink.",
    helpNeverHaveIEver:
      "Read the card out loud. Anyone who has done the statement takes the number of sips shown.",
    helpImposter:
      "One or more players are secretly imposters. Everyone else sees the same word. Discuss together, then vote for who you think the imposter is.",
    helpWouldYouRather:
      "Read the question out loud. Everyone chooses one of the two options. The side with fewer people drinks.",
    helpDareRoulette:
      "Choose a category, spin the wheel, and whoever the wheel lands on must do the dare shown. If they refuse, they must drink.",

    leaveImposterTitle: "Leave Imposter?",
    leaveImposterText:
      "Are you sure you want to leave? The imposter hasn’t been found yet!",
    stayInGame: "Stay in Game",
    leaveGame: "Leave Game",

    passPhoneTo: "PASS THE PHONE TO",
    makeSureNobodyLooking: "Make sure nobody else is looking",
    secretRole: "SECRET ROLE",
    youAreImposter: "You are the Imposter",
    hintLabel: "Hint",
    categoryLabel: "Category",
    keepThisSecret: "KEEP THIS SECRET",
    
    playersWin: "Players Win!",
    imposterFound: "Imposter Found!",
    wrongVote: "Wrong Vote!",
    wasTheImposter: "was the imposter.",
    wasAnImposter: "was an imposter.",
    wasNotImposter: "was NOT an imposter.",
    hasBeenEliminated: "has been eliminated.",
    secretWordWas: "The secret word was:",
    imposterLeft: "imposter left.",

    dareResultMust: "must",

    introKingCup:
    "Pass the phone around. Have an empty cup to hand. Drag the top card away from the deck to reveal it. Follow the card rule. The 4th King drinks the King’s Cup.",
  kingCupDrag: "Drag the card to reveal your rule.",
  kingCupDrawCard: "Draw a card",
  kingCupDragInstruction: "Drag the card away from the deck.",
  kingCupKingsDrawn: "Kings drawn",
  kingCupDeckEmpty: "Deck finished!",

  playAgain: "Play Again",

helpKingCup:
  "Drag any card from the circle to reveal it. Follow the rule shown. The player who pulls the 4th King drinks the King’s Cup.",

kingCupEndTitle: "Final King! 👑",
kingCupEndMessage: "The King’s Cup has been claimed.",
kingCupEndDetail: "Whoever pulled the 4th King drinks the King’s Cup."

  },

  es: {},
  fr: {},
  de: {},
  it: {},
  pt: {},
  nl: {},
  pl: {}
};

function getText(key) {
  return languageText[selectedLanguage]?.[key] || languageText.en[key] || key;
}

function updateToggleButton(button, isEnabled) {
  button.textContent = isEnabled ? getText("on") : getText("off");
  button.classList.toggle("active", isEnabled);
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function applySettingsToUI() {
  updateToggleButton(soundToggleBtn, soundEnabled);
  updateToggleButton(vibrationToggleBtn, vibrationEnabled);

  languageSelect.value = selectedLanguage;

  settingsBtn.setAttribute("aria-label", getText("settings"));

  setText("settings-title", getText("settings"));
  setText("settings-description", getText("settingsDescription"));

  setText("sound-label", getText("sound"));
  setText("sound-description", getText("soundDescription"));
  setText("vibration-label", getText("vibration"));
  setText("vibration-description", getText("vibrationDescription"));
  setText("language-label", getText("language"));
  setText("language-description", getText("languageDescription"));

  setText("choose-game-title", getText("chooseGame"));

  packScreenTitle.textContent = modeNames[currentMode] || getText("choosePack");
  launchBtn.textContent = getText("launch");

  openPlayersBtn.textContent = `👥 ${getText("players")} (${players.length})`;
  packPlayersBtn.textContent = `👥 ${getText("players")} (${players.length})`;

  nextBtn.textContent = getText("nextCard");
  gameChangePackBtn.textContent = getText("changePack");
  gameBackGamesBtn.textContent = getText("backToGames");

  truthBtn.textContent = getText("truth");
  dareBtn.textContent = getText("dare");
  truthDareNextBtn.textContent = getText("nextPlayer");
  truthDareChangePackBtn.textContent = getText("changePack");
  truthDareBackGamesBtn.textContent = getText("backToGames");

  wyrNextBtn.textContent = getText("nextQuestion");
  wyrChangePackBtn.textContent = getText("changePack");
  wyrBackGamesBtn.textContent = getText("backToGames");

  wheelChangeCategoryBtn.textContent = getText("changeCategory");
  wheelBackGamesBtn.textContent = getText("backToGames");

  if (!wheelBtn.disabled && wheelBtn.textContent !== getText("spinAgain")) {
    wheelBtn.textContent = getText("spin");
  }
}

function openSettings() {
  applySettingsToUI();
  settingsModal.classList.remove("hidden");
}

function closeSettings() {
  settingsModal.classList.add("hidden");
}

function showGameAlert(title, message) {
  warningFeedback();
  gameAlertTitle.textContent = title;
  gameAlertText.textContent = message;
  gameAlertModal.classList.remove("hidden");
}

function closeGameAlert() {
  gameAlertModal.classList.add("hidden");
}

function addPlayer() {
  let name = playerInput.value.trim();

  if (name === "") return;

  name = formatPlayerName(name);

  const nameAlreadyExists = players.some(player => {
    return player.toLowerCase() === name.toLowerCase();
  });

  if (nameAlreadyExists) {
    showGameAlert(
      getText("duplicateNameTitle"),
      getText("duplicateNameText")
    );
    return;
  }

  players.push(name);
  playerInput.value = "";

  updatePlayerList();
}

function askToLeaveImposter(targetScreen) {
  if (!imposterGameActive) {
    showScreen(targetScreen);
    return;
  }

  warningFeedback();
pendingImposterLeaveScreen = targetScreen;
leaveImposterModal.classList.remove("hidden");
}

function closeLeaveImposterModal() {
  leaveImposterModal.classList.add("hidden");
  pendingImposterLeaveScreen = null;
}

function confirmLeaveImposter() {
  imposterGameActive = false;
  foundImposters = [];
  eliminatedPlayers = [];
  imposterPlayers = [];
  currentImposterPlayerIndex = 0;
  clearInterval(discussionInterval);

  leaveImposterModal.classList.add("hidden");

  if (pendingImposterLeaveScreen) {
    showScreen(pendingImposterLeaveScreen);
  }

  pendingImposterLeaveScreen = null;
}
function removePlayer(index) {
  players.splice(index, 1);
  updatePlayerList();
}

function getRandomPlayer() {
  if (players.length === 1) {
    return players[0];
  }

  let randomPlayer;

  do {
    const randomIndex = Math.floor(Math.random() * players.length);
    randomPlayer = players[randomIndex];
  } while (randomPlayer === lastPlayer);

  lastPlayer = randomPlayer;

  return randomPlayer;
}

function getRandomDifferentPlayer(...avoidNames) {
  const blockedNames = avoidNames
    .filter(Boolean)
    .map(name => String(name).toLowerCase());

  const availablePlayers = players.filter(player => {
    return !blockedNames.includes(player.toLowerCase());
  });

  const playerPool = availablePlayers.length > 0 ? availablePlayers : players;

  if (playerPool.length === 0) {
    return "someone";
  }

  const randomIndex = Math.floor(Math.random() * playerPool.length);
  return playerPool[randomIndex];
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function highlightedPlayerHTML(name) {
  return `<span class="player-highlight">${escapeHTML(name)}</span>`;
}

function getPersonalisedPromptHTML(prompt, avoidName = "") {
  const playerOne = getRandomDifferentPlayer(avoidName);
  const playerTwo = getRandomDifferentPlayer(avoidName, playerOne);

  let html = escapeHTML(prompt);

  html = html.split("{player2}").join(highlightedPlayerHTML(playerTwo));
  html = html.split("{player}").join(highlightedPlayerHTML(playerOne));

  return html;
}

function showPersonalisedPrompt(element, prompt, avoidName = "") {
  element.innerHTML = getPersonalisedPromptHTML(prompt, avoidName);
}

function animateCard(cardElement) {
  cardElement.classList.remove("card-change");

  void cardElement.offsetWidth;

  cardElement.classList.add("card-change");
}

function getRandomCard() {
  const selectedCards = gameCards[currentMode]?.[currentPack];

  if (!selectedCards || selectedCards.length === 0) {
    sipAmount.style.display = "none";
    playerName.style.display = "none";
    cardText.textContent = "No cards found for this pack.";
    return;
  }

  let chosenCard;

  do {
    const randomCardIndex = Math.floor(Math.random() * selectedCards.length);
    chosenCard = selectedCards[randomCardIndex];
  } while (
    recentCards.includes(chosenCard) &&
    selectedCards.length > recentCards.length
  );

  recentCards.push(chosenCard);

  if (recentCards.length > 6) {
    recentCards.shift();
  }

  const randomSips = Math.floor(Math.random() * 3) + 1;
  let currentCardPlayer = "";

  if (currentMode === "neverHaveIEver") {
    sipAmount.style.display = "block";
    sipAmount.textContent = `🥃 IF YOU HAVE: ${randomSips} SIP${randomSips > 1 ? "S" : ""}`;
    playerName.style.display = "none";
  } else {
    sipAmount.style.display = "block";
    sipAmount.textContent = `🥃 ${randomSips} SIP${randomSips > 1 ? "S" : ""}`;

    currentCardPlayer = getRandomPlayer();
    playerName.style.display = "block";
    playerName.textContent = currentCardPlayer;
  }

  showPersonalisedPrompt(cardText, chosenCard, currentCardPlayer);
  animateCard(mainCard);
}

function setupTruthDarePlayer() {
  if (players.length === 0) return;

  truthDarePlayer.textContent = getRandomPlayer();
  truthDareText.textContent = "Choose Truth or Dare";

  truthBtn.style.display = "block";
  dareBtn.style.display = "block";
  truthDareNextBtn.style.display = "none";

  animateCard(truthDareCard);
}

function clearPackSelection() {
  selectedPack = "classic";
  launchBtn.disabled = false;

  packCards.forEach(pack => {
    pack.classList.remove("selected");

    if (pack.dataset.pack === "classic") {
      pack.classList.add("selected");
    }
  });
}

function selectPack(packButton) {
  if (packButton.classList.contains("locked")) {
    showGameAlert(getText("comingSoonTitle"), getText("comingSoonText"));
    return;
  }

  selectedPack = packButton.dataset.pack;

  packCards.forEach(pack => {
    pack.classList.remove("selected");
  });

  packButton.classList.add("selected");
  launchBtn.disabled = false;
}

function startImposterGame() {
  imposterGameActive = true;
  foundImposters = [];
  eliminatedPlayers = [];

  const words = gameCards.imposter?.[currentPack];

  if (!words || words.length === 0) {
    showGameAlert(getText("comingSoonTitle"), getText("noImposterWords"));
return;
  }

  const randomWordIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomWordIndex];

  imposterWord = selectedWord.word;
  imposterHint = selectedWord.hint;

  imposterPlayers = players.map(player => ({
    name: player,
    isImposter: false
  }));

  const shuffledPlayers = [...imposterPlayers].sort(() => Math.random() - 0.5);

  for (let i = 0; i < imposterCount; i++) {
    shuffledPlayers[i].isImposter = true;
  }

  currentImposterPlayerIndex = 0;
  showImposterPlayer();
  showScreen(imposterRevealScreen);
}

function showImposterPlayer() {
  const currentPlayer = imposterPlayers[currentImposterPlayerIndex];

  passPhoneText.textContent = `PASS THE PHONE TO ${currentPlayer.name.toUpperCase()}`;
  imposterRevealInstruction.textContent = "Make sure nobody else is looking";
  imposterRoleText.textContent = "SECRET ROLE";
  imposterRoleText.classList.add("hidden-role");
  imposterHintText.textContent = "";

  revealRoleBtn.classList.remove("hidden");
  nextImposterPlayerBtn.classList.add("hidden");
}

function launchSelectedGame() {
  if (!selectedPack) {
    showGameAlert(getText("chooseAPackTitle"), getText("chooseAPackText"));
    return;
  }

  currentPack = selectedPack;
  resetGameState();

  showGameIntro();
}

function showGameIntro() {
  introTitle.textContent = modeNames[currentMode] || "Game";
  introTagline.textContent = getText("gameIntroTagline");

  const introTextByMode = {
    sipIf: getText("introSipIf"),
    mostLikely: getText("introMostLikely"),
    truthOrDare: getText("introTruthOrDare"),
    neverHaveIEver: getText("introNeverHaveIEver"),
    imposter: getText("introImposter"),
    wouldYouRather: getText("introWouldYouRather"),
    dareRoulette: getText("introDareRoulette"),
    kingCup: getText("introKingCup")
  };

  introText.textContent = introTextByMode[currentMode] || "";

  introStartBtn.textContent = getText("startGame");

  showScreen(gameIntroScreen);
}

function startGameFromIntro() {
  if (currentMode === "imposter") {
    startImposterGame();
    return;
  }

  if (currentMode === "truthOrDare") {
    setupTruthDarePlayer();
    showScreen(truthDareScreen);
    return;
  }

  if (currentMode === "wouldYouRather") {
    setupWYRPlayer();
    showScreen(wyrScreen);
    return;
  }

  if (currentMode === "dareRoulette") {
    selectedWheelCategory = currentPack;

    if (!setupWheel()) return;

    showScreen(wheelScreen);
    return;
  }

  if (currentMode === "kingCup") {
    setupKingCup();
    showScreen(kingCupScreen);
    return;
  }

  modeLabel.textContent = modeNames[currentMode];
  showScreen(gameScreen);
  getRandomCard();
}

document.addEventListener("click", event => {
  if (event.target.closest("button")) {
    tapFeedback();
  }
});

settingsBtn.addEventListener("click", openSettings);

closeSettingsBtn.addEventListener("click", closeSettings);

closeGameAlertBtn.addEventListener("click", closeGameAlert);

settingsModal.addEventListener("click", event => {
  if (event.target === settingsModal) {
    closeSettings();
  }
});

gameAlertModal.addEventListener("click", event => {
  if (event.target === gameAlertModal) {
    closeGameAlert();
  }
});

soundToggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("hazySound", soundEnabled ? "on" : "off");
  applySettingsToUI();
});

vibrationToggleBtn.addEventListener("click", () => {
  vibrationEnabled = !vibrationEnabled;
  localStorage.setItem("hazyVibration", vibrationEnabled ? "on" : "off");
  applySettingsToUI();
});

languageSelect.addEventListener("change", () => {
  selectedLanguage = languageSelect.value;
  localStorage.setItem("hazyLanguage", selectedLanguage);
  applySettingsToUI();
});

introStartBtn.addEventListener("click", () => {
  startGameFromIntro();
});

introBackBtn.addEventListener("click", () => {
  showScreen(packScreen);
});

addPlayerBtn.addEventListener("click", addPlayer);

playerInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addPlayer();
  }
});

playersCloseHandle.addEventListener("click", () => {
  closePlayersSheet();
});

playersOverlay.addEventListener("click", () => {
  closePlayersSheet();
});

modeCards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("locked")) {
      showGameAlert(getText("comingSoonTitle"), getText("comingSoonText"));
      return;
    }

    if (players.length < 2) {
      showGameAlert(getText("notEnoughPlayersTitle"), getText("notEnoughPlayersText"));
      openPlayersSheet();
      return;
    }

    currentMode = card.dataset.mode;
    currentPack = "classic";

    packScreenTitle.textContent = modeNames[currentMode];
    clearPackSelection();

    if (currentMode === "imposter") {
      showScreen(imposterSettingsScreen);
      return;
    }

    if (card.dataset.mode === "wouldYouRather") {
      currentMode = "wouldYouRather";
      currentPack = "classic";
      packScreenTitle.textContent = "Would You Rather";
      clearPackSelection();
      showScreen(packScreen);
      return;
    }

    showScreen(packScreen);
  });
});

packCards.forEach(pack => {
  pack.addEventListener("click", () => {
    selectPack(pack);
  });
});

// =====================
// DARE ROULETTE
// =====================

function getRandomDare(category) {
  const selectedDares = gameCards.dareRoulette?.[category];

  if (!selectedDares || selectedDares.length === 0) {
    return getText("noDares");
  }

  const randomIndex = Math.floor(Math.random() * selectedDares.length);
  return selectedDares[randomIndex];
}

function renderWheel() {
  wheelInner.innerHTML = "";

  const segmentAngle = 360 / players.length;

  const colours = [
    "#ff2bd6",
    "#00e5ff",
    "#8b5cf6",
    "#ff8c00",
    "#12ffb5",
    "#ff4fd8"
  ];

  const gradientParts = [];

  players.forEach((player, index) => {
    const start = index * segmentAngle;
    const end = start + segmentAngle;
    const middle = start + segmentAngle / 2;

    const colour = colours[index % colours.length];
    const softenEdge = Math.min(0.8, segmentAngle / 8);
    
    gradientParts.push(
      `${colour} ${start + softenEdge}deg ${end - softenEdge}deg`
    );

    const label = document.createElement("div");
    label.classList.add("wheel-segment");

    const radius = 30;
    const radians = (middle * Math.PI) / 180;

    const x = 50 + Math.sin(radians) * radius;
    const y = 50 - Math.cos(radians) * radius;

    label.style.left = `${x}%`;
    label.style.top = `${y}%`;

    const labelText = document.createElement("span");

    let displayName = player;

    if (player.length > 8) {
      displayName = player.slice(0, 7) + "…";
      labelText.classList.add("small-wheel-name");
    }

    labelText.textContent = displayName;

    label.appendChild(labelText);
    wheelInner.appendChild(label);
  });

  wheel.style.background = `conic-gradient(${gradientParts.join(", ")})`;
}

function setupWheel() {
  if (players.length < 2) {
    alert("Add at least 2 players first.");
    return false;
  }

  renderWheel();

  wheelRotation = 0;
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";
  wheelInner.style.transform = "rotate(0deg)";
  wheelResult.textContent = "";
  wheelBtn.disabled = false;

  // Forces the browser to apply the reset before the next spin
  void wheel.offsetWidth;

  return true;
}

function openDareRoulette() {
  selectedWheelCategory = selectedPack;
  currentPack = selectedPack;

  if (!setupWheel()) return;

  showScreen(wheelScreen);
}

wheelBtn.addEventListener("click", () => {
  if (players.length < 2) {
    alert("Add at least 2 players first.");
    return;
  }

  spinFeedback();

  wheelBtn.disabled = true;
  wheelBtn.textContent = "Spinning...";
  wheelResult.textContent = "Spinning...";

  const chosenIndex = Math.floor(Math.random() * players.length);
  const chosenPlayer = players[chosenIndex];
  const randomDare = getRandomDare(selectedWheelCategory);

  const segmentAngle = 360 / players.length;
  const chosenSegmentMiddle = chosenIndex * segmentAngle + segmentAngle / 2;

  // The pointer is at the TOP of the wheel, which is 0 degrees.
  const pointerAngle = 0;

  const currentRotation = ((wheelRotation % 360) + 360) % 360;

  let targetRotation = pointerAngle - chosenSegmentMiddle - currentRotation;

  while (targetRotation < 0) {
    targetRotation += 360;
  }

  const extraSpins = (Math.floor(Math.random() * 3) + 5) * 360;

  wheelRotation += extraSpins + targetRotation;

  wheel.style.transition = "transform 3s cubic-bezier(0.33, 1, 0.68, 1)";
  wheel.style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    resultFeedback();
    wheelResult.innerHTML = `${highlightedPlayerHTML(chosenPlayer)} ${getText("dareResultMust")}: ${getPersonalisedPromptHTML(randomDare, chosenPlayer)}`;
    wheelBtn.disabled = false;
    wheelBtn.textContent = getText("spinAgain");
  }, 3000);
});

wheelBackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

wheelChangeCategoryBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

wheelBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

truthBtn.addEventListener("click", () => {
  const truths = gameCards.truthOrDare?.[currentPack]?.truths || [];

  if (truths.length === 0) {
    truthDareText.textContent = getText("noTruthCards");
    return;
  }

  const randomIndex = Math.floor(Math.random() * truths.length);

  showPersonalisedPrompt(truthDareText, truths[randomIndex], truthDarePlayer.textContent);
  animateCard(truthDareCard);

  truthBtn.style.display = "none";
  dareBtn.style.display = "none";
  truthDareNextBtn.style.display = "block";
});

dareBtn.addEventListener("click", () => {
  const dares = gameCards.truthOrDare?.[currentPack]?.dares || [];

  if (dares.length === 0) {
    truthDareText.textContent = getText("noDareCards");
    return;
  }

  const randomIndex = Math.floor(Math.random() * dares.length);

  showPersonalisedPrompt(
    truthDareText,
    dares[randomIndex],
    truthDarePlayer.textContent
  );

  animateCard(truthDareCard);

  truthBtn.style.display = "none";
  dareBtn.style.display = "none";
  truthDareNextBtn.style.display = "block";
});

// =====================
// KING'S CUP
// =====================

function createKingDeck() {
  const suits = ["♥", "♦", "♣", "♠"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const deck = [];

  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({
        id: `${rank}${suit}`,
        rank,
        suit,
        colour: suit === "♥" || suit === "♦" ? "red" : "black",
        pulled: false
      });
    });
  });

  return deck;
}

function shuffleDeck(deck) {
  const shuffled = [...deck];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function setupKingCup() {
  kingDeck = shuffleDeck(createKingDeck());
  kingsDrawn = 0;

  kingCardName.textContent = "Choose a card";
  kingCardRule.textContent = "Drag a card from the circle to reveal the rule.";
  kingCountText.textContent = `${getText("kingCupKingsDrawn")}: 0 / 4`;

  renderKingCircle();
}

function renderKingCircle() {
  kingCardCircle.innerHTML = "";

  const totalCards = kingDeck.length;
  const radius = 39;

  kingDeck.forEach((card, index) => {
    const cardElement = document.createElement("button");
    cardElement.type = "button";
    cardElement.className = "king-circle-card";

    const angle = (360 / totalCards) * index - 90;
    const radians = (angle * Math.PI) / 180;

    const x = 50 + Math.cos(radians) * radius;
    const y = 50 + Math.sin(radians) * radius;

    const baseRotation = angle + 90;

    cardElement.style.left = `${x}%`;
    cardElement.style.top = `${y}%`;
    cardElement.dataset.baseRotation = baseRotation;
    cardElement.style.transform = `translate(-50%, -50%) rotate(${baseRotation}deg)`;

    if (card.pulled) {
      cardElement.classList.add("pulled");
    }

    cardElement.innerHTML = getKingBackHTML();

    if (!card.pulled) {
      addKingCardDrag(cardElement, card);
    }

    kingCardCircle.appendChild(cardElement);
  });
}

function getKingBackHTML() {
  return `
    <div class="king-card-back-face">
      <div class="king-card-back-inner">
        <span class="king-card-back-ah">AH</span>
      </div>
    </div>
  `;
}

function getKingFrontHTML(card) {
  return `
    <div class="king-card-front-face ${card.colour}">
      <span class="king-card-corner top-left">${card.rank}${card.suit}</span>
      <span class="king-card-suit-center">${card.suit}</span>
      <span class="king-card-corner bottom-right">${card.rank}${card.suit}</span>
    </div>
  `;
}

function addKingCardDrag(cardElement, card) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let dragX = 0;
  let dragY = 0;

  cardElement.addEventListener("pointerdown", event => {
    if (card.pulled) return;

    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    dragX = 0;
    dragY = 0;

    cardElement.setPointerCapture(event.pointerId);
    cardElement.classList.add("dragging");
  });

  cardElement.addEventListener("pointermove", event => {
    if (!isDragging) return;

    dragX = event.clientX - startX;
    dragY = event.clientY - startY;

    const baseRotation = Number(cardElement.dataset.baseRotation);
    const extraTilt = dragX / 10;

    cardElement.style.transform =
      `translate(calc(-50% + ${dragX}px), calc(-50% + ${dragY}px)) rotate(${baseRotation + extraTilt}deg)`;
  });

  function resetCardPosition() {
    const baseRotation = Number(cardElement.dataset.baseRotation);
    cardElement.style.transform = `translate(-50%, -50%) rotate(${baseRotation}deg)`;
  }

  cardElement.addEventListener("pointerup", () => {
    if (!isDragging) return;

    isDragging = false;
    cardElement.classList.remove("dragging");

    const distance = Math.sqrt(dragX * dragX + dragY * dragY);

    if (distance > 85) {
      pullKingCard(card, cardElement, dragX, dragY);
      return;
    }

    resetCardPosition();
  });

  cardElement.addEventListener("pointercancel", () => {
    isDragging = false;
    cardElement.classList.remove("dragging");
    resetCardPosition();
  });
}

function pullKingCard(card, cardElement, dragX, dragY) {
  if (card.pulled) return;

  card.pulled = true;

  let isFinalKing = false;

  if (card.rank === "K") {
    kingsDrawn++;

    if (kingsDrawn === 4) {
      isFinalKing = true;
    }
  }

  const rules =
    gameCards.kingCup?.[currentPack]?.rules ||
    gameCards.kingCup?.classic?.rules ||
    {};

  let ruleText = rules[card.rank] || getText("noCards");

  if (isFinalKing) {
    ruleText = `${ruleText} 👑 Final King! Drink the King’s Cup.`;
  }

  kingCardName.textContent = `${card.rank}${card.suit}`;
  kingCardRule.textContent = ruleText;
  kingCountText.textContent = `${getText("kingCupKingsDrawn")}: ${kingsDrawn} / 4`;

  cardElement.innerHTML = getKingFrontHTML(card);
  cardElement.classList.add("revealed");

  const baseRotation = Number(cardElement.dataset.baseRotation);
  const extraTilt = dragX / 8;

  cardElement.style.transform =
    `translate(calc(-50% + ${dragX * 1.2}px), calc(-50% + ${dragY * 1.2}px)) rotate(${baseRotation + extraTilt}deg)`;

  resultFeedback();

  setTimeout(() => {
    cardElement.classList.add("pulled");
  }, 120);

  if (isFinalKing) {
    setTimeout(() => {
      showKingCupEndScreen();
    }, 900);

    return;
  }

  const remainingCards = kingDeck.filter(deckCard => !deckCard.pulled);

  if (remainingCards.length === 0) {
    showKingCupEndScreen();
  }
}

function showKingCupEndScreen() {
  kingEndTitle.textContent = getText("kingCupEndTitle");
  kingEndMessage.textContent = getText("kingCupEndMessage");
  kingEndDetail.textContent = getText("kingCupEndDetail");

  showScreen(kingEndScreen);
}

kingCupBackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

kingChangePackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

kingBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

kingPlayAgainBtn.addEventListener("click", () => {
  resetGameState();
  setupKingCup();
  showScreen(kingCupScreen);
});

kingEndBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

function openHelpModal() {
  helpTitle.textContent = modeNames[currentMode] || "How to Play";

  const helpTextByMode = {
    sipIf: getText("helpSipIf"),
    mostLikely: getText("helpMostLikely"),
    truthOrDare: getText("helpTruthOrDare"),
    neverHaveIEver: getText("helpNeverHaveIEver"),
    imposter: getText("helpImposter"),
    wouldYouRather: getText("helpWouldYouRather"),
    dareRoulette: getText("helpDareRoulette"),
    kingCup: getText("helpKingCup")
  };

  helpText.textContent = helpTextByMode[currentMode] || "";
  closeHelpBtn.textContent = getText("gotIt");

  helpModal.classList.remove("hidden");
}

truthDareNextBtn.addEventListener("click", () => {
  setupTruthDarePlayer();
});

truthDareBackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

truthDareChangePackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

truthDareBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

packBackBtn.addEventListener("click", () => {
  closePlayersSheet(); 
  showScreen(modeScreen);
});

nextBtn.addEventListener("click", () => {
  getRandomCard();
});

backBtn.addEventListener("click", () => {
  closePlayersSheet();
  resetGameState();
  showScreen(packScreen);
});

gameChangePackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

gameBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

openPlayersBtn.addEventListener("click", () => {
  openPlayersSheet();
});

packPlayersBtn.addEventListener("click", () => {
  openPlayersSheet();
});

clearPlayersBtn.addEventListener("click", () => {
  players = [];
  localStorage.removeItem("hazyPlayers");
  updatePlayerList();
});

packHelpBtn.addEventListener("click", openHelpModal);

closeHelpBtn.addEventListener("click", () => {
  helpModal.classList.add("hidden");
});

function openPlayersSheet() {
  playersScreen.classList.add("show");
  playersOverlay.classList.add("show");
}

function closePlayersSheet() {
  playersScreen.classList.remove("show");
  playersOverlay.classList.remove("show");
}

hintToggleBtn.addEventListener("click", () => {
  imposterHintsEnabled = !imposterHintsEnabled;

  hintToggleBtn.textContent = imposterHintsEnabled ? "ON" : "OFF";
  hintToggleBtn.classList.toggle("active", imposterHintsEnabled);
});

imposterMinusBtn.addEventListener("click", () => {
  if (imposterCount > 1) {
    imposterCount--;
    imposterCountDisplay.textContent = imposterCount;
  }
});

imposterPlusBtn.addEventListener("click", () => {
  const maxImposters = Math.max(1, players.length - 1);

  if (imposterCount < maxImposters) {
    imposterCount++;
    imposterCountDisplay.textContent = imposterCount;
  }
});

imposterSettingsBackBtn.addEventListener("click", () => {
  showScreen(modeScreen);
});

imposterSettingsContinueBtn.addEventListener("click", () => {
  packScreenTitle.textContent = "Imposter";
  clearPackSelection();
  showScreen(packScreen);
});

revealRoleBtn.addEventListener("click", () => {
  const currentPlayer = imposterPlayers[currentImposterPlayerIndex];

  imposterRoleText.classList.remove("hidden-role");

  if (currentPlayer.isImposter) {
    imposterRoleText.textContent = "You are the Imposter";

    if (imposterHintsEnabled) {
      imposterHintText.textContent = `Hint: ${imposterHint}`;
    }
  } else {
    imposterRoleText.textContent = imposterWord;
    imposterHintText.textContent = `Category: ${imposterHint}`;
  }

  imposterRevealInstruction.textContent =
  "KEEP THIS SECRET";
  resultFeedback();
  revealRoleBtn.classList.add("hidden");
  nextImposterPlayerBtn.classList.remove("hidden");
});

nextImposterPlayerBtn.addEventListener("click", () => {
  currentImposterPlayerIndex++;

  if (currentImposterPlayerIndex >= imposterPlayers.length) {
    startDiscussionScreen();
    return;
  }

  showImposterPlayer();
});

imposterRevealBackBtn.addEventListener("click", () => {
  askToLeaveImposter(packScreen);
});

timerOptions.forEach(option => {
  option.addEventListener("click", () => {
    discussionMinutes = Number(option.dataset.minutes);

    timerOptions.forEach(btn => {
      btn.classList.remove("active");
    });

    option.classList.add("active");
  });
});

function startDiscussionScreen() {
  const randomIndex = Math.floor(Math.random() * players.length);
  const startingPlayer = players[randomIndex];

  discussionStarterName.textContent = startingPlayer;

  discussionTimeLeft = discussionMinutes * 60;
  updateDiscussionTimer();

  clearInterval(discussionInterval);

  discussionInterval = setInterval(() => {
    discussionTimeLeft--;
    updateDiscussionTimer();

    if (discussionTimeLeft <= 0) {
      clearInterval(discussionInterval);
    }
  }, 1000);

  showScreen(imposterDiscussionScreen);
}

function updateDiscussionTimer() {
  const minutes = Math.floor(discussionTimeLeft / 60);
  const seconds = discussionTimeLeft % 60;

  discussionTimer.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

discussionBackBtn.addEventListener("click", () => {
  askToLeaveImposter(modeScreen);
});

voteNowBtn.addEventListener("click", () => {
  clearInterval(discussionInterval);
  showVoteScreen();
});

voteBackBtn.addEventListener("click", () => {
  startDiscussionScreen();
});

function showVoteScreen() {
  votePlayerList.innerHTML = "";

  imposterPlayers
    .filter(player => !foundImposters.includes(player.name))
    .forEach(player => {
      const button = document.createElement("button");

      button.className = "mode-card";
      button.textContent = player.name;

      if (eliminatedPlayers.includes(player.name)) {
        button.disabled = true;
        button.style.opacity = "0.4";
        button.textContent += " (ELIMINATED)";
      } else {
        button.addEventListener("click", () => {
          handleImposterVote(player);
        });
      }

      votePlayerList.appendChild(button);
    });

  showScreen(imposterVoteScreen);
}

function handleImposterVote(votedPlayer) {
  if (votedPlayer.isImposter) {
    foundImposters.push(votedPlayer.name);

    if (foundImposters.length >= imposterCount) {
      showImposterResult(
        "Players Win!",
        `${votedPlayer.name} was the imposter.`,
        `The secret word was: ${imposterWord}`,
        "end"
      );
      return;
    }

    showImposterResult(
      "Imposter Found!",
      `${votedPlayer.name} was an imposter.`,
      `${imposterCount - foundImposters.length} imposter left.`,
      "continue"
    );
    return;
  }

  eliminatedPlayers.push(votedPlayer.name);

  showImposterResult(
    "Wrong Vote!",
    `${votedPlayer.name} was NOT an imposter.`,
    `${votedPlayer.name} has been eliminated.`,
    "continue"
  );
}

function showImposterResult(title, message, detail, nextAction) {
  imposterResultTitle.textContent = title;
  imposterResultMessage.textContent = message;
  imposterResultDetail.textContent = detail;
  nextResultAction = nextAction;

  if (nextAction === "end") {
    imposterResultContinueBtn.textContent = getText("playAgain");
  } else {
    imposterResultContinueBtn.textContent = getText("continue");
  }

  showScreen(imposterResultScreen);
}

imposterResultContinueBtn.addEventListener("click", () => {
  if (nextResultAction === "end") {
    resetGameState({ includeImposter: true });
    startImposterGame();
    return;
  }

  startDiscussionScreen();
});

imposterResultBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);
});

function setupWYRPlayer() {
  const selectedCards = gameCards.wouldYouRather?.[currentPack];

  if (!selectedCards || selectedCards.length === 0) {
    playerName.textContent = "";
    cardText.textContent = getText("noCards");
    return;
  }

  let chosenCard;

  do {
    const randomIndex = Math.floor(Math.random() * selectedCards.length);
    chosenCard = selectedCards[randomIndex];
  } while (
    wyrRecentCards.includes(chosenCard) &&
    selectedCards.length > wyrRecentCards.length
  );

  wyrRecentCards.push(chosenCard);

  if (wyrRecentCards.length > 6) {
    wyrRecentCards.shift();
  }

  wyrPlayerName.style.display = "none";

  showPersonalisedPrompt(wyrQuestionText, chosenCard);

  option1Btn.style.display = "none";
  option2Btn.style.display = "none";

  wyrNextBtn.style.display = "block";
  wyrNextBtn.textContent = "Next Question";
}

wyrNextBtn.addEventListener("click", () => {
  setupWYRPlayer();
});

wyrBackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

wyrChangePackBtn.addEventListener("click", () => {
  resetGameState();
  showScreen(packScreen);
});

wyrBackGamesBtn.addEventListener("click", () => {
  resetGameState({ includeImposter: true });
  showScreen(modeScreen);

  
});

loadSavedPlayers();
applySettingsToUI();

});