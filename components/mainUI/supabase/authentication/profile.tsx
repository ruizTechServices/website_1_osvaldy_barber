// components/User.tsx
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase/client';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setError(error.message);
      } else {
        setUser(data?.user);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Information</h1>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
