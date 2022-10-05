import { RegisterForm } from 'components/RegisterForm/RegisterForm';
const styles = {
  container: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
};

export default function RegisterPage() {
  return (
    <div style={styles.container} >
      
      <RegisterForm />
    </div>
  );
}