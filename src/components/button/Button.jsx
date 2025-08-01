import { MdOutlineMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.primary_btn}>
        <MdOutlineMessage 
        fontSize="24px"
        />
        VIA SUPPORT CHAT
      </button>
    </div>
  );
};

export default Button;
