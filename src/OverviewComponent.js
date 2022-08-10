import { useState } from "react";
import styled from "styled-components";

const Container =styled.div`
display:flex;
flex-direction:column;
font-family:Montserrat;
align-items:center;
margin:10px;
width:100%; 
`;

const BalanceBox =styled.div`
font-size:18px;
width:100%;
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;

const AddTransaction =styled.div`
background:black;
color:white;
padding:5px 10px;
border-radius: 4px;
cursor:pointer;
font-weight:bold;
font-size:15px;
text-align:center;


`;


const AddTransactionContainer =styled.div`
 display: flex; 
 flex-direction: column;
 border: 1px solid #e6e8e9; 
 gap:10px;
 padding:15px 20px;
 margin:20px;
 & input{
  outline:none;
  padding:10px 12px;
  border-radius:4px;
  border:1px soild #e6e8e9;
  width:300px;
  

 }
`;
const RadioBox =styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
& input{
  width:unset;
  margin:0 10px;
}

`;
const AddTransactionView = ()=>{
  
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState('EXPENSE');
  const addTransaction = ()=>{
    console.log({amount, desc, type});
  }

  return(
    <AddTransactionContainer>

      <input placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <RadioBox>
        <input 
        type="radio" 
        id="expense" 
        name="type" 
        value="EXPENSE" 
        checked={type==='EXPENSE'}
        onChange={(e)=>setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label> 
        < input 
        type="radio" 
        id="income" 
        name="type" 
        value="INCOME" 
        checked={type==='INCOME'}
        onChange={(e)=>setType(e.target.value)}
        />
        <label htmlFor="Income">Income</label>        
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
     

    </AddTransactionContainer>
  )

};

const ExpenseBox =styled.div`
  display: flex;
  flex-direction: column;
 `;


const OverviewComponent =(props) => {

  const [isAddTxnVisible, toggleAddTxn]= useState(false);
  return (
    <Container>
        <BalanceBox>
            Balance: $1000
            <AddTransaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel":"ADD"}</AddTransaction>
        </BalanceBox>
        {isAddTxnVisible && <AddTransactionView/>}

        
      

    </Container>
  )
};

export default  OverviewComponent;
