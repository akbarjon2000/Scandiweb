import styled from 'styled-components';

export const ModalContainer = styled.div`
width:100%;
    h1{
        font-family: Raleway;
        font-size: 14px !important;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;

    }
    p{
        font-size:14px !important;

    }

    .product-container{
        display:flex;
        justify-content:space-between;
        border-top:1px solid #E5E5E5;
        margin:0;
        margin-bottom:30px;
        padding:0;
        padding-top:24px;
        width:100%;
    }
    .info-row{
        display:flex;
        flex-direction:column;
        padding:0;
        margin:0;

    }
    .brand{
        font-family: Raleway;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: left;

    }
    .name{
        margin:0;
        font-family: Raleway;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;

    }
   .price{
    font-family: Raleway;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:2px;

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
        gap:8px;
    }

    .size-div{
        text-decoration:none;
        width:24px;
        height:24px;
        border: 1px solid #1D1F22;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        cursor: pointer;
    } 
    .active-size-div{
        text-decoration:none;
        width:24px;
        height:24px;
        border: 1px solid #1D1F22;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        background: #1D1F22;
        color:white;
        cursor: pointer;
    }   
    .colors-row{
        width:100%;
        height:fit-content;
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:12px;
    } 
    .active-color-div{
        border: 1px solid #5ECE7B ;
        width:24px;
        height:24px;
        padding:3px;
        /* box-sizing:border-box; */
    }
    .color-div{
        cursor:pointer;
        width:24px;
        height:24px;
        
    } 
    .image-container{
        display:flex;
        gap:8px;
    }
    .counter{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    }
    .counter-btn{
        text-decoration:none;
        width:24px;
        height:24px;
        border: 1px solid #1D1F22;
        font-size:15px;
        display:flex;
        justify-content:center;
        align-items:center;
    }


    .image{
        height: 190px;
        width:121px;
        position:relative;
    }
    .img{
        width:inherit;
        height:inherit;
        /* object-fit:cover; */
    }
    .slider{
        display:flex;
        width:fit-content;
        position:absolute;
        bottom:16px;
        right:16px;
        gap:8px;
    }
    .arr{
        width:24px;
        height:24px;
        background: rgba(0, 0, 0, 0.73);
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .order{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 279px;
        height: 43px;
        background: #5ECE7B;
        color:white;
        font-family: Raleway;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0em;

    }
    .info{
        margin:0;
    }
    .checkout{
        border-top:1px solid  #E5E5E5;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        padding-top:32px;
        gap: 16px;
        width: 100%;
        height: 159px;
    }
`