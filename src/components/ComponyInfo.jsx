// import { useState, useEffect } from "react";
// import axios from "axios";

// export function CompanyInfo({ input }) {

//     const [companyInfo, setCompanyInfo] = useState({});
//      const [symbol, setSymbol] = useState();
//      const [error, setError] = useState('');

//     useEffect(() => {

//         async function fetchData() {

//             try {

//                 const response = await axios.get(
//                     "https://cloud.iexapis.com/stable/stock/"+symbol+"/quote?token=pk_c6a9892222de49aba3924fd8653eeade"
//                 );
//                 setCompanyInfo(response.data);

//             } catch (error) {
//                 console.log(error);
//             }

//           };

//          ///////////////////////////

//          async function getSymbol()  {
//             try {
//               const response = await axios.get(`https://cloud.iexapis.com/stable/search/${input}`, {
//                 params: {
//                   token: 'pk_c6a9892222de49aba3924fd8653eeade'
//                 }
//               });
//               const results = response.data;
//               if (results.length > 0) {
//                 setSymbol(results[0].symbol);
//                 setError('');
//               } else {
//                 setSymbol('');
//                 setError('No symbol found for the provided company name.');
//               }
//             } catch (err) {
//               console.log(err);
//               setSymbol('');
//               setError('Error fetching the symbol.');
//             }

//         }

//          //////////////////////////
        

//          getSymbol();
//          fetchData();

//     }, [input]);

//     if (!companyInfo) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <div>
//                 {companyInfo && (
//                     <div className="content">
//                         <h2>Company Information</h2>
//                          <div>{error}</div>
//                         <div>companyName: {companyInfo.companyName}</div>
//                         <div>companyName: {companyInfo.avgTotalVolume}</div>
//                         <div>companyName: {companyInfo.calculationPrice}</div>
//                         <div>companyName: {companyInfo.close}</div>
//                         <div>companyName: {companyInfo.currency}</div>
//                         <div>companyName: {companyInfo.high}</div>
//                         <div>companyName: {companyInfo.low}</div>
//                         <div>companyName: {companyInfo.open}</div>
//                         <div>companyName: {companyInfo.symbol}</div>
//                         <div>companyName: {companyInfo.volume}</div>
//                         <div>companyName: {companyInfo.week52High}</div>
//                         <div>companyName: {companyInfo.isUSMarketOpen ? (<>ture</>) : (<>false</>)}</div>


//                     </div>
//                 )}
//             </div>
//         );
//     }
// };


import { useState, useEffect } from "react";
import axios from "axios";

export function CompanyInfo({ input }) {
    const [companyInfo, setCompanyInfo] = useState({});
    const [symbol, setSymbol] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        async function getSymbol() {
            try {
                const response = await axios.get(`https://cloud.iexapis.com/stable/search/${input}`, {
                    params: {
                        token: 'pk_c6a9892222de49aba3924fd8653eeade'
                    }
                });
                const results = response.data;
                if (results.length > 0) {
                    setSymbol(results[0].symbol);
                    setError('');
                } else {
                    setSymbol('');
                    setError('No symbol found for the provided company name.');
                }
            } catch (err) {
                console.log(err);
                setSymbol('');
                setError('Error fetching the symbol.');
            }
        }

        if (input) {
            getSymbol();
        }
    }, [input]);

    useEffect(() => {
        async function fetchData() {
            if (symbol) {
                try {
                    const response = await axios.get(
                        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_c6a9892222de49aba3924fd8653eeade`
                    );
                    setCompanyInfo(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        fetchData();
    }, [symbol]);

    if (!companyInfo) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {companyInfo && (
                    <div className="content">
                        <h2>Company Information</h2>
                        <div>{error}</div>
                        <div>Company Name: {companyInfo.companyName}</div>
                        <div>Average Total Volume: {companyInfo.avgTotalVolume}</div>
                        <div>Calculation Price: {companyInfo.calculationPrice}</div>
                        <div>Close: {companyInfo.close}</div>
                        <div>Currency: {companyInfo.currency}</div>
                        <div>High: {companyInfo.high}</div>
                        <div>Low: {companyInfo.low}</div>
                        <div>Open: {companyInfo.open}</div>
                        <div>Symbol: {companyInfo.symbol}</div>
                        <div>Volume: {companyInfo.volume}</div>
                        <div>52-Week High: {companyInfo.week52High}</div>
                        <div>US Market Open: {companyInfo.isUSMarketOpen ? 'True' : 'False'}</div>
                    </div>
                )}
            </div>
        );
    }
};

