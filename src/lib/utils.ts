import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Segment {
  key: string;
  label: string;
  fee: {
    Solo?: number;
    Group?: number;
  };
  categories: string[];
}

export const segments: Segment[] = [
  {
    key: "nazrul_sangeet",
    label: "Nazrul Sangeet (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "rabindra_sangeet",
    label: "Rabindra Sangeet (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "modern_singing",
    label: "Modern Singing (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "classical_dance",
    label: "Classical Dance (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "recitation",
    label: "Recitation (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "drawing",
    label: "Drawing (P,J,S,HS)",
    fee: { Solo: 100 },
    categories: ["Solo"],
  },
  {
    key: "extempore_speech",
    label: "Extempore Speech (J,S,HS)",
    fee: { Solo: 200 },
    categories: ["Solo"],
  },
  {
    key: "folk_dance",
    label: "Folk Dance (J,S,HS)",
    fee: { Solo: 200, Group: 350 },
    categories: ["Solo", "Group"],
  },
  {
    key: "modern_dance",
    label: "Modern Dance (J,S,HS)",
    fee: { Solo: 200, Group: 350 },
    categories: ["Solo", "Group"],
  },
  {
    key: "battle_of_bands",
    label: "Battle of Bands",
    fee: { Solo: 600, Group: 600 },
    categories: ["Solo", "Group"],
  },
  {
    key: "photography",
    label: "Photography Exhibition",
    fee: { Solo: 400, Group: 400 },
    categories: ["Solo", "Group"],
  },
  {
    key: "wall_magazine",
    label: "Wall Magazine",
    fee: { Solo: 300, Group: 300 },
    categories: ["Solo", "Group"],
  },
  {
    key: "book_quiz",
    label: "Book Based Quiz",
    fee: { Solo: 100, Group: 100 },
    categories: ["Solo", "Group"],
  },
  {
    key: "movie_quiz",
    label: "Movie Quiz",
    fee: { Solo: 100, Group: 100 },
    categories: ["Solo", "Group"],
  },
];
