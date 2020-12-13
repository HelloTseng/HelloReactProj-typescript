import * as React from 'react'
import ListItem from '../components/ListItem';

interface IState {
  dataList: any
}

export default class Hello extends React.Component<{}, IState>{

  state = {
    dataList: []
  }
  
  componentDidMount = () => {
    fetch("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          dataList: data.result
        })
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.dataList.map((el, index) => {
            return <li key={index}>
              <ListItem dataItem={el}/>
            </li>
          })
        }
      </ul>
    );
  }
} 