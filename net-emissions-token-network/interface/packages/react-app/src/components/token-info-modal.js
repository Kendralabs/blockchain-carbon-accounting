// SPDX-License-Identifier: Apache-2.0
import React from "react";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { FaCoins } from 'react-icons/fa';

export default function TokenInfoModal(props) {

  return (
    <Modal {...props} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Token Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mt-2 mb-4 mr-3">
          {/* Available and retired balances */}
          {props.token.showIssueeBalance ?
            <Col className="col-5 offset-1 text-right">
              <h5 className="text-secondary">Issuee's Available Balance</h5>
              <h1>{props.token.issueeAvailableBalance}</h1>
              <h5 className="text-secondary">Issuee's Retired Balance</h5>
              <h2>{props.token.issueeRetiredBalance}</h2>
            </Col>
            :
            <Col className="col-4 offset-1 text-right">
              <h5 className="text-secondary">Available Balance</h5>
              <h1>{props.token.availableBalance}</h1>
              <h5 className="text-secondary">Retired Balance</h5>
              <h2>{props.token.retiredBalance}</h2>
            </Col>
          }

          {/* token ID, icon, and type */}
          <Col className="col-3">
            <Row className="text-center">
              <Col>
                <h3 className="mb-1 mt-2">ID: {props.token.tokenId}</h3>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <h1 className="display-4">
                  <FaCoins />
                </h1>
              </Col>
            </Row>
            <Row className="text-center mt-1">
              <Col>
                <small className="text-secondary text-uppercase">
                  {props.token.tokenType}
                </small>
              </Col>
            </Row>
          </Col>

          {/* transfer and retire buttons (enabled if available balance) */}
          {!props.token.showIssueeBalance &&
          <Col className="col-3">
            <br />
            <Row className="text-left mb-2">
              <Col>
                <Button
                  variant="success"
                  href={`/transfer?tokenId=${props.token.tokenId}`}
                  disabled={Number(props.token.availableBalance) <= 0}
                >
                  Transfer
                </Button>
              </Col>
            </Row>
            <Row className="text-left mb-2">
              <Col>
                <Button
                  variant="danger"
                  href={`/retire?tokenId=${props.token.tokenId}`}
                  disabled={Number(props.token.availableBalance) <= 0}
                >
                  Retire
                </Button>
              </Col>
            </Row>
          </Col>}
        </Row>

        <table className="table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Issuer</td>
              <td className="text-monospace">{props.token.issuer}</td>
            </tr>
            <tr>
              <td>Issuee</td>
              <td className="text-monospace">{props.token.issuee}</td>
            </tr>
            <tr>
              <td>From date</td>
              <td>{props.token.fromDate}</td>
            </tr>
            <tr>
              <td>Thru date</td>
              <td>{props.token.thruDate}</td>
            </tr>
            <tr>
              <td>Automatic retire date</td>
              <td>{props.token.automaticRetireDate}</td>
            </tr>
            <tr>
              <td>Metadata</td>
              <td className="text-monospace" style={{ wordWrap: "anywhere" }}>
                {props.token.metadata}
              </td>
            </tr>
            <tr>
              <td>Manifest</td>
              <td>{props.token.manifest}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{props.token.description}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
