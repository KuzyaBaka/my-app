import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info"

let prop;

export const routes = [
  {
    path: "/",
    elements: <Home />,
    prop,
  },
  {
    path: "/info/:id",
    elements: <Info />
  }
];
