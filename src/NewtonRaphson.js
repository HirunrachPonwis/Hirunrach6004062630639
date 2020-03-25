import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { Table, Card } from 'antd';
import { compile, derivative } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
var dataInTable=[];
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration",
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x",
    },
    {
        title: "Error",
        dataIndex: "err",
        key: "err",
    }
];

class NewtonRaphson extends Component {
  constructor() {
    super();
    this.state = {
      fx: '',
      f1: '',
      x: 0,
      x0: 0,
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

  f1(X) {
    var expr1 = derivative(this.state.fx, 'x');
    var scope1 = { x: parseFloat(X) };
    return expr1.evaluate(scope1);
  }

  newton_raphson(x0) {
    var i = 0;
    var point, x;
    do {
        x = x0 - (this.fx(x0)/this.f1(x0));
        point = Math.abs((x - x0) / x);
        x0 = x
        dataInTable.push({
            iteration: i,
            x0: x0.toFixed(6),
            x: x.toFixed(6),
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
      <div>
        <center> 
        <section>
          <div>
            <form>
              <h1 className="title">Newton Raphson</h1><br/>
              <p>F(x): <Input name="fx" size="large" style={{width: 300}} type="text" value={this.state.fx} onChange={this.handleChange} /></p>
              <p>x<sub>0</sub>: <Input name="x0" size="large" style={{width: 100}} type="text" onChange={this.handleChange} /></p>
              <Button ghost onClick={() => this.newton_raphson(parseFloat(this.state.x0))}>Submit</Button>
            </form>
            <br/><br/><br/>
                    {this.state.showH && <h1 className="title">Graph of Newton Raphson</h1>}
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
                    {this.state.showH && <h1 className="title">Table of Newton Raphson</h1>}
                    <br/>
                    {this.state.showTable &&
                        <Table
                        style={{ width: 1200}}columns={columns} dataSource={dataInTable} pagination={{ pageSize: 100 }} scroll={{ y: 300 }} />
                    }
          </div>
        </section>
        </center> 
      </div>
    );
  }
}
          
export default NewtonRaphson
