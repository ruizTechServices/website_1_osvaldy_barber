'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../../../lib/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type LoginProps = {
  redirectHref: string;
};

const Login: React.FC<LoginProps> = ({ redirectHref }) => {
  const [message, setMessage] = useState<string>('');

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const loginUser: SubmitHandler<LoginFormValues> = async ({ email, password }) => {

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('User logged in successfully!');
      if (email === 'giosterr44@gmail.com') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loginUser)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>Email</FormLabel>
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
              <FormLabel className='text-white'>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='my-5 bg-blue-800' type="submit">Log In</Button>
        <p className='text-white'>{message}</p>
      </form>
    </Form>
  );
};

export default Login;