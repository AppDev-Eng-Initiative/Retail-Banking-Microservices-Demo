import React from "react";
import {Button, Modal, ButtonToolbar} from 'react-bootstrap'
import {makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from '@material-ui/core';
import { Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

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
          Make a Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <TableContainer component={Paper}>
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
          </TableContainer> */}
                    <form className={classes.root} noValidate autoComplete="off">
            <div>
              {/* <TextField required id="standard-required" label="From" defaultValue="SAVINGS" /> */}
              <TextField required id="standard-required" label="From"/>
              <TextField required id="standard-required" label="To"/>
              <TextField required id="standard-required" label="Amount"/>
              {/* <TextField
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
              <TextField id="standard-required" label="Note"/>
              {/* <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
              /> */}
            </div>
          </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function createData(id: string, amount: number, type: string, date: string, balance: number) {
//   return { id, amount, type, date, balance };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, "credit", "2019/2/4", 4.0),
//   createData('Ice cream sandwich', 237, "dedit", "2019/2/4", 4.3),
//   createData('Eclair', 262, "credit", "2019/2/4", 6.0),
//   createData('Cupcake', 305, "dedit", "2019/2/4", 4.3),
//   createData('Gingerbread', 356, "credit", "2019/2/4", 3.9),
//   createData('Frozen yoghurt', 159, "credit", "2019/2/4", 4.0),
//   createData('Ice cream sandwich', 237, "dedit", "2019/2/4", 4.3)
// ];

const Transactions: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <h1>Transactions</h1>
      <p>Transaction 1</p>
      <p>Transaction 2</p>
      <p>Transaction 3</p>
      <Fab color="primary" aria-label="add" style={{bottom: '0px'}}>
        {/* <AddIcon onClick={() => setModalShow(true)}></AddIcon> */}
        <AddIcon onClick={() => setModalShow(true)}></AddIcon>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </Fab>
    </div>
  );
};

export default Transactions;