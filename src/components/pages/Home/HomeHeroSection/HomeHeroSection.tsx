import { AppRoutes } from "@/core/router";
import { Link } from "react-router-dom";
import { TextBox } from "./TextBox";
import { HeroSectionMainContainer } from "./HeroSectionMainContainer";

function HomeHeroSection() {
  return (
    <HeroSectionMainContainer>
      <TextBox />
      <Link to={AppRoutes.login} className="btn btn-primary px-8">
        Start tracking now
      </Link>
    </HeroSectionMainContainer>
  );
}

export { HomeHeroSection };
