import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  space: {
    marginRight: theme.spacing.unit * 5,
  },
  text: {
    marginTop: 20,
  },
});

class GetPermissionedRecordForm extends Component {
  render() {
    const { dataHash, onInputChange, handleSubmit, classes } = this.props;

    return (
      <div>
        <Typography variant='body1' className={classes.text}>
          Let's fetch a record which was permissioned to you from the smart contracts by inputting its data hash.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id='dataHash'
            label='Record Data Hash'
            required
            className={classes.space}
            value={dataHash.replace(/\s/g, '')}
            onChange={onInputChange}
            margin='normal'
          />
          <Button
            type='submit'
          >
            Get Permissioned Record
          </Button>
        </form>
      </div>
    );
  }
}

GetPermissionedRecordForm.propTypes = {
  dataHash: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(GetPermissionedRecordForm);
