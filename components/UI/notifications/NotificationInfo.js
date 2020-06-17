import React, { Fragment } from 'react'
import { cssTransition, toast } from 'react-toastify'
import { CloseButton } from './CloseButton'
import { Message } from './Styled'

const InfoContainer = ({ message = 'Unexpected error occurred, please try again' }) => (
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

const NotificationInfo = props => {
  const position = props.bottomRight ? toast.POSITION.BOTTOM_RIGHT : toast.POSITION.BOTTOM_CENTER
  return toast.info(<InfoContainer {...props} />, {
    position,
    closeButton: <CloseButton />,
    autoClose: props.duration || 2000,
    draggable: false,
    transition: Slide
  })
}

export { NotificationInfo }
