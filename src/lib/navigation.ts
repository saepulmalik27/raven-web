import routes from "./routes";

export type TNavigation = {
    label: string;
    route: string;
  };

export const navigationList : TNavigation[]  = [
    {
        label : "Home",
        route : routes.home
    },{
        label : "Tempat Lain",
        route : routes.explore
    },{
        label : "Testimony",
        route : routes.testimony
    }
]
