import React from "react";
import {Button, Modal, ButtonToolbar} from 'react-bootstrap';
import { Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
          Transfer Money
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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


const Transfer: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <h1>Transfer</h1>

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

export default Transfer;