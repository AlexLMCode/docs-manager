import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SearchComponent from "../components/SearchComponent";
import TableComponent from "../components/TableComponent";

const ExpedientePage = () => {
    return (
        <Container>
            <Row >
                <Col className="text-center m-3">
                    <h1 >Expedientes...</h1>
                </Col>
            </Row>
            <Row>
                <Col className='mb-5'>
                    <SearchComponent name={'Busca el nombre del Expediente...'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ExpedientePage;