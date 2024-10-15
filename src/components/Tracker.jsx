import React, { useState } from 'react'

const Tracker = () => {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("Income")
    const [Transactions, setTransactions] = useState([])

    const handleTransac = () => {
        setTransactions([...Transactions, { amount, type }]);
        setAmount('');
        setType('Income');
    };
    console.log("Transactions=>", Transactions)

    const TotalIncome = Transactions.reduce((acc, transaction) => transaction.type == "Income" ? acc + Number(transaction.amount) : acc, 0);

    const TotalExpense = Transactions.reduce((acc, transaction) => transaction.type == "Expense" ? acc + Number(transaction.amount) : acc, 0);

    const Remaining = TotalIncome - TotalExpense;
    console.log(TotalIncome);
    console.log(TotalExpense);
    console.log(Remaining);
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6 mt-20 ">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-7">
                <div className="border-cyan-800 border-2 rounded-md p-2 w-full sm:w-auto">
                    <h2>Total Income</h2>
                    <p>{TotalIncome}</p>
                </div>
                <div className="border-cyan-800 border-2 rounded-md p-2 w-full sm:w-auto">
                    <h2>Total Expense</h2>
                    <p>{TotalExpense}</p>
                </div>
                <div className="border-cyan-800 border-2 rounded-md p-2 w-full sm:w-auto">
                    <h2>Remaining Balance</h2>
                    <p>{Remaining}</p>
                </div>
            </div>
           
            <input  className="border-cyan-800 border-2 m-2 rounded-sm" type="number"
                value={amount}
                onChange={(e) => { setAmount(e.target.value) }}
                placeholder="Enter your amount"></input>
            <p>{amount}</p>
            <div className="flex">
            <select className="border-cyan-800 border-2 m-2 rounded-sm" value={type} onChange={(e) => { setType(e.target.value) }}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button className=" h-10 px-4 m-2 text-slate-50 rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..." onClick={handleTransac}>Submit Request</button>
            </div>
            <div>
                {Transactions.map((data, index) => {
                    return (
                        <div key={index} className='flex '>
                            <h1 className="font-serif-bold text-xl w-60">$ {data.amount}</h1>
                            <p className={`w-60 ${data.type==="Income" ? "text-green-600":"text-red-600"}`}>{data.type}</p>
                        </div>
                    )
                })
                }
            </div>
            </div>
        </>
    )
}

export default Tracker