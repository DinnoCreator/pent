import FindCar from "../../components/findacar/FindCar";
import HomeNav from "../../components/homenav/HomeNav";
import Soil from "../../components/soil/Soil";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
        <HomeNav/>
        <FindCar/>
        <Soil/>
        <Article/>
        <Footer/>
        </>
    );
}

export default Home;