/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

export const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}>
    close
  </i>
)
