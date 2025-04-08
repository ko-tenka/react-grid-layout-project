import styles from './TaskPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function TaskPage(): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/work');
  };
  
  return (
    <div>
      Приветик
      <button className={styles.editButton} onClick={handleClick}>
        Edit Dashboard
      </button>
    </div>
  );
}











