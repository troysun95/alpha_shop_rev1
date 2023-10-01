import styles from "../../../styles/ProgressControl.module.scss"
import { ReactComponent as RightArrow } from "../../../icons/right-arrow.svg"

export function ControlButton(){
    return(
        <div className={styles.buttonContainer}>
            <button className={styles.buttonNext}  >
            下一步
            {<RightArrow/>}
            </button>
        </div>
    )
}


export default function ProgressControl() {
    return(
        <>
            <section className="progress-control-container">
                <ControlButton />
            </section>
        </>
    )
}
    