// import React, {useEffect, useState} from 'react'
// import ChartEdit from '../../components/ChartEdit'
// import './chart.css'
// import lodash from 'lodash'
//
//
// const Chart = () => {
//     const baseUrl = 'http://localhost:3001/'
//     const [chart, setChart] = useState([])
//     const [oldChart, setOldChart] = useState([])
//     const [loading, setLoading] = useState(false)
//
//     useEffect(() => {
//         const response = async () => {
//             setLoading(true)
//             await fetch(`${baseUrl}orgChart`)
//                 .then(response => response.json())
//                 .then(response => {
//                     setChart(response)
//                     setOldChart([...response])
//                 })
//             setLoading(false)
//         }
//         response()
//     }, [])
//
//     const handleUpload = () => {
//         const newChartInfo = lodash.differenceWith(chart, oldChart, function(o1, o2){
//             return o1['id'] === o2['id']
//         })
//         let uploadData
//         if(newChartInfo.length){
//             uploadData = {
//                 ...newChartInfo[0]
//             }
//         } else {
//             uploadData = {}
//         }
//
//         console.log(uploadData)
//
//         fetch(`${baseUrl}orgChart`, {
//             method: 'POST',
//             body: JSON.stringify(uploadData),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'same-origin'
//         })
//             .then(response => {
//                 if(response.ok){
//                     return response
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`)
//                     error.response = response
//                     throw error
//                 }
//             }, error => {
//                 throw new Error(error.message)
//             })
//             .then(response => response.json())
//             .then(() => {
//                 alert(`Chart Info Updated`)
//             })
//             .catch(error => {
//                 console.log('Post Feedback Error>', error.message)
//                 alert(`Your Chart could not be Uploaded\nError: ${error.message}`)
//             })
//     }
//
//     return (
//         <div className='test' style={{height: '100%'}}>
//             {
//                 !loading ?
//                     (
//                         <div className='test'>
//                             <ChartEdit
//                                 // clinks={[{'from': '5', 'to': '1', 'template': 'blue', 'label': 'CLink Test'}]}
//                                 nodes={chart}
//                                 // Template colors for SLinks / CLinks: undefined = Orange, blue, yellow
//                                 // slinks={[{'from': '17', 'to': '8', 'template': 'myred', 'label': 'SLink Test'}]}
//                             />
//                             <button onClick={handleUpload}>Save Chart</button>
//                         </div>
//                     ) : (<div>Loading</div>)
//             }
//         </div>
//     )
// }
//
// export default Chart
