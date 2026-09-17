// Canonical business facts. Every page, schema and link reads from here.
// Source: docs/README.md "Canonical business facts".

// The live domain currently redirects to www. Change this one value if the client keeps www as primary.
export const SITE_URL = "https://ietservice.lk";

export const BUSINESS = {
  name: "IET Service Point",
  authorization: "TVS Authorized Three-Wheeler Dealer",
  partsAuthorization: "Authorized TVS Genuine Parts Seller",
  phoneDisplay: "+94 75 253 0495",
  phoneE164: "+94752530495",
  email: "hello@ietservice.lk",
  // Not yet confirmed by the client: WhatsApp reuses the main phone number.
  whatsappNumber: "94752530495",
  address: {
    street: "Kanthaswamy Kovil Road, Inuvil West",
    locality: "Jaffna",
    region: "Northern Province",
    countryCode: "LK",
    countryName: "Sri Lanka",
  },
} as const;

export const ADDRESS_ONE_LINE = `${BUSINESS.address.street}, ${BUSINESS.address.locality}`;

export const CONTACT_LINKS = {
  call: `tel:${BUSINESS.phoneE164}`,
  email: `mailto:${BUSINESS.email}`,
  whatsapp: `https://wa.me/${BUSINESS.whatsappNumber}`,
  // A search link, not a pin: the exact map pin is not confirmed yet.
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS.name}, ${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.countryName}`,
  )}`,
} as const;

// Official TVS Sri Lanka genuine-parts guidance (docs/10-research-sources.md).
export const TVS_GENUINE_PARTS_URL = "https://www.tvsmotor.com/en/lk/service/genuine-parts";
