import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Blog_Card = () => {
  return (
    <Card className="flex flex-col"
    style={{width: "50%"}}>
      <CardMedia
        component="img"
        image="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg"
        alt="Image Alt Text"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          The 16 Best CMS Systems Today & How to Choose
        </Typography>
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
    </Card>
  );
};

export default Blog_Card;
