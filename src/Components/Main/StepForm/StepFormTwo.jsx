import { useState } from "react";
import styles from "../../../styles/StepForm.module.scss"

export  default function StepFormTwo(){
    const [isChecked, setIsChecked] = useState("")   

    const handleChange = (e) => {
        setIsChecked(e.target.value);
    };

    console.log(isChecked)

    return( 
        <>
            <form  className={styles.stepFormTwo}>
            <h3 className={styles.formTitle}>運送方式</h3>
                <section className={styles.formBody}>
                    <div className={isChecked === "standard" ? styles.checked : styles.unChecked}>
                        <input  type="radio" value="standard" id="1" onChange={handleChange} checked={isChecked === "standard"} />
                        <label for="1" >
                            <span className={styles.radioBox}></span>
                        </label>
                        <div className={styles.radioInfo}>
                            <div className={styles.shippingInfo}>
                                <div className={styles.text}>標準運送</div>
                                <div className={styles.price}>免費</div>
                            </div>
                                <div className={styles.period}>約 3~7 個工作天</div>
                                {/* <div className={styles.radioBox}></div> */}
                        </div>
                    </div>
                    <div className={isChecked === "DHL" ? styles.checked : styles.unChecked}>
                        <input type="radio" value="DHL" id="2" onChange={handleChange} checked={isChecked === "DHL"} />
                        <label for="2" >
                            <span className={styles.radioBox}></span>
                        </label>
                        <div className={styles.radioInfo}>
                            <div className={styles.shippingInfo}>
                                <div className={styles.text}>DHL運送</div>
                                <div className={styles.price}>$500</div>
                            </div>
                            <div className={styles.period}>48小時內送達</div>
                            {/* <div className={styles.radioBox}></div> */}
                        </div>
                    </div>
                
                </section>
            </form>
        </>
    )
}