import styles from "../../../styles/StepForm.module.scss"

export function Input( {inputLabel, placeholder}){
    return(
       <>
            <div className={styles.inputLabel}>{inputLabel}
                <input type="text" placeholder={placeholder} />
            </div>
            
        </>
    )
}

export default function StepFormThree(){

    return(
        <>
            <form className={styles.stepFormThree}>
                <h3 className={styles.formTitle}>付款資訊</h3>
                <section className={styles.formBody}>
                        <div className={styles.nameInputGroup}>
                            <Input  inputLabel={"持卡人姓名"} placeholder={"John Doe"} />
                        </div>
                        <div className={styles.numberInputGroup}>
                            <Input inputLabel={"卡號"} placeholder={"1111 2222 3333 4444"} />
                        </div>
                        <div className={styles.dDayInputGroup}>
                            <Input inputLabel={"有效期限"} placeholder={"MM/YY"} />
                        </div>
                        <div className={styles.cvcInputGroup}>
                            <Input  inputLabel={"CVC / CCV"} placeholder={"123"} />
                        </div>
                </section>
            </form>
        </>
        
    )
}