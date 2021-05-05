import './Dashboard.css';
import Tile from './tile/Tile'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <h1>
          Your dashboard
        </h1>
        <div className="Tiles">
          <Tile title="Reading" value="Planet of the Apes" />
          <Tile title="Rank" value="#8" />
          <Tile title="Friends" value="12" />
          <Tile title="Score" value="1337" />
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
