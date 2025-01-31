import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol>
    //       <li>
    //         Get started by editing <code>src/app/page.js</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
   

    <main className={styles.main}>
       <header className={styles.header}>
        <div  className={styles.logobar}>
          <div>
          <Image
            className={styles.logo}
            src="/Images/Logo.png"
            alt="Shopify logo"
            width={180}
            height={38}
            priority
            />
          </div>
          <div>
            <h2>LOGO</h2>
          </div>
          <div>
            <Image
            className={styles.icons}
            src="/Images/Icons.png"
            alt="site icons"
            width={180}
            height={38}
            priority
        />
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>SHOP</div>
          <div className={styles.menuItem}>SKILLS</div>
          <div className={styles.menuItem}>STORIES</div>
          <div className={styles.menuItem}>ABOUT</div>
          <div className={styles.menuItem}>CONTACT US</div>
        </div>
       </header>
       <hr/>
       <div className={styles.heroSection}>
        <div className={styles.heroTitle}><h1>Discover our products</h1></div>
        <div className={styles.heroPara}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </div>
       </div>
       <hr/>
       <div className={styles.optionBar}>
        <div className={styles.filterBar}>
          <div>3425 items</div>
          <div className={styles.filter}>Show filter {">"}</div>
        </div>
        <div>
          Recommended {"▼"}
        </div>
       </div>
       <hr/>
       <div className={styles.mainSection}>
        Main page
        <div>Filter section</div>
        <div>Product List</div>
       </div>
       <hr/>
       <Footer/>
    </main>
  );
}
