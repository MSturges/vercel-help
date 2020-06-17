import React, { Fragment } from 'react'
import { cssTransition, toast } from 'react-toastify'
import { CloseButton } from './CloseButton'
import { Message } from './Styled'

const SuccessContainer = ({ message }) => (
  <Fragment>
    <Message>{message}</Message>
  </Fragment>
)

const Slide = cssTransition({
  enter: 'slideInUp',
  exit: 'slideOutDown',
  duration: 400,
  appendPosition: false
})

const NotificationSuccess = props => {
  const position = props.bottomRight ? toast.POSITION.BOTTOM_RIGHT : toast.POSITION.BOTTOM_CENTER
  return toast.success(<SuccessContainer {...props} />, {
    position,
    closeButton: <CloseButton />,
    autoClose: props.duration || 2500,
    draggable: false,
    transition: Slide
  })
}

export { NotificationSuccess }
