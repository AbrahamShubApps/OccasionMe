import React from 'react';
let map = {
  success: 'success',
  message: 'info',
  caution: 'warning',
  error: 'danger',
};

class Notification extends React.Component {
  render() {
    let props = this.props;
    let type = map[props.type] || 'info';
    let className = ['alert', `alert-${type}`].join(' ');
    if (props.message) {
      return (
        <div className={className}>
          {props.message} {this.props.children}{' '}
        </div>
      );
    }
    return null;
  }
}

class Confirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      renderConfirmation: true,
    };
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
  }

  accept() {
    this.props.accept();
    this.setState({ renderConfirmation: false });
  }

  decline() {
    this.props.decline();
    this.setState({ renderConfirmation: false });
  }

  render() {
    if (this.state.renderConfirmation && this.props.message) {
      return (
        <Notification type={this.props.type} message={this.props.message}>
          <div>
            <button type="button" className="btn btn-primary" onClick={this.accept}>
              SURE
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-danger" onClick={this.decline}>
              NO THANKS
            </button>
          </div>
        </Notification>
      );
    }
    return null;
  }
}
// class Confirmation extends Notification {
//   constructor() {
//     super();
//     this.state = {
//       renderConfirmation: true,
//     };
//     this.accept = this.accept.bind(this);
//     this.decline = this.decline.bind(this);
//   }
//
//   accept() {
//     this.props.accept();
//     this.setState({ renderConfirmation: false });
//   }
//
//   decline() {
//     this.props.decline();
//     this.setState({ renderConfirmation: false });
//   }
//
//   render() {
//     if (this.state.renderConfirmation && this.props.message) {
//       return (
//         <div >
//           {super.render()}
//           <div>
//             <button type="button" onClick={this.accept}>
//               SURE
//             </button>
//           </div>
//           <div>
//             <button type="button" onClick={this.decline}>
//               NO THANKS
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return null;
//   }
// }
//
