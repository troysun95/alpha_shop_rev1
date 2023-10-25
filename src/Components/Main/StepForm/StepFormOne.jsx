import styles from "../../../styles/StepForm.module.scss"
import { counties } from "./counties.js"

export default function StepFormOne(){
       
    return(
        <>
            <form  className={styles.stepFormOne}>
            <h3 className={styles.formTitle}>寄送地址</h3>
                <section className={styles.formBody}>
                    <div className={styles.titleInputGroup}>
                        <div className={styles.inputLabel}>稱謂</div>
                        <div className={styles.selectContainer} defaultValue={'DEFAULT'}>
                            <select  className={styles.titleSelect} >
                                <option value="DEFAULT"  className={styles.slelectedOption}>先生</option>
                                <option value="ms">女士</option>
                                <option value="mx">不明</option>                            
                            </select>
                        </div> 
                    </div>
                    <div className={styles.nameInputGroup}>
                        <div className={styles.inputLabel}>姓名</div>
                        <input className={styles.nameInput} type="text" placeholder="請輸入姓名" />
                    </div>

                    <div className={styles.phoneInputGroup}>
                        <div className={styles.inputLabel}>電話</div>
                        <input className={styles.phoneInput} type="text" placeholder="請輸入行動電話" />
                    </div>

                    <div className={styles.emailInputGroup}>
                        <div className={styles.inputLabel}>Email</div>
                        <input className={styles.emailInput} type="text" placeholder="請輸入電子郵件" />
                    </div>

                    <div className={styles.countyInputGroup}>
                        <div className={styles.inputLabel}>縣市</div>
                        <div className={styles.selectContainer}>
                            <select  className={styles.countySelect} required>
                                {counties.map(county => 
                                    <option value={county.countyAbbr} key={county.id} >{county.countyName}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className={styles.adressInputGroup}>
                        <div className={styles.inputLabel}>地址</div>
                        <input className={styles.adressInput} type="text" placeholder="請輸入地址" />
                    </div>
                    
                </section>
            </form>
        </>
    )
}