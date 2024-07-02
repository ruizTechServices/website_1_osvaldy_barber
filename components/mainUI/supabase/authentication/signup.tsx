// components/Signup.tsx
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../../../lib/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const [message, setMessage] = useState<string>('');

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const signUpUser: SubmitHandler<SignupFormValues> = async ({ email, password }) => {

    let { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('User signed up successfully!');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(signUpUser)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='my-5' type="submit">Sign Up</Button>
        <p>{message}</p>
      </form>
    </Form>
  );
};

export default Signup;
