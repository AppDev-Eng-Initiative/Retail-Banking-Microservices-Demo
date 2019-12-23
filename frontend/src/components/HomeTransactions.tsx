import React from "react";
import {Button, Modal, ButtonToolbar} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function MyVerticallyCenteredModal(props) {
  const classes = useStyles();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Recent Transactions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Ended Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function createData(id: string, amount: number, type: string, date: string, balance: number) {
  return { id, amount, type, date, balance };
}

const rows = [
  createData('Frozen yoghurt', 159, "credit", "2019/2/4", 4.0),
  createData('Ice cream sandwich', 237, "dedit", "2019/2/4", 4.3),
  createData('Eclair', 262, "credit", "2019/2/4", 6.0),
  createData('Cupcake', 305, "dedit", "2019/2/4", 4.3),
  createData('Gingerbread', 356, "credit", "2019/2/4", 3.9),
];

const Transactions: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <h1>Transactions</h1>
      <p>Transaction 1</p>
      <p>Transaction 2</p>
      <p>Transaction 3</p>
      <ButtonToolbar style={{justifyContent: 'center'}}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            More
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </ButtonToolbar>
    </div>
  );
};

export default Transactions;