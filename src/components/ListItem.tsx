import * as React from 'react'

interface IProps {
  dataItem: any
}

export default class ListItem extends React.Component<IProps>{

  render() {
    return (
      <div>
        {this.props.dataItem.title}
      </div>
    );
  }
} 