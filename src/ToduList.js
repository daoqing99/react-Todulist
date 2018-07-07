import React, {
	Component,
	Fragment
} from 'react';
import './Todulist.css';
class ToduList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			valueList: []
		}
	}

	//	输入框与及时响应输入数据
	inputValueChange(e) {
		console.log(e.target.value);
		this.setState({
			inputValue: e.target.value
		})
	}

	// 提交数据到任务列表
	handleBtnClick() {
		this.setState({
			valueList: [...this.state.valueList, this.state.inputValue],
			inputValue: ''
		})
	}

	// 删除已完成任务
	handleItemDelete(index) {
		console.log(index);

		let tempList = this.state.valueList;
		tempList.splice(index, 1)
		
		this.setState({
			valueList: tempList,

		})

	}

	render() {
		return(
			<Fragment>
				
				   <input  className='inputxt' 
				   value={this.state.inputValue}
				   onChange={this.inputValueChange.bind(this)}/>
				   
				   <button className='btn btn-info' onClick={this.handleBtnClick.bind(this)}>提交</button>
			
				<ul>
					{
						this.state.valueList.map((item,index) => {
							return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
						})
					}

				</ul>
		    </Fragment>
		)
	}
}

export default ToduList