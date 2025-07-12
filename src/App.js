import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTile, setSelectedTile] = useState([]);

  const handleTileClick = (tileId) => {
    console.log(`Tile ${tileId} clicked`);
    setSelectedTile([tileId, ...selectedTile]);

  };

  const handleClear = () => {
    setSelectedTile([]);
  }

  return (
    <>
      <div className="App">
        <Container style={{ marginTop: '20px', maxWidth: "600px" }}>
          <Row className="mb-3 g-3" style={{ gap: "15px" }}>
            <Col onClick={() => handleTileClick(1)} className={selectedTile.find((item) => item === 1) === 1 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>1 </Col>
            <Col onClick={() => handleTileClick(2)} className={selectedTile.find((item) => item === 2) === 2 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>2 </Col>
            <Col onClick={() => handleTileClick(3)} className={selectedTile.find((item) => item === 3) === 3 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}> 3</Col>
          </Row>
          <Row className="mb-3 g-3" style={{ gap: "15px" }}>
            <Col onClick={() => handleTileClick(4)} className={selectedTile.find((item) => item === 4) === 4 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>4 </Col>
            <Col onClick={() => handleTileClick(5)} className={selectedTile.find((item) => item === 5) === 5 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}> 5</Col>
            <Col onClick={() => handleTileClick(6)} className={selectedTile.find((item) => item === 6) === 6 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>6 </Col>
          </Row>
          <Row className="mb-3 g-3" style={{ gap: "15px" }}>
            <Col onClick={() => handleTileClick(7)} className={selectedTile.find((item) => item === 7) === 7 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>7 </Col>
            <Col onClick={() => handleTileClick(8)} className={selectedTile.find((item) => item === 8) === 8 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>8 </Col>
            <Col onClick={() => handleTileClick(9)} className={selectedTile.find((item) => item === 9) === 9 ? 'clicked' : 'non-clicked'} style={{ cursor: 'pointer', borderRadius: "5px", border: "1px solid white", height: "50px", }}>9 </Col>
          </Row>
        </Container>
        <Button onClick={handleClear}>Clear</Button>
      </div >
    </>
  );
}

export default App;
