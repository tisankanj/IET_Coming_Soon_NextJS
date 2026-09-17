import Image from "next/image";
import { cn } from "cn";

import { GearRing } from "@/components/brand/gear-ring";
import { SITE_IMAGES, type SiteImageKey } from "@/config/images";

type SiteImageProps = {
  image: SiteImageKey;
  sizes: string;
  preload?: boolean;
  className?: string;
  // Initials shown on portrait placeholders until the real photo arrives.
  monogram?: string;
};

// Fills its positioned parent. The parent sets the size and aspect ratio, so real images and
// placeholders take exactly the same space and nothing shifts when a photo arrives.
export function SiteImage({ image, sizes, preload = false, className, monogram }: SiteImageProps) {
  const entry = SITE_IMAGES[image];

  if (!entry.ready) {
    return (
      <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden bg-midnight-900", className)}>
        <div className="absolute inset-0 tech-grid opacity-70" />
        <GearRing className="absolute -right-[18%] -bottom-[22%] w-[78%] text-white/[0.07]" strokeWidth={3} />
        {monogram && (
          <span className="absolute inset-0 grid place-items-center font-display text-[clamp(3rem,9vw,6rem)] font-bold tracking-tight text-white/[0.12]">
            {monogram}
          </span>
        )}
        <div className="absolute bottom-6 left-6 h-px w-16 bg-brand-orange/70" />
      </div>
    );
  }

  return (
    <Image
      src={entry.src}
      alt={entry.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={cn("object-cover", className)}
    />
  );
}
