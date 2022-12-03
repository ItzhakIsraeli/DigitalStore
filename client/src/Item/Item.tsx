import React from 'react';
import {Grid, Card, Box, CardContent, Typography, CardMedia} from "@mui/material";

interface ItemType {
    item: {
        name: string,
        description: string,
        price: number,
        image: string
    }
}

export const Item = ({item}: ItemType) => {

    return (
        <Card sx={{display: 'flex', width: 500, height: 200}}>
            <Grid container justifyContent={'center'} gap={15}>
                <Grid item>
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
                <Grid item>
                    <CardMedia
                        sx={{display: 'flex', width: 100, height: 180}}
                        component="img"
                        image={require(`../assets/${item.image}`)}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}