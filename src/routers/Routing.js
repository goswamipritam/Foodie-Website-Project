import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../share module/Footer/Footer';
import Header from '../share module/Header/Header';

const Home = React.lazy(() => import('../components/Home/Home'));
const ContactUs = React.lazy(() => import('../Contact Us/ContactUs'));
const Registration = React.lazy(() => import('../components/Registration/Registration'));
const Login = React.lazy(() => import('../components/Login/Login'));
const CreateProduct = React.lazy(() => import('../components/CRUD/CreateProduct'));
const ProductList = React.lazy(() => import('../components/CRUD/ProductList'));
const Update = React.lazy(() => import('../components/CRUD/Updateproduct'));
const Profile = React.lazy(() => import('../components/Profile/Profile'));

const publicRoutes = [
    { path: '/', element: <Login /> },
    { path: '/registration', element: <Registration /> },
    { path: '/contact', element: <ContactUs /> },
];

const privateRoutes = [
    { path: '/home', element: <Home /> },
    { path: '/createproduct', element: <CreateProduct /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/product/detail/:id', element: <Update /> },
    { path: '/profile', element: <Profile /> },
];

const PrivateRoute = ({ element }) => {
    const { isLoggedIn } = useSelector((state) => state.authKey);
    return isLoggedIn ? element : <Navigate to="/" replace />;
};

function Routing() {
    return (
        <Router>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}

                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<PrivateRoute element={route.element} />}
                        />
                    ))}
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default Routing;

