import React, {useState} from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={styles.paginator}>

        {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PRE</button>}
        {pages
            .filter(el=> el>= leftPortionPageNumber && el<=rightPortionPageNumber)

            .map((el, index) => {
            return <span key={index} className={props.currentPage === el ? styles.selectedPage : ""}
                         onClick={() => {
                             props.onPageChanged(el)
                         }}>{` ${el} `}</span>
        })}
        {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
    </div>
}