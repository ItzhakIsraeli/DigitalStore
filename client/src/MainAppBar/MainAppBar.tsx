import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import {Badge, Typography, IconButton} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {itemsMiniStore, StoreState} from "../redux/miniStore";

export default function MainAppBar() {
    const items = useSelector((state: StoreState) => itemsMiniStore(state).ItemsList);

    const [isOpen, setIsOpen] = useState(false);
    const getTotalItems = () => {
        return items.length;
    }

    const handleOnClick = () => {
        setIsOpen(true);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid item>
                        <IconButton onClick={() => console.log('open')}>
                            <Badge badgeContent={getTotalItems()} color="error">
                                <AddShoppingCart fontSize={'large'}/>
                            </Badge>
                        </IconButton>
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