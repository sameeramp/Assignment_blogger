import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home_Card = () => {
  return (
    <Card className="flex flex-col"
    style={{width: "50%", height: "75%"}}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Quam viverra orci sagittis eu volutpat. 
        Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. 
        Rutrum tellus pellentesque eu tincidunt tortor. 
        Nam at lectus urna duis convallis convallis tellus id. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames. 
        Sagittis nisl rhoncus mattis rhoncus urna neque viverra. 
        Auctor urna nunc id cursus metus aliquam eleifend mi in. 
        Maecenas accumsan lacus vel facilisis. 
        Magna fermentum iaculis eu non diam phasellus vestibulum. 
        Pellentesque habitant morbi tristique senectus et netus. 
        Aliquam ut porttitor leo a diam sollicitudin tempor. 
        Libero enim sed faucibus turpis in eu mi bibendum. 
        Congue quisque egestas diam in arcu.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Image Alt Text"
      />
    </Card>
  );
};

export default Home_Card;
