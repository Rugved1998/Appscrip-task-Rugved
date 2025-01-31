// import { useEffect, useState } from 'react';
import styles from "../src/app/page.module.css";

export default function Footer() {


  


return(
    <footer className={styles.footer}>
       <div className={styles.topSection}>
          <div className={styles.subscribeInfo}>
           <div className={styles.subscribeText}>
            <span>Be the first to know</span>
            <span>Sign up for updates from mettā muse.</span>
           </div>
           <div className={styles.subscribeInput}>
            <input type="email"
    placeholder="Enter your email"/>
            <button >Subscribe</button>
           </div>
          </div>
          <div>
            <div>
              Contact Us
            </div>
            <div>
              +44 221 133 5360
            </div>
            <div>
            customercare@mettamuse.com
            </div>
          </div>
       </div>
       <hr/>
       <div>
       Copyright © 2023 mettamuse. All rights reserved.
       </div>
       </footer>
);
}