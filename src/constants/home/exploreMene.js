import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import images from "./images";

const exploreMenu = [
  {
    title: "INNOVATIONS",
    image: images.innovations,
    icon: <TipsAndUpdatesIcon />,
    content: "This is lorem for providers lorem ipsum quick brown fox jumps over the lazy dog",
  },
  {
    title: "EXPLORATIONS",
    image: images.explorations,
    icon: <TravelExploreIcon />,
    content: "This is lorem for life sciences lorem ipsum quick brown fox jumps over the lazy dog",
  },
  {
    title: "AMBITIONS",
    image: images.ambitions,
    icon: <PsychologyIcon />,
    content: "This is lorem for patients lorem ipsum quick brown fox jumps over the lazy dog",
  },
  {
    title: "ACHEIVEMENTS",
    image: images.acheivements,
    icon: <EmojiEventsIcon />,
    content: "This is lorem for platform lorem ipsum quick brown fox jumps over the lazy dog and the lazy dog lorem 34",
  },
];

export default exploreMenu;
