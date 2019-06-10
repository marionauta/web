import Site from "./site";

export default interface Project extends Site {
  tagline: string;
  what?: string[];
}