import React from "react";
import styles from "./DonateUse.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import first from "../img/first.jpg"
import second from "../img/second.jpg"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { AiOutlineArrowUp } from 'react-icons/ai' 
import axios from 'axios'

function DonateUse(props) {
    
    const navigate = useNavigate()
    // 페이지 이동

    const location = useLocation()

    console.log(location)
    const isnavigate = location.state.isnavigate
    const locker = location.state.Locker

    function barcodeInput(e) {
        let event=window.event || e;
        if(isnavigate === true) {
            axios.get(`http://i8b201.p.ssafy.io:8081/backend/admin/${event.target.value}`, {
            })
            .then((response) => {
                console.log(response.data)
                const data = {isnavigate: isnavigate, Locker :locker, User: event.target.value}
                const onClickHandlerBarcodeRead =() => {
                    navigate('/BarcodeRead', {state: data})
                }
                onClickHandlerBarcodeRead()
            })
            .catch((error) =>{
                console.log(error)
            })
            } else {
                axios.get(`http://i8b201.p.ssafy.io:8081/backend/admin/${event.target.value}`, {
            })
            .then((response) => {
                // 수령 페이지로 이동
                const data = {isnavigate: isnavigate, Locker :locker, User: e.target.value}
                const onClickHandlerReceiptConfirm =() => {
                    navigate('/ReceiptConfirm', {state: data})
                }
                onClickHandlerReceiptConfirm()
            })
            }
        }
    const onClickHandlerHome = () => {
        navigate('/')
    }
    const goBack = () => {
        navigate(-1)
    }
    //수령일때랑 기부일때랑 바꿔서 처리 if로 해서
    return (
        // <div>
            <div>
                <div className={styles.myImg}>
                    <button className={styles.circle} onClick={goBack}>
                        <AiOutlineArrowLeft className={styles.iconStyle}/>
                    </button>
                        {/* <div className={styles.buttonOne} onClick={onClickHandlerBarcodeRead}> */}
                    <div className={styles.buttonOne}>
                        <h3 className={styles.h3Align}>STEP1</h3>
                        <img src={first} className={styles.firstImg} />
                        <div className={styles.circleMain}></div>
                        <AiOutlineArrowUp className={styles.iconStyleTwo}/>
                        <div className={styles.buttonThree}>
                            메인페이지에서 
                            <br />
                            QR코드를 클릭해주세요
                        </div>
                        <BsFillArrowRightCircleFill className={styles.arrowRight} size={80}/>
                        <h3 className={styles.h3AlignOne}>STEP2</h3>
                        <img src={second} className={styles.secondImg} />
                        <div className={styles.buttonFour}>바코드 리더기에 <br />QR코드를 찍어주세요
                        </div>
                    </div>
                    <input className={styles.barcode} type="text" onChange={barcodeInput} autoFocus/>
                    <button className={styles.homeCircle} onClick={onClickHandlerHome} >
                        <BiHomeAlt className={styles.iconStyle}/>
                    </button>
                </div>
            </div>
            /* <label htmlFor="title" onSubmit={}></label>
            <input type="text" required id="title" />
        </div> */
        )
}

export default DonateUse