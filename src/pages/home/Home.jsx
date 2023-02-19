import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Home() {
  const data = [
    {
      image: "https://picsum.photos/id/237/300/200",
      animalName: "lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
    {
      image: "https://picsum.photos/id/27/300/200",
      animalName: "Jaguar",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
    {
      image: "https://picsum.photos/id/127/300/200",
      animalName: "Monkey",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
    {
      image: "https://picsum.photos/id/367/300/200",
      animalName: "Lion",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
    {
      image: "https://picsum.photos/id/627/300/200",
      animalName: "Parrot",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
    },
  ];

  return data.map((card) => (
    <Card sx={{ width: "600px", margin: "0 auto", marginBottom: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={card.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.animalName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
}
