import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { Main } from "./pages/Main";
import { User } from "./pages/User";

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    User,
  })
);

export default Routes;
