import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import { editProductData, editProductList } from "../redux/CrudSlice";
export default function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Editlist } = useSelector((state) => state.crudKey);
    const { id } = useParams();
    const [img, setImg] = useState(null);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(editProductList(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (Editlist) {
            setValue("title", Editlist.title);
            setValue("description", Editlist.description);
            setValue("image", Editlist.image);
        }
    }, [Editlist, setValue]);

    const onSubmit = (data) => {
        const formdata = new FormData();
        formdata.append("id", id);
        formdata.append("title", data.title);
        formdata.append("description", data.description);

        if (img) {
            formdata.append("image", img);
        }

        dispatch(editProductData(formdata, id))
            .then(() => {
                navigate('/productlist');
            })
            .catch((error) => {
                console.error("Error editing product:", error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ marginTop: 2 , fontWeight: 'bold', color: 'primary.main', fontSize: {xs:'20px',sm:'30px', md:'50px'}}} gutterBottom> UPDATE DETAILS </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    margin="normal"
                    {...register("title", { required: "Enter your title" })}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ""}
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    {...register("description", { required: "Enter your description" })}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ""}
                />

                <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    name="img"
                    accept="image/*"
                />

                {img ? (
                    <img
                        src={URL.createObjectURL(img)}
                        alt="Uploaded"
                        className="upload-img"
                        style={{ height: 200, width: 200 }}
                    />
                ) : (
                    Editlist?.image && (
                        <img
                            src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${Editlist.image}`}
                            alt="Existing Product"
                            className="upload-img"
                            style={{ height: 150, width: 150, marginBottom: 5 }}
                        />
                    )
                )}

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginBottom: 5 }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
}








