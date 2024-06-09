import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CollectionsIcon from "@mui/icons-material/Collections";
const Routes = [
  {
    path: "/main/products",
    content: "Products",
    icon: <ShoppingBasketIcon />,
  },
  {
    path: "/main/todos",
    content: "Todos",
    icon: <CollectionsIcon />,
  },
];
export default Routes;
