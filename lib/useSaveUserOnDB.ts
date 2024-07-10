'use server';
import { useSession } from 'next-auth/react'
import connect from "./connect";
import User from '../models/UserSchema'
import { authConfig } from '../app/api/auth/[...nextauth]/new_options'
import { SessionType } from '../types/session.types';

export const useSaveUserOnDB = () => {
    const { data, status } = useSession()


    const signinAndSaveUserOnMongoDB = async() => {
        if(data && status === 'authenticated') {
            await connect();
            const user = await User.findOne({ email: data?.user?.email}) 
            if (user) {
                console.log('USER STORED')
            }
            if(!user) {
                await User.create({ email: data?.user?.email, name: data?.user?.name, password: 'EMPTY' });
                console.log('USER CREATED')
            }
        }
        else { return null }
        console.log('SSSSSS =====>')
    }
    signinAndSaveUserOnMongoDB();
};

