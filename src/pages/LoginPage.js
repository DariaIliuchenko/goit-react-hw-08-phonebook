import { LoginForm } from 'components/LoginForm/LoginForm';
const styles = {
  container: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "200px",
    
  },

};

export default function LoginPage() {
  return (
    <div style={styles.container}>
      
      <LoginForm />
    </div>
  );
}