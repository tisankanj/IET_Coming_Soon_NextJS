import Image from "next/image";
import { cn } from "cn";

import { BUSINESS } from "@/config/site";

type TvsLogoProps = {
  className?: string;
};

// The official TVS logo, supplied by the client, shown unchanged on a white badge. Its blue and grey
// lose contrast on the site's dark surfaces, and the design system allows the logo only on a light badge.
export function TvsLogo({ className }: TvsLogoProps) {
  return (
    <div className={cn("rounded-panel border bg-white px-6 py-5 shadow-soft", className)}>
      <Image
        src="/brand/tvs-logo.png"
        alt={`${BUSINESS.authorization} logo`}
        width={1200}
        height={380}
        sizes="21rem"
        quality={85}
        className="h-auto w-full"
      />
    </div>
  );
}
