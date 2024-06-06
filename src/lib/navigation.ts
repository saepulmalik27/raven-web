import routes from "./routes";

export type TNavigation = {
    label: string;
    route: string;
    attribute : string;
  };

export const navigationList : TNavigation[]  = [
    {
        label : "Home",
        route : routes.home,
        attribute : "h-nav-home"
    },{
        label : "Tempat Lain",
        route : routes.explore,
         attribute : "h-nav-other-place"
    },{
        label : "Testimony",
        route : routes.testimony,
         attribute : "h-nav-testimoni"
    }
]
