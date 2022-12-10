import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import {
    Badge,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    Alert,
    DialogContent,
    DialogContentText
} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {itemsMiniStore, StoreState} from "../redux/miniStore";
import {CartForm} from "../CartForm/CartForm";

export default function MainAppBar() {
    const items = useSelector((state: StoreState) => itemsMiniStore(state).ItemsList);

    const [isOpen, setIsOpen] = useState(false);
    const getTotalItems = () => {
        return items.length;
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <>

            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid item>
                            <IconButton onClick={() => setIsOpen(true)}>
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
            <CartForm isOpen={isOpen} handleClose={handleClose}/>
        </>
    );
}