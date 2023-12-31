import styles from "../../../styles/RegisterProgress.module.scss"

export function ProgressItem({ progressNum, stepNum, label }){
  let iconByStep;
  if(progressNum < stepNum) {
      iconByStep = styles.inActiveIcon;
  } else if(progressNum === stepNum){
      iconByStep = styles.activeIcon;
  } else {
      iconByStep =  styles.doneIcon;
  }

  return(
      <>
          <div>
              <div className={iconByStep}>{progressNum > stepNum ? "✔" : stepNum}</div>
              <span>{label}</span>
          </div>
      </>
  );
}

export function ProgressBar({progressNext, progressNow}){
  return(
    <span className={ progressNext -1  > progressNow ? styles.inactiveBar: styles.activeBar} ></span>
  )
}

export default function RegisterProgress({progressNum}){
  return(
    <>
      <section className={styles.ProgressContiner}>
          <ProgressItem progressNum={progressNum} stepNum={"1"} label={"寄送地址"} />
          <ProgressBar  progressNow={progressNum}  progressNext={"2"}/>
          <ProgressItem progressNum={progressNum}  stepNum={"2"} label={"運送方式"} />
          <ProgressBar  progressNow={progressNum}  progressNext={"3"}/>
          <ProgressItem progressNum={progressNum} stepNum={"3"} label={"付款資訊"} />
      </section>
    </>
  )
}