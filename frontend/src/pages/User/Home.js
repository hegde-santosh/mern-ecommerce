import ProductCard from '../../components/ProductCard';
import './Home.css';

const Home = () => {
    return (
        <div className="card-list container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Home
