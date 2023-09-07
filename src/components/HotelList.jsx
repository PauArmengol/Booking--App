// COMPONENTE DEL LISTADO DE HOTELES

// importo useQuery de tanstack/react-query 
// useQuery permite el fetching, manejo de datos
// necesita pasarse una funcion de fetching 
// en este caso, se usa el API nativa del navegador de fetch para hacer las llamadas
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



// creo funcion ASINCRONA que llama con fecth a la url  
const fetchHotels = async () => {
    const response = await fetch("http://localhost:3001/hotels");

    //si la respuesta NO es ok, lanzo error
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }

    //si esta ok, devuelve datos
    //uso el metodo JSON para que devuelva un OBJETO
    return response.json();
};


// creo componente con funcion o const
// uso useQuery para esta funcion de fetching para traer los datos de los hoteles
const HotelList = () => {
    //hago destructuring del hook y devuelve: data(datos de los hoteles), propiedad booleana que indica si se esta cargando la peticion o no, y un error si lo hubiese.
    const {
        data: hotels,
        isLoading,
        error,
    } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels});
    //useQuery recibe como parametros un objeto con dos propiedades: queryKey(para el cacheado) y queryFn(la funcion creada fetchHotels)

    //compruebo si el isLoading es true
    if(isLoading) {
        return <div>Loading...</div>; //aca puedo poner un spinner si quiero
    }

    //si hay error
    if (error) {
        return <div>Error fetching Hotels! {error.message}</div>
    }

    //si esta todo bien, pinto el componente
    //uso MATERIALUI

    return (
        <>
            <Typography variant="h4" component="h2">
                Booking App
            </Typography>;

            <Stack spacing={2}>
                {hotels.map((hotel) => (
                    <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
                        <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8"}}>
                            <CardMedia 
                                sx={{ height: 140 }}
                                image={hotel.image}
                                title={hotel.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {hotel.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {hotel.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">See Details</Button>
                            </CardActions>
                        </Card>
                    </Link>
                ))}
            </Stack>
        </>
    );
};

export default HotelList; 
