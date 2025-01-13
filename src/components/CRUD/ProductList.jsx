// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { productList, deleteProduct } from '../redux/CrudSlice';
// import { Box, Button, CardActions, CardContent, Container, Grid, Typography, Pagination, TextField } from '@mui/material';
// import { imagePath } from '../../helper/Helper';
// import { Link } from 'react-router-dom';
// import SweetAlertComponent from '../../SweetAlert/SweetAlert';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// function ProductList() {
//     const { products, isloading, totalPage } = useSelector((state) => state.crudKey);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const [totalRecords, setPage] = useState();
//     const [delete_id, setDelete_id] = useState("");
//     const [isDelete, setIsDelete] = useState(false);
    
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(productList());
//     }, [dispatch]);

//     useEffect(() => {
//         setFilteredProducts(
//             products.filter(product =>
//                 product.title.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//         );
//     }, [searchTerm, products]);

//     const delete_func = (id) => {
//         if (delete_id !== "") {
//             dispatch(deleteProduct(delete_id)).then(() => {
//                 dispatch(productList());
//             });
//         }
//         setDelete_id("");
//         setIsDelete(false);
//     }

//     const handleChange = (item, pagenuumber) => {
//         setPage(pagenuumber);
//         dispatch(productList({
//             page: pagenuumber,
//             perpage: 10,
//         }));
//     }

//     return (
//         <div>
//             <Container maxWidth="lg">
//                 <TextField
//                     variant="outlined"
//                     label="Search Foods"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     style={{ marginBottom: '20px', width: '300px', marginTop: 15 }}
//                 />
//                 <Grid container spacing={2} style={{ marginTop: 10, alignItems: "center", justifyContent:'center' }}>
//                     {
//                         filteredProducts?.map((item) => (
//                             <Grid item xl={4} key={item._id}>
//                                 <CardContent>
//                                     <Box
//                                         component="img"
//                                         sx={{
//                                             width: '100%',
//                                             height: '200px',
//                                             objectFit: 'fill',
//                                             borderRadius: 2,
//                                         }}
//                                         alt="Example Image"
//                                         src={item.image ? imagePath(item.image) : "error"}
//                                     />
//                                     <Typography variant="h5" component="div" sx={{mt:2}}>
//                                         {item.title}
//                                     </Typography>
//                                     <Typography variant="body2">
//                                         {item.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions style={{ justifyContent: 'center' }}>
//                                     <Button
//                                         size='small'
//                                         variant='contained'
//                                         startIcon={<DeleteIcon />}
//                                         onClick={() => {
//                                             setDelete_id(item._id);
//                                             setIsDelete(true);
//                                         }}> DELETE </Button>
//                                     <Button
//                                         size='small'
//                                         variant='contained'
//                                         color='primary'
//                                         startIcon={<EditIcon />}>
//                                         <Link to={`/product/detail/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
//                                             EDIT
//                                         </Link>
//                                     </Button>
//                                 </CardActions>
//                             </Grid>
//                         ))
//                     }
//                 </Grid>
//                 {isDelete && <SweetAlertComponent
//                     confirm={delete_func}
//                     cancel={() => setIsDelete(false)}
//                     title={"Are you sure?"}
//                     subtitle={"You will not be able to recover"}
//                 />}

//                 <Pagination
//                     count={totalPage}
//                     onChange={handleChange}
//                     sx={{ display: 'flex', justifyContent: 'center' }}
//                 />
//             </Container>
//         </div>
//     );
// }

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productList, deleteProduct } from '../redux/CrudSlice';
import { Box, Button, CardActions, CardContent, Container, Grid, Typography, Pagination, TextField } from '@mui/material';
import { imagePath } from '../../helper/Helper';
import { Link } from 'react-router-dom';
import SweetAlertComponent from '../../SweetAlert/SweetAlert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProductList() {
    const { products, isloading, totalPage } = useSelector((state) => state.crudKey);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [totalRecords, setPage] = useState();
    const [delete_id, setDelete_id] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    const delete_func = (id) => {
        if (delete_id !== "") {
            dispatch(deleteProduct(delete_id)).then(() => {
                dispatch(productList());
            });
        }
        setDelete_id("");
        setIsDelete(false);
    }

    const handleChange = (item, pagenuumber) => {
        setPage(pagenuumber);
        dispatch(productList({
            page: pagenuumber,
            perpage: 10,
        }));
    }

    return (
        <div>
            <Container maxWidth="lg">
                <TextField
                    variant="outlined"
                    label="Search Foods"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '20px', width: '300px', marginTop: 15 }}
                />
                <Grid container spacing={2} style={{ marginTop: 10, alignItems: "center", justifyContent:'center' }}>
                    {
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <Grid item xl={4} key={item._id}>
                                    <CardContent>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'fill',
                                                borderRadius: 2,
                                            }}
                                            alt="Example Image"
                                            src={item.image ? imagePath(item.image) : "error"}
                                        />
                                        <Typography variant="h5" component="div" sx={{mt:2}}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'center' }}>
                                        <Button
                                            size='small'
                                            variant='contained'
                                            startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                setDelete_id(item._id);
                                                setIsDelete(true);
                                            }}> DELETE </Button>
                                        <Button
                                            size='small'
                                            variant='contained'
                                            color='primary'
                                            startIcon={<EditIcon />}>
                                            <Link to={`/product/detail/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                                                EDIT
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="h6" component="div" sx={{ mt: 5, textAlign: 'center' }}>
                                No products found.
                            </Typography>
                        )
                    }
                </Grid>
                {isDelete && <SweetAlertComponent
                    confirm={delete_func}
                    cancel={() => setIsDelete(false)}
                    title={"Are you sure?"}
                    subtitle={"You will not be able to recover"}
                />}

                <Pagination
                    count={totalPage}
                    onChange={handleChange}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            </Container>
        </div>
    );
}

export default ProductList;










