import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:80px;
border: 1px solid;
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
align-items: center;
border:1px solid;
position: absolute;
width: 325px;
height: 677px;
right:72px;
top:50px;
background-color:white;
z-index:1;
/* display:none; */
padding:10px;
}

`
