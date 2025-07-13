import express from 'express';
import { isSellerAuth, sellerLogin, sellerLogout } from '../controllers/sellerController';
const sellerRouter=express.Router();
import authSeller from '../middlewares/authSeller';

sellerRouter.post('/login',sellerLogin);
sellerRouter.get('/is-auth',authSeller,isSellerAuth);
sellerRouter.get('/logout',sellerLogout);

export default sellerRouter;

