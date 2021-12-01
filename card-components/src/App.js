// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";
  
// export default function App() {
//   return (
//     <div style={{}}>
//       <h4>APARNA PINNAM</h4>
//       <Card
//         style={{
//           width: 400,
//           backgroundColor: "lightpink",
          
         
//         }}
        
//       >
//         <CardContent>
//           <Typography
//             style={{ fontSize: 14 }}
//             color="textSecondary"
//             gutterBottom
//           >
//             I AM APARNA PINNAM
//           </Typography>
//           <Typography variant="h5" component="h2">
//             AM A NATIVE OF KURNOOL
//           </Typography>
//           <Typography
//             style={{
//               marginBottom: 12,
//             }}
//             color="textSecondary"
//           >
//             A FULLSTACK WEBDEVELOPER
//           </Typography>
//           <Typography variant="body2" component="p">
//             TRAINEE AT CGCS-ANYONE CAN CODE
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">KEEP LEARNING MORE</Button>
//         </CardActions>
//       </Card>
//     </div>
    
    
//   );
// }

import './App.css';
import Card from './cards'
import isArrayEmptyNew from './utils.js'

function App() {
    const firstName = "Aparna"
    const lastName = "Pinnam"
    const age = 24
    const job = "Engineer"
    const placeholder = "Enter your details"
    const fullName = (firstName, lastName) => {
        return `$(firstName) $(lastName)`
    }
    const inputBox = <input placeholder = {placeholder} autoComplete> </input>
    const array = [1,2,3,4,5]
    const obj = [
        {
            id : 1,
            name : "Aparna",
            age : 24
            
            
        },
        {
            id : 2,
            name : "Ambica",
            age : 25
        },
        {
            id : 3,
            name : "Friends",
            age : 26
        }
    ]
    const card = isArrayEmptyNew(obj) ? [] : obj.map((item, pos) => {
        return(
            <Card className = {'card'} id={item.id} name={item.name} age={item.age} job={job}/>

        )
    })
    return (
        <div className="App">
            {card}
        </div>
    );
}
export default App;
