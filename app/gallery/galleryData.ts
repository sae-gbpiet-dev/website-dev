export type GalleryCategory = "events" | "uav" | "atv" | "miscellaneous";

export interface GalleryPhoto {
  id: string;
  title: string;
  eventName: string;
  location: string;
  capturedAt: string;
  description: string;
  imageUrl?: string;
  alt: string;
  category: GalleryCategory;
}

export interface GallerySection {
  id: GalleryCategory;
  title: string;
  eyebrow: string;
  description: string;
}

interface GalleryEvent {
  eventId: number;
  eventName: string;
  category: GalleryCategory;
  location: string;
  capturedAt: string;
  description: string;
  imageIds: string[];
}

export function getGoogleDriveImageUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
}

export const featuredGalleryImages = {
  induction: getGoogleDriveImageUrl("1uNZHjyd8hAiDdhTIzKQHcKW5r1pgred9"),
  workshop: getGoogleDriveImageUrl("1yjAOVz1U38HgiQxju7ZrSTk6B7JV6U2K"),
  baja: getGoogleDriveImageUrl("1ASyI7s2BJnQaOgISuxDdY7fcny3yIBk_"),
  cadathon: getGoogleDriveImageUrl("1eArmXcXSugndgLnU4VaUQNKaTyzXRDqp"),
  catalyst: getGoogleDriveImageUrl("1Y7qNS8aEVvLBd4IX0v9S-__6fmiJiH6b"),
  waterRocket: getGoogleDriveImageUrl("1auOAQ4zztmb_yW_MXJ37Wo5etOoLXRmN"),
};

export const gallerySections: GallerySection[] = [
  {
    id: "events",
    title: "Events",
    eyebrow: "Field Stories",
    description:
      "Competition days, workshops, presentations, and the moments that define the team outside the workshop.",
  },
  {
    id: "uav",
    title: "UAV",
    eyebrow: "Aerial Systems",
    description:
      "Flight tests, build progress, payload integration, and behind-the-scenes moments from the UAV program.",
  },
  {
    id: "atv",
    title: "ATV",
    eyebrow: "Ground Machines",
    description:
      "Fabrication, suspension work, endurance runs, and the off-road engineering journey of the ATV team.",
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    eyebrow: "Everything Else",
    description:
      "Team culture, candid workshop scenes, details worth remembering, and all the moments that do not fit one lane.",
  },
];

