import Header from "../components/Header.js";
import HowWork from "../components/HowWork.js";
import LearnMore from "../components/LearnMore";
import Categories from "../components/CategoriesSection";
import HireTalents from "../components/HireTalents";
import TestimonialsSection from "../components/TestimonialsSection";

const home = () => {
    return (
        <>
        <Header/>
        <HowWork />
        <LearnMore />
        <Categories />
        <HireTalents />
        <TestimonialsSection />
        </>
    )
}

export default home;