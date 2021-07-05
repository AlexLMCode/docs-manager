import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

import CardComponent from "../components/CardComponent";
import TableComponent from "../components/TableComponent";

export const MainPage = () => {
    return (
        <div>

            <main>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <CardComponent total={20} name={'Archiveros'} to='/archiveros'/>
                        </Col>
                        <Col>
                            <CardComponent total={20} name={'Cajones'} to='/cajones'/>
                        </Col>
                        <Col>
                            <CardComponent total={20} name={'Expedientes'} to='/expedientes'/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='text-center fw-bold'>Ultimos 5 Archiveros solicitados...</p>
                    </Row>
                    <Row>
                        <Col>
                            <TableComponent/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='text-center fw-bold'>Ultimos 5 Cajones solicitados...</p>
                    </Row>
                    <Row>
                        <Col>
                            <TableComponent/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='text-center fw-bold'>Ultimos 5 Expedientes solicitados...</p>
                    </Row>
                    <Row>
                        <Col>
                            <TableComponent/>
                        </Col>
                    </Row>
                </Container>
            </main>

        </div>
    )
}
