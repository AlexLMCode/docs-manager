import React from 'react';
import {Table} from "react-bootstrap";

const TableComponent = () => {
    return (
        <Table striped bordered hover >
            <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Junta</th>
                <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                {/*<td colSpan="2">Larry the Bird</td>*/}
                <td>Larry the Bird</td>
                <td>Hello</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>

            </tbody>
        </Table>
    );
};

export default TableComponent;