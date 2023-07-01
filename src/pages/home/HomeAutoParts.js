import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyOne from "../../wrappers/hero-slider/HeroSliderTwentyOne";
import TabProductThirteen from "../../wrappers/product/TabProductThirteen";
import BannerEighteen from "../../wrappers/banner/BannerEighteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

const HomeAutoParts = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Auto parts Home"
        description="Auto parts home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyOne />
        {/* tab product */}
        <TabProductThirteen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category="auto parts"
        />
        {/* banner */}
        <BannerEighteen spaceBottomClass="pb-85" />
        {/* countdown */}
        <CountDownThree
          spaceBottomClass="pb-100"
          dateTime="November 13, 2023 12:12:00"
          countDownImage="/assets/img/banner/deal-7.png"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeAutoParts;
