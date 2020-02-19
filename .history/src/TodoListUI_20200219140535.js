import React, { Component } from 'react';
class TodoListUI extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( <div>
            <div style={{margin:'10px'}}>
                <Input 
                    placeholder={this.state.inputValue} 
                    style={{width:'250px',marginRight:'10px'}}
                    onChange={this.changeInputValue}
                    value={this.state.inputValue}
                />
                <Button type='primary' onClick={this.clickBtn}>增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        </div> );
    }
}
 
export default TodoListUI;