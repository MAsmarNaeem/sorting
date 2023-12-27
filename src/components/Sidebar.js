import style from './Sidebar.module.css';
import { FaSortAmountDownAlt } from "react-icons/fa";
import { LiaSortNumericUpSolid } from "react-icons/lia";
import { SiCountingworkspro } from "react-icons/si";
import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";
import { Link } from 'react-router-dom';


const Sidebar = (props) => {


  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <h3>Sorting Techniques</h3>
      </div>

      <ul className={style.nav}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
          <li className={style.navItem} >

            <FaSortAmountDownAlt /> Heap Sort
          </li>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/quicksort'>
        <li className={style.navItem} >
          <GoSortAsc />Quick Sort
        </li>
       
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/countingsort'>
        <li className={style.navItem} >
          <SiCountingworkspro />Counting Sort
        </li>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} to='/insertionsort'>
        <li className={style.navItem} >
          <GoSortDesc /> Insertion Sort
        </li>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/lcs'>
        <li className={style.navItem} >
          Longest Subsequences
        </li>
        </Link>
      </ul>
      <div className={style.sidebarFooter}>
        <p>&copy; 2023 Sorting Techniques. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
