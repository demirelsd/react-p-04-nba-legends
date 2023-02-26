import { Card } from "react-bootstrap";
import { useState } from "react";

const PlayerCard = ({name, img, statistics}) => {
  const [show, setShow] = useState(true)
  return (
    <Card className="player-card "onClick ={()=>setShow(!show)} >
      { show ?
        <Card.Img variant="top" src={ img } className='player-img' role='button' />
        :
        <Card.Body className="d-flex ">
        <ul className="m-auto statistic">
          { statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start ps-2">
                
                {item}
              </li>
            );

          }) }
        </ul>
      </Card.Body>}
      
      <Card.Footer>
              <Card.Title>{ name }</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default PlayerCard;
