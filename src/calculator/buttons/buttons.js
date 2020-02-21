import React from "react";
import './buttons.css';

export default function Buttons(props) {

  const {buttons} = props;

  return (
    <div>
      {
        buttons.map(b =>
          <button key={b.displayValue}
                  className={b.type === 'number' ? 'number-button' : 'action-button'}
                  onClick={() => b.action(b)}>
            {b.displayValue}
          </button>)
      }
    </div>
  )
}
