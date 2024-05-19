// import { useState, useEffect } from "react";
// import axios from "axios";

// export function CompanyInfo({ input }) {
//     const [companyInfo, setCompanyInfo] = useState({});
//     const [symbol, setSymbol] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         async function getSymbol() {
//             try {
//                 const response = await axios.get(`https://cloud.iexapis.com/stable/search/${input}`, {
//                     params: {
//                         token: 'pk_c6a9892222de49aba3924fd8653eeade'
//                     }
//                 });
//                 const results = response.data;
//                 if (results.length > 0) {
//                     setSymbol(results[0].symbol);
//                     setError('');
//                 } else {
//                     setSymbol('');
//                     setError('No symbol found for the provided company name.');
//                 }
//             } catch (err) {
//                 console.log(err);
//                 setSymbol('');
//                 setError('Error fetching the symbol.');
//             }
//         }

//         if (input) {
//             getSymbol();
//         }
//     }, [input]);

//     useEffect(() => {
//         async function fetchData() {
//             if (symbol) {
//                 try {
//                     const response = await axios.get(
//                         `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_c6a9892222de49aba3924fd8653eeade`
//                     );
//                     setCompanyInfo(response.data);
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         }

//         fetchData();
//     }, [symbol]);

//     if (!companyInfo) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <div>
//                 {companyInfo && (
//                     <div className="content">
//                         <h2>Company Information</h2>
//                         <div>{error}</div>
//                         <div>Company Name: {companyInfo.companyName}</div>
//                         <div>Average Total Volume: {companyInfo.avgTotalVolume}</div>
//                         <div>Calculation Price: {companyInfo.calculationPrice}</div>
//                         <div>Close: {companyInfo.close}</div>
//                         <div>Currency: {companyInfo.currency}</div>
//                         <div>High: {companyInfo.high}</div>
//                         <div>Low: {companyInfo.low}</div>
//                         <div>Open: {companyInfo.open}</div>
//                         <div>Symbol: {companyInfo.symbol}</div>
//                         <div>Volume: {companyInfo.volume}</div>
//                         <div>52-Week High: {companyInfo.week52High}</div>
//                         <div>US Market Open: {companyInfo.isUSMarketOpen ? 'True' : 'False'}</div>
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
        return <div className="text-center">Loading...</div>;
    } else {
        return (
            <div className="container mx-auto p-4">
                <div className="text-red-500">{error}</div>
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">General Info</h3>
                        <div>Company Name: {companyInfo.companyName}</div>
                        <div>Symbol: {companyInfo.symbol}</div>
                        <div>Currency: {companyInfo.currency}</div>
                        <div>US Market Open: {companyInfo.isUSMarketOpen ? 'True' : 'False'}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Stock Info</h3>
                        <div>Average Total Volume: {companyInfo.avgTotalVolume}</div>
                        <div>Calculation Price: {companyInfo.calculationPrice}</div>
                        <div>Close: {companyInfo.close}</div>
                        <div>High: {companyInfo.high}</div>
                        <div>Low: {companyInfo.low}</div>
                        <div>Open: {companyInfo.open}</div>
                        <div>Volume: {companyInfo.volume}</div>
                        <div>52-Week High: {companyInfo.week52High}</div>
                    </div>
                </div>
            </div>
        );
    }
};

