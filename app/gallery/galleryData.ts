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

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "events-placeholder",
    title: "Add your first event photo",
    eventName: "Upcoming Event",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Replace this placeholder with a real image link and keep the title, event, location, time, and description updated here.",
    imageUrl: "",
    alt: "Placeholder for an event gallery image",
    category: "events",
  },
  {
    id: "uav-placeholder",
    title: "Add your first UAV photo",
    eventName: "UAV Demo",
    location: "Testing ground",
    capturedAt: "Add date and time",
    description:
      "Use this entry to store the image link and the hover details that should appear when the photo is focused.",
    imageUrl: "",
    alt: "Placeholder for a UAV gallery image",
    category: "uav",
  },
  {
    id: "atv-placeholder",
    title: "Add your first ATV photo",
    eventName: "ATV Session",
    location: "Workshop or track",
    capturedAt: "Add date and time",
    description:
      "Each image is managed here so the gallery page stays simple while the photo metadata remains easy to edit.",
    imageUrl: "",
    alt: "Placeholder for an ATV gallery image",
    category: "atv",
  },
  {
    id: "misc-placeholder",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-2",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-3",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-4",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-5",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-6",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-7",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-8",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
   {
    id: "misc-placeholder-9",
    title: "Add your first miscellaneous photo",
    eventName: "Team Moment",
    location: "Add location in galleryData.ts",
    capturedAt: "Add date and time",
    description:
      "Store any extra photo link here along with the text you want visitors to discover on hover.",
    imageUrl: "",
    alt: "Placeholder for a miscellaneous gallery image",
    category: "miscellaneous",
  },
  
];
