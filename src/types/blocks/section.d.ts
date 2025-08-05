import { Image, Video, Button } from "@/types/blocks/base";

export interface SectionItem {
  title?: string;
  description?: string;
  label?: string;
  icon?: string;
  image?: Image;
  video?: Video;
  buttons?: Button[];
  url?: string;
  target?: string;
  children?: SectionItem[];
}

export interface Section {
  disabled?: boolean;
  name?: string;
  title?: string;
  description?: string;
  label?: string;
  icon?: string;
  image?: Image;
  video?: Video;
  buttons?: Button[];
  items?: SectionItem[];
}
