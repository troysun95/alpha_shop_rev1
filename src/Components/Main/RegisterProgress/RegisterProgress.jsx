import styles from "../../../styles/RegisterProgress.module.scss"


export function ProgressActive({progress}){
  return(
    <>
      <span className={styles.progressGroupActive}>
        <div className={styles.progressIconActive}>
          <span className={styles.textActive}>{progress.text}</span>
        </div>
        <span className={styles.progressLabelActive}>{progress.label}</span>
      </span>
    </>
  )
}
export function ProgressInactive({progress}){
  return(
    <>
      <span className={styles.progressGroup}>
        <div className={styles.progressIcon}>
            <span className={styles.text}>{progress.text}</span>
        </div>
        <span  className={styles.progressLabel}>{progress.label}</span>
      </span>
    </>
  )
}



export default function RegisterProgress() {
    return (
        <section className={styles.progressGroupContainer}>
          <ProgressActive progress={{text:1, label:'寄送地址'}} />
          <span className={styles.progressBarActive} ></span>
          <ProgressInactive progress={{text:2, label:'運送方式'}} />
          <span className={styles.progressBar} ></span>
          <ProgressInactive progress={{text:3, label:'付款資訊'}} />
        </section>
    )
}