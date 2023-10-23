import styles from "../../../styles/Cart.module.scss"
import { ReactComponent as MinusBtn } from "../../../icons/minus-btn.svg"
import { ReactComponent as PlusBtn } from "../../../icons/plus-btn.svg"
import {products} from "./products.js"
import { useState} from "react"


function ProductItem({ data, onClickPlus, onClickMinus }) {
   
    const a = data.quantity * data.price



    return (
        <>
            <div className={styles.productControlPanel}>
                <div className={styles.productControl}>
                    <MinusBtn onClick={() => onClickMinus?.({ id: data.id, quantity:data.quantity, price: data.price })}   />
                    <span className={styles.productCount}>{data.quantity}</span>
                    <PlusBtn onClick={() => onClickPlus?.({ id: data.id, quantity:data.quantity, price: data.price })} />
                </div>
            </div>
            <div className={styles.price}>${a}</div>
        </>
    );
}




function CartInfo({text, totalPrice}){
    return(
        <>
            <section className={styles.cartInfo}>
                <div className={styles.text}>{text}</div>
                <span className={styles.price}>{totalPrice}</span>
            </section>
        </>
    )
}



function Products() {
    const[datas, setDatas] = useState(products)
    const prevTotalPrice = datas.map((data =>{ return data.quantity * data.price})).reduce((total, current) => {
        return total + current;},0)
    console.log(prevTotalPrice)
    const[totalPrice, setTotalPrice] = useState(prevTotalPrice)
    
    const handleClickMinus = ({ id, quantity, price }) => {
        setDatas((datas) => {
          return datas.map((data) => {
            if (data.id === id && quantity > 0) {
              return {
                ...data,
                quantity : quantity - 1
              };
            }
            return data;
          });
        });
        setTotalPrice(totalPrice - price)
      };


    const handleClickPlus = ({ id, quantity, price }) => {
        setDatas((datas) => {
          return datas.map((data) => {
            if (data.id === id) {
              return {
                ...data,
                quantity : quantity + 1
              };
            }
            return data;
          });
        });
        setTotalPrice(totalPrice + price)
      };
    



    const productItems = datas.map(data =>
        <div className={styles.productContainer} key={data.id}>
            <img className={styles.imageContainer} src={data.img} alt={data.name} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{data.name}</div>
                <ProductItem data={data} onClickPlus={handleClickPlus} onClickMinus={handleClickMinus}/>
            </div>
        </div>
    );

    return (
        <section className={styles.productList}>
            {productItems}
            <CartInfo text="運費" totalPrice="免費"/>
            <CartInfo text="小計" totalPrice={totalPrice}/>
        </section>
    );
}

export default function Cart() {
    return(
    <>
        <section className={styles.cartContainer}>
          <h3>購物籃</h3>
          <Products />
          
        </section>
    </>
    )
}
