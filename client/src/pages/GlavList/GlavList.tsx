import styles from './GlavList.module.css';
import { useNavigate } from 'react-router-dom';

export default function GlavList(): JSX.Element {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/work');
    };
  return (
    <div>
        <button className={styles.editButton} onClick={handleClick}>
           Edit Dashboard
        </button>
    </div>
  )
}

