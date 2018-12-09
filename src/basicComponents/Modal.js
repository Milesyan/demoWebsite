import React, { PureComponent} from 'react';
import styles from './Modal.module.scss';
import CSSTransitionGroup  from 'react-addons-css-transition-group';
type Props = {
  onClick: Function,
  children: any
}
export default class Modal extends PureComponent<Props> {
  render() {
    return (
      <CSSTransitionGroup
        transitionName={{
          appear: styles.appear,
          appearActive: styles.appearActive,
        }}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <div 
            onClick={this.props.onClick}
            className={styles.container}>
            <div 
              className={styles.main}
              onClick={(e)=>{e.stopPropagation();}}
            >
              {this.props.children}
            </div>
        </div>
      </CSSTransitionGroup>
    )
  }
}
