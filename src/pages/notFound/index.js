import React from 'react';
import styles from './notfoundStyle.module.scss'
function NotFoundPage() {
    return (
        <div className={styles["page-container"]}>
            <h1>404 - Not found</h1>
            <h3>Please check the url</h3>
        </div>
    );
}

export default NotFoundPage;