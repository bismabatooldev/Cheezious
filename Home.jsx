
import Layout from '../components/Layout'
import Slider from "../components/Slider"
import Cheezy from './Cheezy';
import ImBack from './ImBack';
import Pizza from './Pizza';
import SomeSooper from './SomeSooper';
import Somelocal from './Somelocal';
import Starters from './Starters';

const Home = () => {
    return (
        <Layout>
        <Slider/>
        <ImBack/>
        <Starters/>
        <Somelocal/>
        <SomeSooper/>
        <Cheezy/>
        <Pizza/>
        </Layout>
    )
}

export default Home;