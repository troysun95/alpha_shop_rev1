import styles from "../../styles/Main.module.scss"
import RegisterProgress from "./RegisterProgress/RegisterProgress.jsx"
import StepForm from "./StepForm/StepForm.jsx"
import Cart from "./Cart/Cart.jsx"
import ProgressControl from "./ProgressControl/ProgressControl.jsx"



export default function  Main(){
    return(
        <>
            <main className={styles.mainSite}>
                <section className={styles.contentContainer}>
                    <h2 >結帳</h2>
                    <RegisterProgress />
                    <div className={styles.contentWrapper}>
                        <div className={styles.ContentLeft}>
                            <StepForm />
                            <hr className={styles.divider}></hr>
                            <ProgressControl />
                        </div>
                    <div className={styles.contentRight}>
                        <Cart /> 
                    </div>  
                    </div>
                </section>
            </main>
        </>
    )
}