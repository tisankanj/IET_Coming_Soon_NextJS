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
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceRepairEngineWork: {
    src: "/images/art/service-repair-engine-work.webp",
    alt: "Socket wrench tightening a bolt on a three-wheeler engine",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceOilPour: {
    src: "/images/art/service-oil-pour.webp",
    alt: "Fresh engine oil poured through a funnel into a three-wheeler engine",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceGreasingFitting: {
    src: "/images/art/service-greasing-fitting.webp",
    alt: "Grease gun applied to a suspension grease fitting",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceBrakeDrumShoes: {
    src: "/images/art/service-brake-drum-shoes.webp",
    alt: "Brake drum and brake shoes laid out on a workbench",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceElectricalMultimeter: {
    src: "/images/art/service-electrical-multimeter.webp",
    alt: "Multimeter probes testing three-wheeler battery terminals",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceEngineSparkPlug: {
    src: "/images/art/service-engine-spark-plug.webp",
    alt: "Old and new spark plugs next to a feeler gauge",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceSuspensionSteering: {
    src: "/images/art/service-suspension-steering.webp",
    alt: "Front suspension and steering linkage of a three-wheeler being checked",
    width: 1122,
    height: 1402,
    ready: true,
  },
  serviceWaterWashFoam: {
    src: "/images/art/service-water-wash-foam.webp",
    alt: "Wash foam and water on the body of a three-wheeler",
    width: 1122,
    height: 1402,
    ready: true,
  },
  bookingNightRoad: {
    src: "/images/art/booking-night-road.webp",
    alt: "",
    width: 1672,
    height: 941,
    ready: true,
  },
  visionStation: {
    src: "/images/art/iet-vision-station.webp",
    alt: "Illustration of the service station IET Service Point is working towards",
    width: 1672,
    height: 941,
    ready: true,
  },
  jaffnaPalmyraRoad: {
    src: "/images/art/jaffna-palmyra-road.webp",
    alt: "Palmyra palms along a quiet road in northern Sri Lanka",
    width: 1672,
    height: 941,
    ready: true,
  },
  workshopExterior: {
    src: "/images/photos/iet-service-point-inuvil-workshop-exterior.webp",
    alt: "The IET Service Point team outside the workshop bays in Inuvil West, Jaffna",
    width: 1672,
    height: 941,
    ready: true,
  },
  tvsDealerBoard: {
    src: "/images/photos/iet-service-point-tvs-authorized-dealer-board.webp",
    alt: "TVS Authorized Three-Wheeler Dealer board at IET Service Point, Inuvil",
    width: 1448,
    height: 1086,
    ready: true,
  },
  serviceBay: {
    src: "/images/photos/iet-service-point-service-bay.webp",
    alt: "Service bay at IET Service Point with a three-wheeler being serviced",
    width: 1536,
    height: 1024,
    ready: true,
  },
  technicianAtWork: {
    src: "/images/photos/iet-service-point-technician-at-work.webp",
    alt: "IET Service Point technician working on a three-wheeler engine",
    width: 1122,
    height: 1402,
    ready: true,
  },
  tvsGenuineParts: {
    src: "/images/photos/iet-service-point-tvs-genuine-parts.webp",
    alt: "TVS genuine three-wheeler parts at IET Service Point",
    width: 1122,
    height: 1402,
    ready: true,
  },
  tvsGenuinePartsLabel: {
    src: "/images/photos/iet-service-point-tvs-genuine-parts-label.webp",
    alt: "Security label on a TVS genuine parts box",
    width: 1254,
    height: 1254,
    ready: true,
  },
  jSujinthanPortrait: {
    src: "/images/photos/j-sujinthan-managing-director.webp",
    alt: "J. Sujinthan, Managing Director of IET Service Point",
    width: 1122,
    height: 1402,
    ready: true,
  },
  sJeyakumarPortrait: {
    src: "/images/photos/s-jeyakumar-mentor-advisor.webp",
    alt: "S. Jeyakumar (M.E), Mentor and Advisor to IET Service Point",
    width: 1122,
    height: 1402,
    ready: true,
  },
  customerHandover: {
    src: "/images/photos/iet-service-point-customer-handover.webp",
    alt: "IET Service Point technician handing the keys back to a customer after a service",
    width: 1122,
    height: 1402,
    ready: true,
  },
  team: {
    src: "/images/photos/iet-service-point-team.webp",
    alt: "The IET Service Point team outside the Inuvil workshop",
    width: 1536,
    height: 1024,
    ready: true,
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof SITE_IMAGES;