const galleryEvents: GalleryEvent[] = [
  {
    eventId: 1,
    eventName: "Induction 2025-26",
    category: "events",
    location: "GBPIET Campus",
    capturedAt: "2025-26",
    description:
      "New members stepping into the SAE GBPIET workspace, meeting the team, and beginning their first season with the club.",
    imageIds: [
      "1uNZHjyd8hAiDdhTIzKQHcKW5r1pgred9",
      "1NVOqslbm1VXo3ZaAge9k86eDgN50omKD",
      "1RFCJkD3KIb8axkEnkBunKk1UNBfHyPxF",
      "1NvM2ENWbCyXtQH7PvQet6qYsnS_JjSuJ",
      "14WmrQEPVN6A2myEKoM98DOPmioHKY8i7",
      "1_oyraiSidZvwAbKVHTNCT8_wUTzZODZk",
      "1e3Ptn2yEs9oF0tz4gRrPDSGmEW9JkJ4z",
      "1mjw0svJCzd491GAhX8MHtwWrcE2_AB_U",
      "1dhqaxxJc-v4d9xv-kbN1tUtAJo3jWCke",
    ],
  },
  {
    eventId: 2,
    eventName: "KV Workshop 2025-26",
    category: "events",
    location: "Workshop Session",
    capturedAt: "2025-26",
    description:
      "Hands-on workshop moments where students learned by building, testing, asking questions, and working alongside the team.",
    imageIds: [
      "1ZQ2wiOG2Uv0UVwS166V_XW_JsD-i9qYv",
      "16InSr78ladoylJ3wh9LzAaWkbs5Id6NB",
      "1SGluvnvInfYX87vjC7RltJ1U-LIIGpi2",
      "15B_nF0pl9rbQQfYhVvAgI4_O-QzKHPtV",
      "19kKItgi0_XGefDU4yC_IP6gguvdXJTNu",
      "1oX1RRrOzwBG9cG2baHcNZbh0PxDp2nt6",
      "1yjAOVz1U38HgiQxju7ZrSTk6B7JV6U2K",
    ],
  },
  {
    eventId: 3,
    eventName: "BAJA 2025-26",
    category: "atv",
    location: "BAJA Event",
    capturedAt: "2025-26",
    description:
      "The ATV team in competition mode, carrying months of design, fabrication, tuning, and endurance work onto the field.",
    imageIds: [
      "1ASyI7s2BJnQaOgISuxDdY7fcny3yIBk_",
      "1nnAtYBv9coiWxR82DCc8wWgghk7Koe-W",
      "1V2ul0slyebDjXBXxPSno-mW8sd0bIxKk",
      "1A4Ch91B5L36N-m9XUecs9uPS2ZsYWuDa",
      "1-v6E5pw1SGJuXLyA1J46_F7tqDstb2JB",
      "1oII681CHeHYliuukaafj4Ly4zVAOJQoo",
      "1vfam6B9AflghVSPesi8KxSlvQp7o-MvH",
    ],
  },
  {
    eventId: 4,
    eventName: "SolidWorks Workshop and Cadathon 2025-26",
    category: "events",
    location: "CAD Lab",
    capturedAt: "2025-26",
    description:
      "Design thinking, CAD practice, and rapid problem solving from the SolidWorks workshop and Cadathon sessions.",
    imageIds: [
      "1eArmXcXSugndgLnU4VaUQNKaTyzXRDqp",
      "1GUWFO_kMTVjMnbf0Sy_OUXF1S3DSFnvu",
      "1JPdomG0ioVNe2ekWEkX3Xi25ACucsKou",
      "1Cp_T5ITv7sJlpUIcPxk6bEXNII-MIFI8",
      "1nBZUIRKniJRgEeVzLKzr08QU2itzFiSZ",
    ],
  },
  {
    eventId: 5,
    eventName: "Catalyst 2026",
    category: "miscellaneous",
    location: "Catalyst Event",
    capturedAt: "2026",
    description:
      "Team presence, student energy, and the small moments that made Catalyst a memorable part of the SAE calendar.",
    imageIds: [
      "1Y7qNS8aEVvLBd4IX0v9S-__6fmiJiH6b",
      "1_r9pk4LO7fx1U-SWL-hTjyTndy6Vx-Es",
      "1IbSfZ7SuOArn0LwqlCdhR3GuRspg1hGR",
      "1SBVDIqcQyi-Ezba2mUCW23g2b4WeP-t2",
      "175a22hdW7Szr_Dj7gcq5rIJ9RrfGAs7p",
      "1c4a1hXBHhuCWMqKmCXEj09-PxhJZiOtB",
    ],
  },
  {
    eventId: 6,
    eventName: "Water Rocket 3.0 2025-26",
    category: "uav",
    location: "Launch Ground",
    capturedAt: "2025-26",
    description:
      "Launch prep, testing, recovery, and the practical thrill of learning flight through the Water Rocket 3.0 event.",
    imageIds: [
      "1auOAQ4zztmb_yW_MXJ37Wo5etOoLXRmN",
      "1zr2jnZzVedMUZQJEdgxX_ghipJXiV7Xf",
      "1YKgXlnlfDJ2dnI3fT7-fNHYlgmV5y2vp",
      "18910sVXnA119O5KjyuuhNXnoRE3ilvpv",
      "1kXvTC-6GuEsSTZqxWpHB9qYnBzzgAaz5",
      "1Oe4LFkquYqy0xDSbmP38dLAvu422f-me",
      "1Oe4LFkquYqy0xDSbmP38dLAvu422f-me",
      "1P_RnVcNhul9eMoau9Ak-VnWXh9AM5LSp",
      "1QbRobJlR_wwHJpWcyGW_5HoHDO0C_tnx",
      "1lul6D8pndNhZypM9-UdEYGF3S4wOTuyu",
    ],
  },
];

export const galleryPhotos: GalleryPhoto[] = galleryEvents.flatMap((event) =>
  event.imageIds.map((imageId, index) => ({
    id: `event-${event.eventId}-${index + 1}`,
    title: `${event.eventName} Frame ${String(index + 1).padStart(2, "0")}`,
    eventName: event.eventName,
    location: event.location,
    capturedAt: event.capturedAt,
    description: event.description,
    imageUrl: getGoogleDriveImageUrl(imageId),
    alt: `${event.eventName} photo ${index + 1}`,
    category: event.category,
  })),
);
