import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Typography} from "@mui/material";

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
                    <Grid container gap={2} justifyContent={'center'}>
                        <Typography variant={'h3'} fontWeight={'bold'}>
                            Shopping List
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}