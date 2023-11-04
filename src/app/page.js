'use client'

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

async function getData() {

  const res = await fetch('http://localhost:3000/api/product')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  // Check if data is an array before using map
  if (Array.isArray(data)) {
    const processedData = data.map((item, arr) => {
      // Perform some operation on each item in the array
      // For example, let's assume the item is an object with a 'name' property
      return (
        <>
          <Card className="rootcard" key={arr} >
            <CardActionArea>
              <CardMedia
                component="img"
                height={"500"}
                
                image={item.mediaUrl}
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Rs {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </>

      );

    });

    console.log(processedData);

    return <div>{processedData}</div>;
  } else {
    return <div>No data available</div>;
  }
}