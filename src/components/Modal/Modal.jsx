import { Component } from 'react';
import css from 'styles.module.css';

export class Modal extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handlePressESC)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePressESC)
	}

	handlePressESC = (e) => {
		console.log('press')
		if (e.code === 'Escape') this.props.onClick()
    }
    
    handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

	render() {
		return (
	<div className={css.Overlay} onClick={this.handleOverlayClick}>
      <div className={css.Modal}>
        <img src={this.props.selectedImage} alt="" />
      </div>
    </div>
    )
	}
}
