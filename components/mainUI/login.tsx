// Rename the imported Login component
import Login from '../mainUI/supabase/authentication/login';

const LoginComp: React.FC = () => {

  return (
    <Login />  // Use the renamed component here
  );
};

export default LoginComp;