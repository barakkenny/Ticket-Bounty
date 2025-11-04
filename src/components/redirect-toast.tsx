"use client";
import { deleteCookieByKey, getCookieBykey } from '@/actions/cookies';
import { useEffect } from 'react';
import { toast } from 'sonner';


const RedirectToast = () =>{
    useEffect(() => {
        const message = getCookieBykey('toast');
        if(message){
            toast.success(message);
            deleteCookieByKey('toast');
        }
    }, []);

    return null;
}

export { RedirectToast };