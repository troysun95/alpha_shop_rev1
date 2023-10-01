import styles from "../../../styles/StepForm.module.scss"


export function StepFormOne(){
    const counties =[
        {
            id:0, 
            countyAbbr:'',
            countyName:'請選擇縣市'
        },{
            id:1, 
            countyAbbr:'KLU',
            countyName:'基隆市'
        },{
            id:2, 
            countyAbbr:'TPH',
            countyName:'新北市'
        },{
            id:3, 
            countyAbbr:'TPE',
            countyName:'臺北市'
        },{
            id:4, 
            countyAbbr:'TYC',
            countyName:'桃園市'
        },{
            id:5, 
            countyAbbr:'HSH',
            countyName:'新竹市'
        },{
            id:6, 
            countyAbbr:'HSC',
            countyName:'新竹縣'
        },{
            id:7, 
            countyAbbr:'MAC',
            countyName:'苗栗市'
        },{
            id:8, 
            countyAbbr:'MAL',
            countyName:'苗栗縣'
        },{
            id:9, 
            countyAbbr:'TXG',
            countyName:'臺中市'
        },{
            id:10, 
            countyAbbr:'CWH',
            countyName:'彰化縣'
        },{
            id:11, 
            countyAbbr:'CWS',
            countyName:'彰化市'
        },{
            id:12, 
            countyAbbr:'NTC',
            countyName:'南投市'
        }, {
            id:13, 
            countyAbbr:'NTO',
            countyName:'南投縣'
        },{
            id:14, 
            countyAbbr:'YLH',
            countyName:'雲林縣'
        },{
            id:15, 
            countyAbbr:'CHY',
            countyName:'嘉義縣'
        },{
            id:16, 
            countyAbbr:'CYI',
            countyName:'嘉義市'
        },{
            id:17, 
            countyAbbr:'TNN',
            countyName:'臺南市'
        },{
            id:18, 
            countyAbbr:'KHH',
            countyName:'高雄市'
        },{
            id:19, 
            countyAbbr:'IUH',
            countyName:'屏東縣'
        },{
            id:20, 
            countyAbbr:'PTS',
            countyName:'屏東市'
        },{
            id:21, 
            countyAbbr:'ILN',
            countyName:'宜蘭縣'
        },{
            id:22, 
            countyAbbr:'ILC',
            countyName:'宜蘭市'
        },{
            id:23, 
            countyAbbr:'HWA',
            countyName:'花蓮縣'
        },{
            id:24, 
            countyAbbr:'HWC',
            countyName:'花蓮市'
        },{
            id:25, 
            countyAbbr:'TTC',
            countyName:'臺東市'
        },{
            id:26, 
            countyAbbr:'TTT',
            countyName:'臺東縣'
        },{
            id:27, 
            countyAbbr:'PEH',
            countyName:'澎湖縣'
        }
    ]
    
    return(
        <>
            <form  className={styles.stepForm}>
            <h3 className={styles.formTitle}>寄送地址</h3>
            <section className={styles.formBody}>
                <div className={styles.titleInputGroup}>
                    <div className={styles.inputLabel}>稱謂</div>
                    <div className={styles.selectContainer}>
                        <select  className={styles.titleSelect}>
                            <option value="mr" selected className={styles.slelectedOption}>先生</option>
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
                    <input className={styles.phoneInput} type="tel" placeholder="請輸入行動電話" />
                </div>

                <div className={styles.emailInputGroup}>
                    <div className={styles.inputLabel}>Email</div>
                    <input className={styles.emailInput} type="email" placeholder="請輸入電子郵件" />
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


export default function StepForm(){
    return(
        <>
            <StepFormOne/>
        </>
    )
}