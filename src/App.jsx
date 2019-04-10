import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.usualRender = this.usualRender.bind(this);
    this._getRef = this._getRef.bind(this);
  }

  edit() {
    this.setState({edit: true});
  }

  save() {
    this.props.edit(this.textArea.value, this.props.index);
    this.setState({edit: false});
  }

  _getRef(node) {
    this.textArea = node;
  }

  remove() {
    this.props.deleteTaskBlock(this.props.index)
  }

  usualRender() {
    return (
      <div className="task">
        <p className="text">{this.props.children}</p>
        <section className="buttons">
          <button onClick={this.edit} className="btn edit-btn">
            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58.707 58.707'>
              <polygon points='46.072,14 32.072,0 1.072,0 1.072,58 46.072,58' fill='#efebde'
              />
              <g fill='#d5d0bb'>
                  <path d='M11.072,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S10.52,23,11.072,23z'
                  />
                  <path d='M11.072,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S10.52,15,11.072,15z'
                  />
                  <path d='M36.072,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S36.624,29,36.072,29z'
                  />
                  <path d='M36.072,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S36.624,37,36.072,37z'
                  />
                  <path d='M36.072,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S36.624,45,36.072,45z'
                  />
              </g>
              <polygon points='32.072,0 32.072,14 46.072,14' fill='#d5d0bb' />
              <g>
                  <polygon points='36.201,49.214 36.194,49.222 34.205,56.511 38.852,51.865'
                  fill='#eddcc7' />
                  <path d='M55.451,35.266l-1.247-1.247c-0.775-0.775-2.032-0.775-2.807,0L47.815,37.6l2.651,2.651 L55.451,35.266z'
                  fill='#d75a4a' />
                  <rect x='41.459' y='36.521' transform='rotate(45.001 43.334 44.732)' width='3.749'
                  height='16.424' fill='#f29c21' />
                  <polygon points='41.85,54.879 41.858,54.871 38.852,51.865 34.205,56.511 34.072,57'
                  fill='#d6c4b1' />
                  <path d='M53.472,43.257l3.582-3.582c0.775-0.775,0.775-2.032,0-2.807l-1.602-1.602l-4.985,4.985 L53.472,43.257z'
                  fill='#a34740' />
                  <rect x='44.036' y='39.349' transform='rotate(-134.999 46.162 47.562)'
                  width='4.251' height='16.424' fill='#e18c25' />
                  <path d='M33.365,58.707c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.207-2.207 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.207,2.207C33.877,58.609,33.621,58.707,33.365,58.707z'
                  fill='#5e5e5e' />
              </g>
            </svg>
          </button>
          <button onClick={this.remove} className="btn remove-btn">
            <svg height='100%' viewBox='-61 -21 682 682.66669' width='100%' xmlns='http://www.w3.org/2000/svg'>
              <path d='m477.667969 0v640h-480v-508.199219l131.800781-131.800781zm0 0'
              fill='#c6c5ca' />
              <path d='m397.667969 240v-40h-320v120h240v40h-240v40h240v40h-240v40h240v160h160v-400zm0 0'
              fill='#acabb1' />
              <path d='m129.667969 0h-.28125l-131.71875 131.71875v.28125h132zm0 0' fill='#acabb1'
              />
              <path d='m257.667969 40h40v40h-40zm0 0' fill='#fff' />
              <path d='m177.667969 40h40v40h-40zm0 0' fill='#fff' />
              <path d='m517.667969 640h-120c-22.101563 0-40-17.898438-40-40v-200h200v200c0 22.101562-17.902344 40-40 40zm0 0'
              fill='#e76e54' />
              <path d='m477.667969 320v-40h-40v40h-80v40h200v-40zm0 0' fill='#e76e54'
              />
              <path d='m517.667969 600c-22.101563 0-40-17.898438-40-40v-100c0-11.039062-8.960938-20-20-20-11.042969 0-20 8.960938-20 20v100c0 22.101562-17.902344 40-40 40h-40c0 22.101562 17.898437 40 40 40h120c22.097656 0 40-17.898438 40-40zm0 0'
              fill='#dd523c' />
            </svg>
          </button>
        </section>
      </div>
    )
  }
  renderOnEdit() {
    return (
      <div className="task">
        <textarea className="task__modification-field" autoFocus={true} rows="6" ref={this._getRef} defaultValue={this.props.children}></textarea>
        <section className="buttons">
          <button onClick={this.save} className="btn save-btn">
            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47 47'>
              <polygon points='46.5,8 46.5,47 0.5,47 0.5,0 38.5,0' fill='#424a60' />
              <rect x='7.5' y='26' width='31' height='21' fill='#e7eced' />
              <rect x='7.5' y='26' width='31' height='12.037' fill='#ebba16' />
              <rect x='9.5' width='26' height='16' fill='#c7cac7' />
              <g fill='#fff'>
                <path d='M12.5,31h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S11.947,31,12.5,31z'
                  />
                <path d='M22.5,33h-10c-0.553,0-1,0.447-1,1s0.447,1,1,1h10c0.553,0,1-0.447,1-1S23.053,33,22.5,33z'
                  />
                <path d='M26.21,33.29c-0.37-0.37-1.04-0.37-1.41,0c-0.19,0.189-0.3,0.439-0.3,0.71 c0,0.27,0.109,0.52,0.29,0.71C24.979,34.89,25.229,35,25.5,35c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71 S26.39,33.479,26.21,33.29z'
                  />
              </g>
              <rect x='27.5' y='4' width='4' height='8' fill='none' stroke='#424a60'
                strokeWidth='2' strokeLinecap='round' strokeMiterlimit='10' />
              <polygon points='24.5,16 9.5,16 9.5,0 16.5,0' fill='#e7eced' />
            </svg>
          </button>
        </section>
      </div>
    )
  }

  render() {
    if (this.state.edit === false) {
      return this.usualRender();
    } else {
      return this.renderOnEdit();
    }
  }
}

export default App;
