// Image manifest. File names match docs/IMAGE-BRIEF.md.
// While `ready` is false the site renders a branded placeholder, so a missing file never breaks a page.
// When a file arrives: convert it to .webp, set the real width/height, then set ready to true.

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  ready: boolean;
};

export const SITE_IMAGES = {
  serviceCompleteInspection: {
    src: "/images/art/service-complete-inspection.webp",
    alt: "Mechanic checking a three-wheeler engine with an inspection lamp",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceRepairEngineWork: {
    src: "/images/art/service-repair-engine-work.webp",
    alt: "Socket wrench tightening a bolt on a three-wheeler engine",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceOilPour: {
    src: "/images/art/service-oil-pour.webp",
    alt: "Fresh engine oil poured through a funnel into a three-wheeler engine",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceGreasingFitting: {
    src: "/images/art/service-greasing-fitting.webp",
    alt: "Grease gun applied to a suspension grease fitting",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceBrakeDrumShoes: {
    src: "/images/art/service-brake-drum-shoes.webp",
    alt: "Brake drum and brake shoes laid out on a workbench",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceElectricalMultimeter: {
    src: "/images/art/service-electrical-multimeter.webp",
    alt: "Multimeter probes testing three-wheeler battery terminals",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceEngineSparkPlug: {
    src: "/images/art/service-engine-spark-plug.webp",
    alt: "Old and new spark plugs next to a feeler gauge",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceSuspensionSteering: {
    src: "/images/art/service-suspension-steering.webp",
    alt: "Front suspension and steering linkage of a three-wheeler being checked",
    width: 1600,
    height: 2000,
    ready: false,
  },
  serviceWaterWashFoam: {
    src: "/images/art/service-water-wash-foam.webp",
    alt: "Wash foam and water on the body of a three-wheeler",
    width: 1600,
    height: 2000,
    ready: false,
  },
  bookingNightRoad: {
    src: "/images/art/booking-night-road.webp",
    alt: "",
    width: 2400,
    height: 1350,
    ready: false,
  },
  jaffnaPalmyraRoad: {
    src: "/images/art/jaffna-palmyra-road.webp",
    alt: "Palmyra palms along a quiet road in northern Sri Lanka",
    width: 2400,
    height: 1350,
    ready: false,
  },
  workshopExterior: {
    src: "/images/photos/iet-service-point-inuvil-workshop-exterior.webp",
    alt: "IET Service Point workshop on Kanthaswamy Kovil Road, Inuvil West, Jaffna",
    width: 2400,
    height: 1350,
    ready: false,
  },
  tvsDealerBoard: {
    src: "/images/photos/iet-service-point-tvs-authorized-dealer-board.webp",
    alt: "TVS Authorized Three-Wheeler Dealer board at IET Service Point, Inuvil",
    width: 1600,
    height: 1200,
    ready: false,
  },
  serviceBay: {
    src: "/images/photos/iet-service-point-service-bay.webp",
    alt: "Service bay at IET Service Point with a three-wheeler being serviced",
    width: 1800,
    height: 1200,
    ready: false,
  },
  technicianAtWork: {
    src: "/images/photos/iet-service-point-technician-at-work.webp",
    alt: "IET Service Point technician working on a three-wheeler engine",
    width: 1600,
    height: 2000,
    ready: false,
  },
  tvsGenuineParts: {
    src: "/images/photos/iet-service-point-tvs-genuine-parts.webp",
    alt: "TVS genuine three-wheeler parts at IET Service Point",
    width: 1600,
    height: 2000,
    ready: false,
  },
  tvsGenuinePartsLabel: {
    src: "/images/photos/iet-service-point-tvs-genuine-parts-label.webp",
    alt: "Security label on a TVS genuine parts box",
    width: 1600,
    height: 1600,
    ready: false,
  },
  jSujinthanPortrait: {
    src: "/images/photos/j-sujinthan-managing-director.webp",
    alt: "J. Sujinthan, Managing Director of IET Service Point",
    width: 1600,
    height: 2000,
    ready: false,
  },
  sJeyakumarPortrait: {
    src: "/images/photos/s-jeyakumar-mentor-advisor.webp",
    alt: "S. Jeyakumar (M.E), Mentor and Advisor to IET Service Point",
    width: 1600,
    height: 2000,
    ready: false,
  },
  team: {
    src: "/images/photos/iet-service-point-team.webp",
    alt: "The IET Service Point team outside the Inuvil workshop",
    width: 1800,
    height: 1200,
    ready: false,
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof SITE_IMAGES;
