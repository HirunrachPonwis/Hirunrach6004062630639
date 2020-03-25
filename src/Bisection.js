import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { Table ,Card } from 'antd';
import { compile } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
var dataInTable=[];
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration",
    },
    {
        title: "XL",
        dataIndex: "l",
        key: "l",
    },
    {
        title: "XR",
        dataIndex: "r",
        key: "r",
    },
    {
        title: "XM",
        dataIndex: "m",
        key: "m",
    },
    {
        title: "Error",
        dataIndex: "err",
        key: "err",
    }
];

class Bisection extends Component {
  constructor() {
    super();
    this.state = {
      fx: '',
      xl: 0,
      xr: 0,
      showTable: false,
      showGraph: false,
      showH: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  fx(X) {
    var expr = compile(this.state.fx);
    var scope = { x: parseFloat(X) };

    return expr.evaluate(scope);
}
bisection(xl, xr) {
    var i = 0;
    var point, xmnew;
    var xm = (xl + xr) / 2
    if (this.fx(xm) * this.fx(xr) > 0) {
        xr = xm
    }
    else {
        xl = xm
    }
    point = Math.abs((xmnew - xm) / xmnew);
    dataInTable.push({
        iteration: i,
        l: xl.toFixed(6),
        r: xr.toFixed(6),
        m: xm.toFixed(6),
        err: point.toFixed(6)
    })


    do {

        xmnew = (xl + xr) / 2
        if (this.fx(xmnew) * this.fx(xr) > 0) {
            xr = xmnew
        }
        else {
            xl = xmnew
        }
        point = Math.abs((xmnew - xm) / xmnew);
        xm = xmnew
        dataInTable.push({
            iteration: i + 1,
            l: xl.toFixed(6),
            r: xr.toFixed(6),
            m: xm.toFixed(6),
            err: point.toFixed(6)
        })
        i++;
    } while (point.toFixed(6) > 0.000001)
    this.setState({
        showTable: true,
        showGraph: true,
        showH: true
    })
  }

  render() {
    return (
      <div ><center>
        <section >

            <form>
              <h1 className="title">Bisection</h1><br/>
              <p>F(x): <Input name="fx" size="large" style={{width: 300}} type="text" value={this.state.fx} onChange={this.handleChange} /></p>
              <p>x<sub>L</sub>: <Input name="xl" size="large" style={{width: 100}} type="text" onChange={this.handleChange} /></p>
              <p>x<sub>R</sub>: <Input name="xr" size="large" style={{width: 100}} type="text" onChange={this.handleChange} /></p><br/>
              <Button ghost onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))}>Submit</Button>
            </form>
            <br/><br/><br/>
                    {this.state.showH && <h1 className="title">Graph of Bisection</h1>}
                    <br/>
                    {this.state.showGraph && <Card
                        style={{ width: 1000, height: 250,  background: "#FFFACD", color: "#6A5ACD" }}
                    >
                        <LineChart width={900} height={200} data={dataInTable}>
                            <Line type="monotone " dataKey="err" stroke="#CD5C5C" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="iteration" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </Card>
                    }
                    <br/><br/>
                    {this.state.showH && <h1 className="title">Table of Bisection</h1>}
                    <br/>
                    {this.state.showTable &&
                        <center><Table
                        style={
                          { 
                            width: 1200
                          }
                        }
                        columns={
                          columns
                        } 
                        dataSource={
                          dataInTable
                        } 
                        pagination={
                          { 
                            pageSize: 100 
                          }
                        } 
                        scroll={
                          { 
                            y: 300 
                          }
                        }/> </center>
                       
                    }
    
        </section>
        </center>
      </div>
    );
  }
}
          
export default Bisection