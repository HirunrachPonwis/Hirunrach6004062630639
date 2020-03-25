import React,{Component} from 'react';

class App extends Component{
  render(){
    var MyStyle ={
     color: '#8B4513',
     fontSize: 50
   };
   
   var MyStyle1={
     color: '#DAA520'
   }; 
   

   return(
     <div  style={{ background: "#FFFACD"}}>
      
       <h1 style={MyStyle}><center>NUMERICAL METHOD</center></h1>
       <h3 style={MyStyle1}><center>ROOTS of EQUATION</center></h3>
         <h4><center>
           <li><a href={"/Bisection"}>Bisection Method</a></li>
           <li><a href={"/FalsePosition"}>False-Position Method</a></li>
           <li><a href={"/OnePoint"}>One-Point Method</a></li>
           <li><a href={"/NewtonRaphson"}>Newton-Raphson Method</a></li>
           <li><a href={"/Secant"}>Secant Method</a></li>
         </center></h4>
         <br/>
       <h3 style={MyStyle1}><center>INTERPOLATION and EXTRAPOLATION</center></h3>
        <h4><center>
           <li><a href={"/NewtonDD"}>Newton's divided-differenees</a></li>
           <li><a href={"/Lagrange"}>Lagrange polynomaials</a></li>
           <li><a href={"/Spline"}>Spline interpolation</a></li>
       </center></h4>
       <br/>
        <h3 style={MyStyle1}><center>LEAST-SQUARES REGRESSION</center></h3>
        <h4><center>
           <li><a href={"/Linear"}>Linear</a></li>
           <li><a href={"/MultipleLinear"}>MultipleLinear</a></li>
           <li><a href={"/Polynomial"}>Polynomial</a></li>
       </center></h4>
       <br/> 
       <h3 style={MyStyle1}><center>SOLUTIONS OF LINEAR ALGEBRAIC EQUATIONS</center></h3>
         <h4><center>
           <li><a href={"/"}>Cramer’s Rule</a></li>
           <li><a href={"/"}>Gauss Elimination Method</a></li>
           <li><a href={"/"}>Gauss-Jordan Method</a></li>
           <li><a href={"/"}>LU Decomposition Method</a></li>
           <li><a href={"/"}>Cholesky Decomposition Method</a></li>
           <li><a href={"/"}> Jacobi Iteration Method</a></li>
           <li><a href={"/"}>Gauss-Seidel Iteration Method</a></li>
           <li><a href={"/"}>Conjugate Gradient Method</a></li>
         </center></h4>
       
     </div>
   );
 }
}

export default App;
