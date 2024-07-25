import { Link } from "react-router-dom";
import { HiArrowLeft } from 'react-icons/hi';
import css from "./BackLink.module.css"

export const BackLink = ({ to, children }) => {
    return (
      <Link to={to} className={css.link}>
        <HiArrowLeft size="24" />
        {children}
      </Link>
    );
  };