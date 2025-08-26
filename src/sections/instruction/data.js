import {
  LuClipboardCheck,
  LuUserPlus,
  LuShieldCheck,
  LuRocket,
} from "react-icons/lu";

export const instructions = [
  {
    id: 1,
    title: "Step 1: Sign Up",
    desc: "Create your free account by entering your email address and choosing a secure password.",
    icon: LuUserPlus,
  },
  {
    id: 2,
    title: "Step 2: Verify Account",
    desc: "Confirm your email and complete a quick verification to keep your account secure.",
    icon: LuShieldCheck,
  },
  {
    id: 3,
    title: "Step 3: Follow Setup",
    desc: "Complete the onboarding checklist to set your preferences and enable key features.",
    icon: LuClipboardCheck,
  },
  {
    id: 4,
    title: "Step 4: Get Started",
    desc: "Start exploring the platform, create your first project, and launch with confidence.",
    icon: LuRocket,
  },
];
