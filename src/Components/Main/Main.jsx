import { useState } from "react";
import styles from "../../styles/Main.module.scss"
import RegisterProgress from "./RegisterProgress/RegisterProgress.jsx"
import StepFormOne from "./StepForm/StepFormOne.jsx"
import StepFormTwo from "./StepForm/StepFormTwo.jsx"
import StepFormThree from "./StepForm/StepFormThree.jsx"
import Cart from "./Cart/Cart.jsx"
import ProgressControl from "./ProgressControl/ProgressControl.jsx"
import { UserInputContext } from "../../Contexts/UserInputContext";
import { CartContext } from '../../Contexts/CartContext';
import {products} from "../Main/Cart/products.js"




export default function  Main(){
    const [currentStep, setCurrentStep] = useState(1);
    const progressNow = currentStep;
    const progressNum = currentStep;
    const formNum = currentStep;
    const [userData, setUserData] = useState({
        name: '',
        num: '',
        exp: '',
        cvc: ''
      });
      
    const [datas, setDatas] = useState(products);
    const prevTotalPrice = datas.map((data) => data.quantity * data.price).reduce((total, current) => total + current, 0);
    const [totalPrice, setTotalPrice] = useState(prevTotalPrice);
  
  // handler
  const handleClickMinus = ({ id, quantity, price }) => {
    setDatas((datas) => {
      return datas.map((data) => {
        if (data.id === id && quantity > 0) {
          console.log(data)
          return {
            ...data,
            quantity: quantity - 1,
          };
        }
        return data;
      });
    });
    setTotalPrice(totalPrice - price);
  };

  const handleClickPlus = ({ id, quantity, price }) => {
    setDatas((datas) => {
      return datas.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            quantity: quantity + 1,
          };
        }
        return data;
      });
    });
    setTotalPrice(totalPrice + price);
  }


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

  const handleSubmitClick= (event) => {
    event.preventDefault();
    console.log({'總金額':totalPrice, '消費者資訊':userData});
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
                            <UserInputContext.Provider value={{ userData, setUserData }}>
                            {formNum ===  3 && <StepFormThree />}
                            </UserInputContext.Provider>
                            <hr className={styles.divider}></hr>
                            <ProgressControl  progressNow ={progressNow} prevClick={prevClick} nextClick={nextClick}  handleSubmitClick={handleSubmitClick}/>
                        </div>
                    <div className={styles.cartPanel}>
                    <CartContext.Provider value={{ datas, setDatas, totalPrice, handleClickMinus, handleClickPlus }}>
                        <Cart /> 
                    </CartContext.Provider>    
                    </div>  
                    </div>
                </section>
            </main>
        </>
    )
}