'use client';

import { signIn, signOut } from 'next-auth/react';
import { Button } from './ui/button';

export default function LoginButton({ session }: { session: any }) {
    if (session) {
        return (
            <>
                {session?.user?.email} <br />
                <Button onClick={() => signOut()}>
                    Log out
                </Button>
            </>
        );
    }
    return (
        <>
            <Button onClick={() => signIn('fusionauth')}>
                Log in
            </Button>
        </>
    );
}