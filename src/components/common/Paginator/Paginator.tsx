import React from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map((el, index) => {
            return <span key={index} className={props.currentPage === el ? styles.selectedPage : ""}
                         onClick={() => {
                             props.onPageChanged(el)
                         }}>{el}</span>
        })}
    </div>
}