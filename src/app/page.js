import Image from "next/image";
import styles from "./page.module.css";
// import style from ""

export default function Home() {
  return (
    <>
    <div className={styles.TopBorder}>
      Top Border
    </div>
    <div className={styles.Header}>
      
      <div className={styles.LogoBar}>
      <div>
        <Image
        src="/Logo.png"
        alt="Logo"
        width={36}
        height={36}
        />
        </div>
        
        <div>
          LOGO
        </div>
        <div>
          Icons
        </div>
      </div>
      
      <div className={styles.HeaderContent}>
        <div>
          SHOP
        </div>
        <div>
          SKILLS
        </div>
        <div>
          STORIES
        </div>
        <div>
          ABOUT
        </div>
        <div>
          CONTACT US
        </div>
      </div>
    </div>
    <hr/>
    <div>
      Hero Section
    </div>
    <div>
      Content
        <div>
           Grid Titlebar
        </div>
      <div>
        Grid
          <div>
            Filters
          </div>
          <div>
            Products
          </div>
      </div>
    </div>
    </>
   
  );
}
