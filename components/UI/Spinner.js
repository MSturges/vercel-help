import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const Spinner = styled.div`
  height: ${props => props.height};
  width: ${props => props.height};
  border: 2px solid transparent;
  border-radius: 2rem;
  animation: spin 600ms infinite linear;
  border-right-color: transparent;

  ${props =>
    props.active &&
    css`
      border: 2px solid ${props.ringColor};
      border-right-color: ${props.color};
    `}

  ${props =>
    props.primary &&
    css`
      border-right-color: ${props.theme.defaultColor.highlight};
    `}

  ${props =>
    props.secondary &&
    css`
      border-right-color: ${props.theme.defaultColor.darkPurple};
    `}

  ${props =>
    props.compliance &&
    css`
      border-color: ${rgba('#FA8700', 0.15)};
      border-right-color: #fa8700;
    `}

  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  ${props =>
    props.lg &&
    css`
      height: 1.5rem;
      width: 1.5rem;
    `}
  ${props =>
    props.sm &&
    css`
      height: 1rem;
      width: 1rem;
    `}
`
Spinner.propTypes = {
  ringColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}
Spinner.defaultProps = {
  ringColor: 'rgba(255,255,255,.4)',
  color: '#ffffff',
  active: false,
  height: '1.25rem',
  width: '1.25rem'
}
export default Spinner
