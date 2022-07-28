import styled from "styled-components";

export const ProdCon = styled.div`
    /* width: 100%; */
    height:100vh;
    padding:120px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:120px;
    .smallImages{
        display:flex;
        flex-direction:column;
        gap: 32px;
    }
    .smallImage{
        width: 87px;
        height:87px;

    }
    .bigImage{
        height:560px;
        width:660px;
    }
    .description{
        display:flex;
        flex-direction:column;

    }
    .size-text{
        font-family: Roboto Condensed;
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        /* text-align: center; */

    }
    .sizes-row{
        width:100%;
        height:fit-content;
        display:flex;
        flex-direction:row;
        gap:12px;
    }
    .active-size-div{
        background: #1D1F22;
        color:white;
        text-decoration:none;
        width:63px;
        height:45px;
        border: 1px solid #1D1F22;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }
    .size-div{
        text-decoration:none;
        width:63px;
        height:45px;
        border: 1px solid #1D1F22;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }  
    .colors-row{
        width:100%;
        height:fit-content;
        display:flex;
        flex-direction:row;
        gap:12px;
    } 
    .color-div{
        width:32px;
        height:32px;
        
    } 
    .price-amount{
        font-family: Raleway;
        font-size: 24px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

    }
    .add-to-cart{
        text-decoration:none;
        height: 52px;
        width: 292px;
        left: 929px;
        top: 560px;
        border-radius: 0px;
        padding: 16px, 32px, 16px, 32px;
        background: #5ECE7B;
        color:white;
       display:flex;
       flex-direction:row;
       align-items:center;
       justify-content:center;

    }
    .add-text{
        //styleName: --button-font;
        font-family: Raleway;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;

    }
    .description-text{
        width:292px;
        margin-top:40px;
    }
`