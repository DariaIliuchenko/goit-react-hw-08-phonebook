import { RegisterForm } from 'components/RegisterForm/RegisterForm';
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

export default function RegisterPage() {
  return (
    <div style={styles.container} >
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
}