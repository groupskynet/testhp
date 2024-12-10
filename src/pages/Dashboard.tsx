import MovieSearch from '../components/MovieSearch';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-6">
        <MovieSearch />
      </main>
    </div>
  );
};

export default Dashboard;
