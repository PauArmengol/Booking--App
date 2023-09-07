import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import useStore from '../store';
import { Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';


const BookingForm = ( { hotel } ) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addReservation = useStore((state) => state.addReservation);

    const onSubmit = (data) => {
        addReservation(hotel, data);
        toast.success("Reservation made!");
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="date" {...register("startDate", { required: true })} />
            {errors.startDate && (
                <Typography style={{ color: "red" }}>
                    Start Date is required
                </Typography>
            )}
            <br />
            <Input type="date" {...register("endDate", { required: true })} />
            {errors.endDate && (
                <Typography style={{ color: "green" }}>
                    End Date is required
                </Typography>
            )}
            <br />
            <br />
            <Button variant="contained" type="submit">
                Make Reservation
            </Button>
        </form>
    );
};
export default BookingForm; 