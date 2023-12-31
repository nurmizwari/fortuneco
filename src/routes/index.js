import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "../helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const HomeFashion = lazy(() => import("../pages/home/HomeFashion"));
const HomeFashionTwo = lazy(() => import("../pages/home/HomeFashionTwo"));
const HomeFashionThree = lazy(() => import("../pages/home/HomeFashionThree"));
const HomeFashionFour = lazy(() => import("../pages/home/HomeFashionFour"));
const HomeFashionFive = lazy(() => import("../pages/home/HomeFashionFive"));
const HomeFashionSix = lazy(() => import("../pages/home/HomeFashionSix"));
const HomeFashionSeven = lazy(() => import("../pages/home/HomeFashionSeven"));
const HomeFashionEight = lazy(() => import("../pages/home/HomeFashionEight"));
const HomeKidsFashion = lazy(() => import("../pages/home/HomeKidsFashion"));
const HomeCosmetics = lazy(() => import("../pages/home/HomeCosmetics"));
const HomeFurniture = lazy(() => import("../pages/home/HomeFurniture"));
const HomeFurnitureTwo = lazy(() => import("../pages/home/HomeFurnitureTwo"));
const HomeFurnitureThree = lazy(() =>
  import("../pages/home/HomeFurnitureThree")
);
const HomeFurnitureFour = lazy(() => import("../pages/home/HomeFurnitureFour"));
const HomeFurnitureFive = lazy(() => import("../pages/home/HomeFurnitureFive"));
const HomeFurnitureSix = lazy(() => import("../pages/home/HomeFurnitureSix"));
const HomeFurnitureSeven = lazy(() =>
  import("../pages/home/HomeFurnitureSeven")
);
const HomeElectronics = lazy(() => import("../pages/home/HomeElectronics"));
const HomeElectronicsTwo = lazy(() =>
  import("../pages/home/HomeElectronicsTwo")
);
const HomeElectronicsThree = lazy(() =>
  import("../pages/home/HomeElectronicsThree")
);
const HomeBookStore = lazy(() => import("../pages/home/HomeBookStore"));
const HomeBookStoreTwo = lazy(() => import("../pages/home/HomeBookStoreTwo"));
const HomePlants = lazy(() => import("../pages/home/HomePlants"));
const HomeFlowerShop = lazy(() => import("../pages/home/HomeFlowerShop"));
const HomeFlowerShopTwo = lazy(() => import("../pages/home/HomeFlowerShopTwo"));
const HomeOrganicFood = lazy(() => import("../pages/home/HomeOrganicFood"));
const HomeOrganicFoodTwo = lazy(() =>
  import("../pages/home/HomeOrganicFoodTwo")
);
const HomeOnepageScroll = lazy(() => import("../pages/home/HomeOnepageScroll"));
const HomeGridBanner = lazy(() => import("../pages/home/HomeGridBanner"));
const HomeAutoParts = lazy(() => import("../pages/home/HomeAutoParts"));
const HomeCakeShop = lazy(() => import("../pages/home/HomeCakeShop"));
const HomeHandmade = lazy(() => import("../pages/home/HomeHandmade"));
const HomePetFood = lazy(() => import("../pages/home/HomePetFood"));
const HomeMedicalEquipment = lazy(() =>
  import("../pages/home/HomeMedicalEquipment")
);
const HomeChristmas = lazy(() => import("../pages/home/HomeChristmas"));
const HomeBlackFriday = lazy(() => import("../pages/home/HomeBlackFriday"));
const HomeBlackFridayTwo = lazy(() =>
  import("../pages/home/HomeBlackFridayTwo")
);
const HomeValentinesDay = lazy(() => import("../pages/home/HomeValentinesDay"));

// shop pages
const ShopGridStandard = lazy(() => import("../pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("../pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("../pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("../pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("../pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("../pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("../pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("../pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("../pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("../pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("../pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("../pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("../pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("../pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("../pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("../pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("../pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("../pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("../pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("../pages/other/About"));
const Contact = lazy(() => import("../pages/other/Contact"));
const MyAccount = lazy(() => import("../pages/other/MyAccount"));
const LoginRegister = lazy(() => import("../pages/other/LoginRegister"));

const Cart = lazy(() => import("../pages/other/Cart"));
const Wishlist = lazy(() => import("../pages/other/Wishlist"));
const Compare = lazy(() => import("../pages/other/Compare"));
const Checkout = lazy(() => import("../pages/other/Checkout"));

const NotFound = lazy(() => import("../pages/other/NotFound"));
const Protected = lazy(() => import("./private"));

const router = createBrowserRouter([
  {
    element: <Protected />,
    children: [
      {
        element: <Protected />,
        children: [
          {
            path: "/",
            element: <HomeFashion />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
          {
            path: "/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/my-account",
            element: <MyAccount />,
          },
        ],
      },
    ],
  },
  {
    path: "/login-register",
    element: <LoginRegister />,
  },
]);

export default router;
