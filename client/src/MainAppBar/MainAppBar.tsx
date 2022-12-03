import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Dialog} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function MainAppBar() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid item>
                        <Button size={'large'} variant="contained">
                            <LocalGroceryStoreIcon fontSize={'large'}/>
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}