import styled from "styled-components";

const Wrapper = styled.section`
    width:25vw;
    padding:10px 0 0 10px;
    background-color:black;
    color:white;
    .home,.library{
        background-color:#121212;
        border-radius:7px;
        padding:10px;
        margin:5px;
    }
    .home ul li{
        display:flex;
        gap:11px;
        list-style:none;
        padding-top:13px;
        font-weight:bold;
        font-size:16px;
        align-items:center;
    }
    .heading{
        display:flex;
        gap:11px;
        align-items:center;
    }
    .heading,h2{
        font-size:16px;
    }
    .library{
        position:relative;
        min-height:70vh;
    }
    .footer{
        position:absolute;
        bottom: calc(0px + 10px);
        display:flex;
        font-size:10px;
        gap:13px;
        flex-wrap:wrap;
    }
    .footer a{
        color:grey;
    }
`;

export default Wrapper;