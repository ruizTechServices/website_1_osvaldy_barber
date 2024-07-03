// components/Logout.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../../../../lib/supabase/client';
import { Button } from '@/components/ui/button';

const Logout = () => {
  const [message, setMessage] = useState<string>('');

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('User logged out successfully!');
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Log Out</Button>
      <p className='text-white'>{message}</p>
    </div>
  );
};

export default Logout;
