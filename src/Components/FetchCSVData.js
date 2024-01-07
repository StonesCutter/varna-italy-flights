import React, { useEffect, useState } from "react";
import axios from "axios";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiV-gPfVgu4cadLomBkjdVDh-BGrMNh5EIk5FkUzehKRuGLsYoOAow4nuINtHawy5Wq7M3YA8jrt99/pub?gid=0&single=true&output=csv";
const URL_EN_FORM =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDhxhn9hcjLbH_DmruSTwRyLQxOcmqNydffG_w_28r82RkSzQpGQJHbUMrBI3R9lkIBtVaT2Ixuzbu/pub?gid=1174890788&single=true&output=csv";

const FetchCSVData = () => {
  const [state, setState] = useState({
    signaturesData: null,
    signaturesEnData: null,
  });

  useEffect(() => {
    fetchColumnData();
    fetchColumnDataEn();
  }, []);

  const fetchColumnData = () => {
    axios
      .get(CSV_URL)
      .then(async (response) => {
        const parsedColumnData = await parseCSV(response.data);
        setState((prevState) => ({
          ...prevState,
          signaturesData: parsedColumnData,
        }));
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  const fetchColumnDataEn = () => {
    axios
      .get(URL_EN_FORM)
      .then(async (response) => {
        const parsedColumnDataEn = await parseCSV(response.data);
        setState((prevState) => ({
          ...prevState,
          signaturesEnData: parsedColumnDataEn,
        }));
      })
      .catch((error) => {
        console.error("Error fetching CSV data EN:", error);
      });
  };

  async function parseCSV(csvText) {
    //const rows = await csvText.split(/\r?\n/);
    const signatures = parseInt(csvText);
    console.log(signatures);
    //const data = [];
    // const length = await rows.length;
    // setLength(length);
    // console.log("length: ", rows.length);
    // console.log("rows: ", rows);

    // for (let i = 1; i < rows.length; i++) {
    //   const rowData = rows[i].split(",");
    //   const value = rowData[0]; // Extracting data from the first column only
    //   data.push(value);
    // }
    //console.log(rows[7].split(",")[0]);
    //console.log(rows[1].split(",")[6]);

    //return data;

    return signatures;
  }

  //   return (
  //     <div>
  //       {columnData.map((value, index) => (
  //         <p key={index}>Data: {value}</p>
  //       ))}
  //     </div>
  //   );

  return <h1>{state.signaturesData + state.signaturesEnData}</h1>;
};

export default FetchCSVData;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CSV_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPKdw0jkTntoydCFXq6p1tKzBqAdv8QG8e5Lc5LY-toTGptz-_9vlo5udaXA1O3OqdhOux3tqPskyC/pub?output=csv";

// const FetchCSVData = () => {
//   const [csvData, setCsvData] = useState([]);

//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   const fetchCSVData = () => {
//     axios
//       .get(CSV_URL)
//       .then((response) => {
//         const parsedCsvData = parseCSV(response.data);
//         setCsvData(parsedCsvData);
//       })
//       .catch((error) => {
//         console.error("Error fetching CSV data:", error);
//       });
//   };

//   const parseCSV = (csvText) => {
//     const rows = csvText.split(/\r?\n/);
//     const headers = rows[0].split(",");
//     const data = [];

//     for (let i = 1; i < rows.length; i++) {
//       const rowData = rows[i].split(",");
//       const rowObject = {};

//       for (let j = 0; j < headers.length; j++) {
//         rowObject[headers[j]] = rowData[j];
//       }

//       data.push(rowObject);
//     }

//     return data;
//   };

//   return (
//     <div>
//       {csvData.map((row, index) => (
//         <div key={index}>
//           <p>Data: {row.Data}</p>
//           <p>Nome e cognome: {row["Nome e cognome"]}</p>
//           {/* Add more lines to display other fields as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchCSVData;
