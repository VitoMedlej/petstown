"use client"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup({value,setValue}:any) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl className='flex row' sx={{flex:1,width:'100%'}}>
      <RadioGroup
      
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
        <FormControlLabel value="pickup" control={<Radio />} label="Store pickup" />
      </RadioGroup>
    </FormControl>
  );
}
