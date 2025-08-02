// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Kharagpur",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Kartikeya Singh",
      background_url: "src/img/banners/Batman.gif",
      categories: [
        {
          name: "Email",
          links: [
            {
              name: "kartikeyavia2r",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "kartikeyavi",
              url: "https://mail.google.com/mail/u/1/#inbox",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "kartikeyavia2u",
              url: "https://mail.google.com/mail/u/2/#inbox",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "1906677",
              url: "https://mail.google.com/mail/u/3/#inbox",
              icon: "mail",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Workspace",
          links: [
            {
              name: "Google Chat",
              url: "https://mail.google.com/chat/u/0/#chat/home",
              icon: "message",
              icon_color: palette.green,
            },
            {
              name: "HuggingFace",
              url: "https://huggingface.co/",
              icon: "mood-happy",
              icon_color: palette.peach,
            },
            {
              name: "Canva",
              url: "https://www.canva.com/",
              icon: "photo-scan",
              icon_color: palette.blue,
            },
            {
              name: "Google Docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Artificial Intelligence",
          links: [
            {
              name: "ChatGPT",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.green,
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/app",
              icon: "brand-google",
              icon_color: palette.peach,
            },
            {
              name: "Claude",
              url: "https://claude.ai/new",
              icon: "letter-a",
              icon_color: palette.peach,
            },
            {
              name: "Grok",
              url: "https://grok.com/",
              icon: "circle-dotted-letter-g",
              icon_color: palette.white,
            },
          ],
        },
        {
          name: "Notion",
          links: [
            {
              name: "My Life OS",
              url: "https://www.notion.so/My-Life-OS-1d48ccdf9a28800983a9f184a2b99aab",
              icon: "brand-notion",
              icon_color: palette.white,
            },
            {
              name: "The Masters Plan",
              url: "https://www.notion.so/The-Master-s-Plan-2068ccdf9a288069b4fbfaa826541c0a",
              icon: "brand-notion",
              icon_color: palette.white,
            },
            {
              name: "IIT KGP",
              url: "https://www.notion.so/IIT-Kharagpur-b7b6be72722b41f4a0cd736d72f08f9e",
              icon: "brand-notion",
              icon_color: palette.white,
            },
          ],
        },
        {
          name: "Fun",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "VgList",
              url: "https://www.vglist.nl/",
              icon: "letter-v",
              icon_color: palette.purple,
            },
            {
              name: "Vegamovies",
              url: "https://www.vglist.nl/?re=vegamovies",
              icon: "letter-v",
              icon_color: palette.white,
            },
            {
              name: "ROG Movies",
              url: "https://www.vglist.nl/?re=rogmovies",
              icon: "letter-r",
              icon_color: palette.green,
            },
            {
              name: "Pahe",
              url: "https://pahe.ink/",
              icon: "letter-p",
              icon_color: palette.blue,
            },
            {
              name: "Rive",
              url: "https://rivestream.net/",
              icon: "letter-r",
              icon_color: palette.white,
            },
          ],
        },
        
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
