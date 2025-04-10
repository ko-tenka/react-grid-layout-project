import styles from './BlockSearc.module.css';
import { useNavigate } from 'react-router-dom';

export default function BlockSearch(): JSX.Element  {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/work');
    };
  return (
    <div className={styles.container}>
      <button className={styles.editButton} onClick={handleClick}>
        Edit Dashboard
      </button>
    </div>
  )
}

