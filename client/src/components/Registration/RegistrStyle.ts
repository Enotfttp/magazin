import styled from "styled-components";

const RegistrStyle = styled.div`
position: absolute;
top: 20%;
left: 50%;
transform: translateX(-50%);
h2{
	text-align: center;
	font-size:30px;
}
label{
	font-size:14px;
	text-align: left;
}
input{
	display: block;
	width: 400px;
	height: 30px;
	padding: 5px 10px;
	font-size: 16px;
	margin: 5px 0 10px 0px;
	border-radius: 10px;
	border:2px solid grey;
}
&>div{
	display: flex;
    justify-content: center;
    align-items: center;
	button{
		margin: 20px 30px 0px 95px;
		font-size: 16px;
		width:200px;
		height: 40px;
		border-radius:10px ;
	}

}
`
export default RegistrStyle