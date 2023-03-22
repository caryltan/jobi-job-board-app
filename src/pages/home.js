import Header from "../components/Header.js";
import HowWork from "../components/HowWork.js";
import LearnMore from "../components/LearnMore";
import Categories from "../components/CategoriesSection";
import HireTalents from "../components/HireTalents";

const home = () => {
    return (
        <>
        <Header/>
        <HowWork />
        <LearnMore />
        <Categories />
        <HireTalents />
        </>
    )
}

export default home;