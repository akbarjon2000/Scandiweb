import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:80px;
/* border: 1px solid; */
display:flex;
flex-direction:row;
align-items:center;
gap:32px;
position:relative;


.categoryContainer{
   position:absolute;
   left:117px; 
   width:fit-content; 
   display:flex;
   flex-direction:row;
   align-items:center;
   gap:32px;
}

.logo{
    position:absolute;
    right:50%;
    left:50%;
}
.shopDiv{
    position:absolute;
    right:101px;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:22px;
}
.currency{
    cursor: pointer;
    font-size:20px;
    &:hover{

    }
}
.arrDown{
    margin-left:10px;
    /* width:6px;
    height:3px; */
}
.shoppingCart{
    font-size:20px;
    cursor: pointer;
    position:relative;
}
.cart-items-count{
    width:20px;
    height:20px;
    position:absolute;
    top:-10px;
    right:-10px;
    background-color:black;
    color:white;
    font-size:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
}
.activeLink{
    color: #5ECE7B;
    text-decoration:none;
    text-decoration:underline;
    box-sizing:border-box;
    position:relative;
}
.activeLink::after{
        content:"";
        width:100px;
        height:1px;
        color: red;


    }
.notActiveLink{
    text-decoration:none;
    color:black;
}
.activeCart{
    text-decoration:none;

}
.notActiveCart{
    text-decoration:none;
    
}
.modal{
    display: ${({ show }) => show ? "flex" : "none"};
flex-direction: column;
/* align-items: center; */
border:1px solid #e5e5e5;
position: absolute;
width: 325px;
height: 677px;
right:72px;
top:50px;
background-color:white;
z-index:1;
/* display:none; */
padding:10px;
overflow-x:hidden !important;
overflow-y:scroll !important;
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
.bag-text{
    margin-bottom:20px;
}
.modal-total{
    display:flex;
    justify-content:space-between;
}
.buttons{
    display:flex;
    justify-content:space-between;
    margin-top:40px;
    
}
.viewbag{
    text-decoration:none;
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #1D1F22;

}
.checkout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 43px;
    background: #5ECE7B;
    color:white;

}
.currency-modal{
    width:114px;
    height:160px;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    position:absolute;
    right:100px;
    top:50px;
    display:${({ currencyModal }) => currencyModal ? "flex" : "none"};
    flex-direction:column;
    box-sizing:border-box;
}
.USD{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding-left:10px;
    width:100%;
    height:32px;
    &:hover{
    background: #EEEEEE;
}
}
.GBP{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding-left:10px;
    width:100%;
    height:32px;
    &:hover{
    background: #EEEEEE;
}
}
.JPY{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding-left:10px;
    width:100%;
    height:32px;
    &:hover{
    background: #EEEEEE;
}
}
.RUB{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding-left:10px;
    width:100%;
    height:32px;
    &:hover{
    background: #EEEEEE;
}
}
.AUD{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding-left:10px;
    width:100%;
    height:32px;
    &:hover{
    background: #EEEEEE;
}
}


`
