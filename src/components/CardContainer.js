import PlayerCard from "./PlayerCard"
import { Col, Container, FormControl, Row } from "react-bootstrap"
import { data } from "../helper/data"
import { useState } from "react"

const CardContainer = () => {
    const [player, setPlayer] = useState('')
    
    const handleInput = (e) => {
        setPlayer(e.target.value)
    }
    return (
      <>
        <FormControl
          type="search"
          value={player}
          className=" w-50 m-auto"
          onChange={handleInput}
          placeholder="Search Player..."
        />
        <Container className="card-container rounded-4 my-4 p-3 h-100   ">
          <Row className="g-3 justify-content-center h-100">
            {data
              .filter(({ name }) =>
                name.toLowerCase().includes(player.trim().toLowerCase())
              )
              .map((item, i) => (
                <Col md={6} lg={4} xl={3} key={i}>
                  {" "}
                  <PlayerCard {...item} />{" "}
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
}
export default CardContainer