import './Home.css'
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import HotBids from '../HotBids/HotBids';
import TopCollection from '../TopCollection/TopCollection';
import SingleProduct from '../SingleProduct/SingleProduct';
import PopulerCard from '../PopulerCard/PopulerCard';
import CreateNfts from '../CreateNfts/CreateNfts';
import Roadmap from '../Roadmap/Roadmap';
import Community from '../Community/Community';
import './Home.css'
import TopPeople from '../TopPeople/TopPeople';



const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
           <HotBids></HotBids>
            <TopCollection></TopCollection>
            <SingleProduct></SingleProduct>
            <PopulerCard></PopulerCard>
            <CreateNfts></CreateNfts>
            <Roadmap></Roadmap>
            <TopPeople></TopPeople>
            <Community></Community>
            
        </>
    );
};

export default Home;