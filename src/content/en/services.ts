import type { ServiceSlug } from "@/config/routes";
import type { Service } from "@/content/types";

// Copy follows docs/02-site-architecture-and-page-content.md.
// Rules kept: no fixed service intervals, no prices, no durations, no equipment claims.

export const SERVICES: Service[] = [
  {
    id: "complete-service",
    name: "Complete service",
    summary: "A full inspection and routine service to keep your three-wheeler reliable.",
    includes: [
      "Engine, brakes, steering and electrics inspected",
      "Oil, greasing and adjustments when due",
      "A clear explanation of what we found",
    ],
    image: "serviceCompleteInspection",
    page: {
      slug: "three-wheeler-service",
      metaTitle: "Three-Wheeler Service Jaffna | IET Service Point",
      metaDescription:
        "Professional three-wheeler service at IET Service Point, Inuvil, Jaffna. Full inspection, routine maintenance and clear advice from a TVS Authorized Three-Wheeler Dealer.",
      h1: "Professional Three-Wheeler Service in Jaffna",
      intro:
        "Whether your three-wheeler carries passengers, moves goods or serves your family, regular service finds wear early, before it turns into a bigger repair.",
      sections: [
        {
          type: "checklist",
          title: "What a service visit covers",
          items: [
            "Engine condition, leaks and unusual noise",
            "Engine oil level and condition",
            "Brake response and adjustment",
            "Steering and front suspension",
            "Battery, charging, lights and indicators",
            "Tyre condition and wheel fasteners",
            "Greasing of moving joints",
            "A final check before handover",
          ],
        },
        {
          type: "prose",
          title: "Service timing depends on your vehicle",
          paragraphs: [
            "We do not apply one fixed interval to every three-wheeler. The right timing depends on your model, the manufacturer schedule, mileage, load and how the vehicle is used each day.",
            "Tell us how you use your three-wheeler and we will advise when it should come back.",
          ],
        },
      ],
      faqs: [
        {
          question: "Do you service commercial three-wheelers?",
          answer:
            "Yes. Many three-wheelers work every day carrying passengers or goods. Tell us how the vehicle is used so we can plan the right checks.",
        },
        {
          question: "Can I book a service online?",
          answer:
            "Yes. Use the booking form to share your vehicle details and a preferred time. We then confirm the booking with you on WhatsApp or by phone.",
        },
      ],
      related: ["three-wheeler-repair", "oil-service", "brake-service"],
    },
  },
  {
    id: "oil-service",
    name: "Oil service",
    summary: "Engine oil checks and changes, timed to your model and how you drive.",
    includes: [
      "Oil level and condition checked",
      "Oil change when it is due",
      "Leak check around the engine",
    ],
    image: "serviceOilPour",
    page: {
      slug: "oil-service",
      metaTitle: "Three-Wheeler Oil Service Jaffna | IET Service Point",
      metaDescription:
        "Three-wheeler oil service in Inuvil, Jaffna. Oil condition checks, oil changes and advice based on your model, mileage and daily use. Book with IET Service Point.",
      h1: "Three-Wheeler Oil Service in Jaffna",
      intro:
        "Clean oil at the right level protects the engine. The right time to change it depends on your vehicle and the work it does each day.",
      sections: [
        {
          type: "prose",
          title: "Why oil condition matters",
          paragraphs: [
            "Engine oil reduces friction between moving parts and carries heat away. Over time it breaks down and collects dirt, and it protects the engine less.",
          ],
        },
        {
          type: "checklist",
          title: "What we check",
          items: [
            "Oil level",
            "Oil condition",
            "Signs of leaks around the engine",
            "Related maintenance that is due, such as greasing",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "There is no single interval for every three-wheeler",
          body: "Oil change timing depends on your model, the manufacturer schedule, mileage, load and operating conditions. Share your model and daily use with us and we will advise.",
        },
      ],
      faqs: [
        {
          question: "How often should I change the engine oil?",
          answer:
            "It depends on your model, the manufacturer schedule, how far you drive and the load you carry. Share your model and daily use with us and we will advise the right timing.",
        },
      ],
      related: ["three-wheeler-service", "greasing", "engine-diagnostics-repair"],
    },
  },
  {
    id: "greasing",
    name: "Greasing",
    summary: "Lubrication of moving joints to cut friction and slow wear.",
    includes: [
      "Grease points on steering and suspension",
      "Dry, stiff or noisy joints found",
      "Advice when a part needs replacing",
    ],
    image: "serviceGreasingFitting",
    page: {
      slug: "greasing",
      metaTitle: "Three-Wheeler Greasing Jaffna | IET Service Point",
      metaDescription:
        "Three-wheeler greasing in Inuvil, Jaffna. Lubrication of steering and suspension joints to reduce friction and wear. Book with IET Service Point.",
      h1: "Three-Wheeler Greasing Service in Jaffna",
      intro:
        "Moving joints need regular lubrication. Without it, friction increases, parts wear faster and the ride gets rougher.",
      sections: [
        {
          type: "prose",
          title: "How greasing helps",
          paragraphs: [
            "Grease keeps a protective layer between moving metal parts. It reduces friction, slows wear and helps keep out water and dust.",
          ],
        },
        {
          type: "checklist",
          title: "What we look at",
          items: [
            "Grease points on the steering and suspension",
            "Joints that are dry, stiff or noisy",
            "Worn parts that grease alone will not fix",
          ],
        },
      ],
      faqs: [
        {
          question: "Is greasing part of regular maintenance?",
          answer:
            "Yes. Greasing is a normal part of routine maintenance. Tell us when your vehicle was last greased and we will advise whether it is due.",
        },
      ],
      related: ["three-wheeler-service", "oil-service", "brake-service"],
    },
  },
  {
    id: "brake-service",
    name: "Brake service",
    summary: "Inspection, adjustment and repair for safe, predictable braking.",
    includes: ["Brake response and noise checked", "Adjustment where needed", "Advice on worn brake parts"],
    image: "serviceBrakeDrumShoes",
    page: {
      slug: "brake-service",
      metaTitle: "Three-Wheeler Brake Service Jaffna | IET Service Point",
      metaDescription:
        "Three-wheeler brake service and repair in Inuvil, Jaffna. Brake noise, weak braking and pulling inspected and fixed. Book an inspection with IET Service Point.",
      h1: "Three-Wheeler Brake Service & Repair in Jaffna",
      intro:
        "Brakes wear with every trip, and three-wheelers often carry heavy loads through busy traffic. Regular checks keep braking safe and predictable.",
      sections: [
        {
          type: "symptoms",
          title: "Signs your brakes need attention",
          items: [
            {
              title: "Noise when braking",
              body: "Squealing or grinding often means worn or contaminated brake parts.",
            },
            {
              title: "Weak response",
              body: "If you need to press harder or further, the brakes may need adjustment or new parts.",
            },
            {
              title: "Pulling to one side",
              body: "Uneven braking can come from sticking or unevenly worn parts.",
            },
          ],
        },
        {
          type: "checklist",
          title: "What a brake service covers",
          items: [
            "Brake response and feel",
            "Wear on brake parts",
            "Brake adjustment",
            "Cables, linkages or fluid, depending on the brake system",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Do not ignore brake problems",
          body: "If braking feels weak or makes grinding noises, avoid heavy loads and high speed, and have the brakes checked as soon as possible.",
        },
      ],
      faqs: [
        {
          question: "Do you do brake service?",
          answer:
            "Yes. We inspect brake response, noise and wear, adjust the brakes and advise when parts need replacing.",
        },
      ],
      related: ["three-wheeler-repair", "three-wheeler-service", "greasing"],
    },
  },
  {
    id: "electrical-repair",
    name: "Electrical repair",
    summary: "Battery, charging, starter, wiring, lighting and switch faults.",
    includes: [
      "Battery and charging checks",
      "Starter, wiring and fuse faults",
      "Lights, indicators and switches",
    ],
    image: "serviceElectricalMultimeter",
    page: {
      slug: "electrical-repair",
      metaTitle: "Three-Wheeler Electrical Repair Jaffna | IET Service Point",
      metaDescription:
        "Three-wheeler electrical repair in Inuvil, Jaffna. Battery, charging, starter, wiring, lights, indicators, switches and fuses. Book with IET Service Point.",
      h1: "Three-Wheeler Electrical Repair in Jaffna",
      intro:
        "Electrical faults can stop a working day. We trace the cause, from the battery to the smallest switch, and explain the fix before we start.",
      sections: [
        {
          type: "checklist",
          title: "What we check",
          items: [
            "Battery condition",
            "Charging system",
            "Starter",
            "Wiring and connections",
            "Headlights and tail lights",
            "Indicators",
            "Switches",
            "Fuses",
          ],
        },
        {
          type: "symptoms",
          title: "Common electrical problems",
          items: [
            {
              title: "Battery keeps going flat",
              body: "Can mean a charging fault, a worn battery or a wiring drain.",
            },
            {
              title: "Slow or no starting",
              body: "Can come from the battery, the starter or poor connections.",
            },
            {
              title: "Lights or indicators not working",
              body: "Often a bulb, fuse, switch or wiring fault.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Do you repair electrical problems?",
          answer:
            "Yes. We check and repair battery, charging, starter, wiring, lighting, indicator, switch and fuse faults on three-wheelers.",
        },
      ],
      related: ["three-wheeler-repair", "engine-diagnostics-repair", "three-wheeler-service"],
    },
  },
  {
    id: "engine-diagnosis",
    name: "Engine diagnosis",
    summary: "Finding the real cause of engine problems before parts are replaced.",
    includes: [
      "Symptoms discussed and engine inspected",
      "Likely cause explained before work starts",
      "Repair and parts advice",
    ],
    image: "serviceEngineSparkPlug",
    page: {
      slug: "engine-diagnostics-repair",
      metaTitle: "Three-Wheeler Engine Repair Jaffna | IET Service Point",
      metaDescription:
        "Three-wheeler engine diagnosis and repair in Inuvil, Jaffna. Hard starting, power loss, noise, smoke and overheating checked. Book with IET Service Point.",
      h1: "Three-Wheeler Engine Diagnosis & Repair in Jaffna",
      intro:
        "Engine problems rarely fix themselves. A careful diagnosis finds the real cause, so the repair targets the problem and not a guess.",
      sections: [
        {
          type: "symptoms",
          title: "Engine symptoms worth checking early",
          items: [
            {
              title: "Hard starting",
              body: "Often linked to the battery, starter, fuel supply or ignition.",
            },
            {
              title: "Loss of power",
              body: "Can come from air or fuel supply, clutch wear or engine condition.",
            },
            {
              title: "Knocking or unusual noise",
              body: "Worth checking early, before wear spreads to other parts.",
            },
            {
              title: "Excess smoke",
              body: "Blue, black or white smoke each point to different problems.",
            },
            {
              title: "Overheating",
              body: "Needs prompt attention. Stop and call us if it keeps happening.",
            },
            {
              title: "Higher fuel use",
              body: "A sudden rise in fuel use can point to engine or tuning problems.",
            },
          ],
        },
        {
          type: "prose",
          title: "How we approach engine work",
          paragraphs: [
            "We start with your description of the problem, then inspect the engine. We explain the likely cause and the work needed, and we only start after you confirm.",
          ],
        },
      ],
      faqs: [
        {
          question: "What should I tell you when I book?",
          answer:
            "Describe what you notice, when it started and when it happens, for example only when the engine is cold or only under load. A short video of the noise or smoke helps too.",
        },
      ],
      related: ["three-wheeler-repair", "oil-service", "electrical-repair"],
    },
  },
  {
    id: "suspension-steering",
    name: "Suspension & steering",
    summary: "Checks for loose, heavy or noisy steering and a rough ride.",
    includes: ["Steering joints and free play", "Shock absorbers and mounts", "Advice on worn parts"],
    image: "serviceSuspensionSteering",
  },
  {
    id: "water-wash",
    name: "Water wash",
    summary: "A water wash to keep your three-wheeler clean.",
    includes: ["Body and wheel wash", "Book it on its own or with a service"],
    image: "serviceWaterWashFoam",
  },
];

export const REPAIR_SERVICE: Service = {
  id: "repairs",
  name: "Repairs",
  summary: "Diagnosis and repair for starting, power, brake, steering and electrical problems.",
  includes: [
    "Problem described and inspected",
    "Cause explained before work starts",
    "Repair confirmed with you first",
  ],
  image: "serviceRepairEngineWork",
  page: {
    slug: "three-wheeler-repair",
    metaTitle: "Three-Wheeler Repair Jaffna | Engine, Brake & Electrical | IET",
    metaDescription:
      "Three-wheeler repair in Inuvil, Jaffna. Hard starting, power loss, brake noise, steering, battery and electrical faults. Describe the problem and book an inspection.",
    h1: "Three-Wheeler Repair in Jaffna",
    intro:
      "Something does not feel right? Tell us what you notice. We inspect the vehicle, explain the likely cause and confirm the work with you before we start.",
    sections: [
      {
        type: "symptoms",
        title: "Problems we look at",
        items: [
          {
            title: "Hard starting",
            body: "Often linked to the battery, starter, fuel supply or ignition.",
          },
          {
            title: "Power loss",
            body: "Can come from air or fuel supply, clutch wear or engine condition.",
          },
          {
            title: "Unusual engine noise",
            body: "Knocking, ticking or grinding is worth checking before wear spreads.",
          },
          {
            title: "Oil leaks",
            body: "Leaks lower the oil level and can damage parts. We find the source first.",
          },
          {
            title: "Weak or noisy brakes",
            body: "Squealing, grinding or a soft response needs attention for safety.",
          },
          {
            title: "Steering problems",
            body: "Heavy, loose or pulling steering can point to worn joints or suspension parts.",
          },
          {
            title: "Battery or charging faults",
            body: "A battery that keeps going flat can mean a charging or wiring problem.",
          },
          {
            title: "Lighting faults",
            body: "Dim or failing lights often trace back to bulbs, wiring, switches or fuses.",
          },
          {
            title: "Vibration",
            body: "Can come from the wheels, mounts, suspension or drive system.",
          },
          {
            title: "Overheating",
            body: "Needs prompt attention. Stop driving and call us if it keeps happening.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I describe the problem before I visit?",
        answer:
          "Yes. Call or WhatsApp us with what you notice, and send a short video or photo if you can. It helps us plan the inspection.",
      },
      {
        question: "Do you repair electrical problems?",
        answer:
          "Yes. We check batteries, charging, starting, wiring, lights, indicators and switches on three-wheelers.",
      },
    ],
    related: ["electrical-repair", "brake-service", "engine-diagnostics-repair"],
  },
};

export function getServicePage(slug: ServiceSlug) {
  const all = [...SERVICES, REPAIR_SERVICE];
  for (const service of all) {
    if (service.page?.slug === slug) {
      return { service, page: service.page };
    }
  }
  return undefined;
}

export function getServiceNameBySlug(slug: ServiceSlug) {
  return getServicePage(slug)?.service.name ?? slug;
}
