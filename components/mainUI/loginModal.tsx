import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import Link from 'next/link';

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <button className="hidden">Open Login Modal</button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Login or Register</DialogTitle>
                <DialogDescription>
                    <p>Please log in or register to make an appointment.</p>
                    <div className="flex flex-col gap-4">
                        <Link href="/login_register">
                            <button className="rounded-xl bg-black p-2 text-white">Log In</button>
                        </Link>
                        <Link href="/login_register">
                            <button className="rounded-xl bg-yellow-500 p-2 text-white">Register</button>
                        </Link>
                    </div>
                </DialogDescription>
                <DialogClose asChild>
                    <button className="text-white">Close</button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
