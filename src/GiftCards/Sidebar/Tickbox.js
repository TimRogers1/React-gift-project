

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    reiss: false,
    nike: false,
    levi: false,
    jag: false,
    apple: false,
    kogan: false,
    phillips: false,
    kmart: false,
    GregaryDavidRoberts: false,
    LeeChild: false,
    WilburSmith: false,
    PhilKnight: false,
  });

  useEffect(() => {
    props.selected(state);
  }, [state]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
}

  const { reiss, nike, levi, jag, apple, kogan, phillips, kmart, GregaryDavidRoberts, LeeChild, WilburSmith, PhilKnight } = state;
  const error = [reiss, nike, levi, jag, apple, kogan, phillips, kmart, GregaryDavidRoberts, LeeChild, WilburSmith, PhilKnight].filter((v) => v).length !== 2;

  let tickBoxjsx = null;

  if (props.category === 'fashion') {
    tickBoxjsx = (
      <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={reiss} onChange={handleChange} name="reiss" />}
            label="Reiss"
          />
          <FormControlLabel
            control={<Checkbox checked={nike} onChange={handleChange} name="nike" />}
            label="Nike"
          />
          <FormControlLabel
            control={<Checkbox checked={levi} onChange={handleChange} name="levi" />}
            label="Levi"
          />
          <FormControlLabel
            control={<Checkbox checked={jag} onChange={handleChange} name="jag" />}
            label="Jag"
          />
        </FormGroup>
    )
  } else if (props.category === 'electronics') {
    tickBoxjsx = (
      <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={apple} onChange={handleChange} name="apple" />}
            label="Apple"
          />
          <FormControlLabel
            control={<Checkbox checked={kmart} onChange={handleChange} name="kmart" />}
            label="Kmart"
          />
          <FormControlLabel
            control={<Checkbox checked={phillips} onChange={handleChange} name="phillips" />}
            label="Phillips"
          />
          <FormControlLabel
            control={<Checkbox checked={kogan} onChange={handleChange} name="kogan" />}
            label="Kogan"
          />
        </FormGroup>
    )

  } else {
    tickBoxjsx = (
      <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={GregaryDavidRoberts} onChange={handleChange} name="GregaryDavidRoberts" />}
        label='Gregary David Roberts'
      />
      <FormControlLabel
        control={<Checkbox checked={PhilKnight} onChange={handleChange} name="PhilKnight" />}
        label="Phil Knight"
      />
      <FormControlLabel
        control={<Checkbox checked={LeeChild} onChange={handleChange} name="LeeChild" />}
        label="Lee Child"
      />
      <FormControlLabel
        control={<Checkbox checked={WilburSmith} onChange={handleChange} name="WilburSmith" />}
        label="Wilbur Smith"
      />
    </FormGroup>
    )

  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        {props.category === "books" ? <FormLabel component="legend"><strong>Author</strong></FormLabel> : <FormLabel component="legend"><strong>Brands</strong></FormLabel>}
        {tickBoxjsx}
      </FormControl>
    </div>
  );
}
