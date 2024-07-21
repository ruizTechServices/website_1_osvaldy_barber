// components/mainUI/login.tsx
import Login from '../mainUI/supabase/authentication/login';

const LoginComp: React.FC = () => {

  return (
    <Login redirectHref={'/'} />  // Use the renamed component here
  );
};

export default LoginComp;