import Speaker2 from "@/components/icons/speaker-2";
import MapFunnel from "@/components/icons/map-funnel";
import CreditCard from "@/components/icons/credit-card";
import FormatsSelection from "@/components/icons/formats-selection";
import Cart from "@/components/icons/cart";
import Calendar from "@/components/icons/calendar";
import Pointer from "@/components/icons/pointer";
import GoalStats from "@/components/icons/goal-stats";
import Tick from "@/components/icons/tick";
// Accordion Items
import Facebook from "@/components/icons/facebook";
import Twitter from "@/components/icons/twitter";
import Instagram from "@/components/icons/instagram";
import Google from "@/components/icons/google";
import TikTok from "@/components/icons/tiktok";
import LinkedIn from "@/components/icons/LinkedIn";
import Youtube from "@/components/icons/youtube";
import Yahoo from "@/public/yahoo.svg";
import Bing from "@/public/bing.svg";
import TradeDesk from "@/public/trade-desk.svg";
import QuantCast from "@/public/quant-cast.svg";
import DisplayVideo from "@/public/display-video.svg";

export const sidebarDetails = [
  {
    icon: Speaker2,
    label: "Define campaign objective",
    extras: ["Main objective: Purchase"],
    color: "#0ABF7E",
    extrasColor: "#EBFEF4",
  },
  {
    icon: MapFunnel,
    label: "Define campaign objective",
    extras: ["Awareness · Consideration · Conversion"],
    color: "#0ABF7E",
    extrasColor: "#EBFEF4",
  },
  {
    icon: CreditCard,
    label: "Select channel mix",
    color: "#3175FF",
  },
  {
    icon: FormatsSelection,
    label: "Formats selection",
  },
  {
    icon: Cart,
    label: "Set buy objectives and types",
  },
  {
    icon: Calendar,
    label: "Plan campaign schedule",
  },
  {
    icon: Pointer,
    label: "Configure ad sets and budget",
  },
  {
    icon: GoalStats,
    label: "Establish goals",
  },
  {
    icon: Tick,
    label: "Overview of your campaign",
  },
];

export const accordionItems = {
  social_media: [
    {
      icon: Facebook,
      label: "Facebook",
    },
    {
      icon: Instagram,
      label: "Instagram",
    },
    {
      icon: TikTok,
      label: "TikTok",
    },
    {
      icon: Youtube,
      label: "Youtube",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
    },
  ],
  display_networks: [
    {
      src: TradeDesk,
      label: "TheTradeDesk",
    },
    {
      src: QuantCast,
      label: "Quantcast",
    },
    {
      src: DisplayVideo,
      label: "Display & Video",
    },
  ],
  search_engines: [
    {
      icon: Google,
      label: "Google",
    },
    {
      src: Yahoo,
      label: "Yahoo",
    },
    {
      src: Bing,
      label: "Bing",
    },
  ],
};
