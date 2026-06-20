import { brandName, flagshipProductName } from "@/config/site-values";
import { founderProfileImage } from "@/config/leadership";

export const homeFounderVisionCopy = {
  eyebrow: "Founder",
  sectionTitle: "Ideas deserve production-grade software",
  message: `At ${brandName}, we build AI-native products that solve real problems — for businesses and communities. Through product engineering and platforms like ${flagshipProductName}, we turn complex ideas into software people rely on.`,
  name: "Santosh Kumar Varada",
  roleTitle: "Founder, CEO & Managing Director",
  image: founderProfileImage,
      cta: { label: "Read founder story", href: "/founder" },
} as const;
