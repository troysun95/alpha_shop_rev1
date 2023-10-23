import { useState } from "react";
import styles from "../../styles/Main.module.scss"
import RegisterProgress from "./RegisterProgress/RegisterProgress.jsx"
import StepFormOne from "./StepForm/StepFormOne.jsx"
import StepFormTwo from "./StepForm/StepFormTwo.jsx"
import StepFormThree from "./StepForm/StepFormThree.jsx"
import Cart from "./Cart/Cart.jsx"
import ProgressControl from "./ProgressControl/ProgressControl.jsx"




export default function  Main(){
    const [currentStep, setCurrentStep] = useState(1);
    console.log(currentStep)
    const progressNow = currentStep;
    const progressNum = currentStep;
    const formNum = currentStep;


    //ProgressControl
    function prevClick(){
        if(currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }
        
    
    function nextClick(){
        if(currentStep < 3){
            setCurrentStep(currentStep + 1)
        }
        
    }
   
    return(
        <>
            <main className={styles.mainSite}>
                <section className={styles.contentContainer}>
                    <h2 >結帳</h2>
                    <RegisterProgress progressNum={progressNum} progressNow={progressNow}/>
                    <div className={styles.contentWrapper}>
                        <div className={styles.leftContent}>
                            {formNum ===  1 && <StepFormOne/>}
                            {formNum ===  2 && <StepFormTwo/>}
                            {formNum ===  3 && <StepFormThree/>}
                            <hr className={styles.divider}></hr>
                            <ProgressControl  progressNow ={progressNow} prevClick={prevClick} nextClick={nextClick} />
                        </div>
                    <div className={styles.cartPanel}>
                        <Cart /> 
                    </div>  
                    </div>
                </section>
            </main>
        </>
    )
}