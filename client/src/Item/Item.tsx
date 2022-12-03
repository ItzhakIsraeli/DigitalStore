import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, ListItemButton, Typography} from "@mui/material";
import {ItemDialog} from "../ItemDialog/ItemDialog";

export interface ItemType {
    name: string,
    description: string,
    price: number,
    image: string,
    image2: string,
    market: string
}

export const Item = (item:ItemType) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (<>
            <ItemDialog isOpen={isOpen} handleClose={handleClose} item={item}/>
            <ListItemButton onClick={() => setIsOpen(true)}>
                <Card sx={{display: 'flex', width: 500, height: 200}}>
                    <Grid container justifyContent={'center'} gap={15}>
                        <Grid item xs>.
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent>
                                    <Typography component="div" variant="h5">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Price: {item.price} ₪
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <CardMedia
                                sx={{display: 'flex', width: 190, height: 180}}
                                component="img"
                                image={require(`../assets/${item.image}`)}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </ListItemButton>
        </>
    )
}