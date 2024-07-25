import { HiArrowLeft } from 'react-icons/hi';
import css from "./BackLink.module.css"

export const BackLink = () => {
    return (
      <button className={css.btn}>{<HiArrowLeft size="24" />}Go back</button>
    )
  };