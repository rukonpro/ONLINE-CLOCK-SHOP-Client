import { Alert, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const emailOnBlur = (e) => setEmail(e.target.value);

    const handleAddAdmin = (e) => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        // e.target.reset()
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant='h6' color="secondary">Make Admin</Typography>
            <Box className='row'>
                <Box className="col-lg-6">
                    <form onSubmit={handleAddAdmin}>
                        {
                            success &&
                            <Alert severity="success">Admin add Success</Alert>

                        }
                        <TextField
                            color="secondary"
                            sx={{ width: 1 }}
                            label="Email"
                            type="email"
                            onBlur={emailOnBlur}
                            variant="standard" />
                        <Button sx={{ width: 1, mt: 5 }} color="secondary" type='submit' variant='contained' >Add Admin</Button>

                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default MakeAdmin;