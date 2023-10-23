import styles from "../../../styles/ProgressControl.module.scss"
import { ReactComponent as RightArrow } from "../../../icons/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../../icons/left-arrow.svg"

export function PrevButton({prevClick, text }){
    return(
        <>
            <button className={2 && styles.buttonPrev} onClick={prevClick}>
            {text}
                {<LeftArrow />}
            </button>
        </>
    )
}


export function NextButton({nextClick, text }){
    return(
        <>
            <button className={styles.buttonNext} onClick={nextClick}>
            {text}
                {<RightArrow />}
            </button>
        </>
    )
}

export function SubmitButton({ text }){
    return(
        <>
            <button className={styles.buttonNext}>
            {text}
            </button>
        </>
    )
}


export default function ProgressControl({progressNow ,prevClick, nextClick}) {
    


    return(
        <>
            <section className={styles.progressControlContainer}>
                <div className={styles.buttonContainer}>                   
                    {progressNow === 1 && <NextButton text={"下一步"} nextClick={nextClick} />}
                    {progressNow === 2 && <PrevButton text={"上一步"} prevClick={prevClick} />}
                    {progressNow === 2 && <NextButton text={"下一步"} nextClick={nextClick} />}
                    {progressNow === 3 && <PrevButton text={"上一步"} prevClick={prevClick} />}
                    {progressNow === 3 && <SubmitButton text={"確認下單"} />}
                </div>
            </section>
        </>
    )
}
    