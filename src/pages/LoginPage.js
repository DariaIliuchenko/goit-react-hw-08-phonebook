import { LoginForm } from 'components/LoginForm/LoginForm';
const styles = {
  container: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <title >Login</title>
      <LoginForm />
    </div>
  );
}