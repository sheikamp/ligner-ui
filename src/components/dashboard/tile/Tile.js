import './Tile.css';

const Tile = ({ title, value }) => {
  return (
    <div className="Tile">
        <h3>
          {title}
        </h3>
        <p>
            {value}
        </p>
    </div>
  );
}

export default Tile;
