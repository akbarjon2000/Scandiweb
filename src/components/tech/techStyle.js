import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    .category  {
        font-size:42px;
        color: #000;
        margin:80px 0 100px 100px ;

  
    }
    .productContainer{
        display:flex;
        flex-wrap:wrap;
        gap:40px;
        justify-content:center;
        
    }

`

export const Product = styled.div`
        /* text-decoration:none; */
        position:relative;
        width:366px;
        height:444px;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:18px;
        &:hover{
            box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        }
.image{
    
    width:330px;
    height:330px;
  
}
.details{
    width:330px;
    height:fit-content;
    margin-top:24px;
}
.out-of-stock{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #8D8F9A;
    position:absolute;
    top:151px;
    left:91px;
}
`