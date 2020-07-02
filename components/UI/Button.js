/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import Spinner from './Spinner'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  hover() {
    if (this.props.hoverLabel !== '') {
      return
    }
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    const { label, hoverLabel, transitionLabel } = this.props
    const { hover } = this.state


    let displayLabel = label
    if (hover && hoverLabel !== '') {
      displayLabel = hoverLabel
    }
    const props = { ...this.props }
    delete props.type

    return (
      <ButtonItem {...this.props} onMouseOver={() => this.hover()} onMouseOut={() => this.hover()}>
        {this.props.icon && this.props.iconPosition === 'left' && !this.props.awesome && (
          <svg className="icon">
            <use xlinkHref={`#icon-${this.props.icon}`} />
          </svg>
        )}

        {this.props.icon && this.props.iconPosition === 'left' && this.props.awesome && (
          <FontAwesomeIcon icon={solidIcons[this.props.icon] || brandIcons[this.props.icon]} />
        )}

        {displayLabel && (
          <Label visible={this.state.hover} transition={this.props.transition}>
            {displayLabel}
          </Label>
        )}

        {this.props.transition && (
          <TransitionLabel visible={this.state.hover} {...props}>
            {transitionLabel}
          </TransitionLabel>
        )}
        {this.props.loading && (
          <LoadingLabel {...props}>
            <Spinner active {...props} />
          </LoadingLabel>
        )}

        {this.props.icon && this.props.iconPosition === 'right' && !this.props.awesome && (
          <svg className="icon">
            <use xlinkHref={`#icon-${this.props.icon}`} />
          </svg>
        )}

        {this.props.icon && this.props.iconPosition === 'right' && this.props.awesome && (
          <FontAwesomeIcon icon={solidIcons[this.props.icon] || brandIcons[this.props.icon]} />
        )}
      </ButtonItem>
    )
  }
}

const ButtonItem = styled.button`
  display: ${props => props.display};
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  user-select: none;
  -webkit-appearance: none !important;
  border: none;
  border-radius: 6px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  padding: .5em 1.25em;
  
  font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: .875em;
  line-height: 1.3;
  letter-spacing: .015em;
  transition: all .15s linear;
  background: ${props =>
    props.customBackground ? props.customBackground : props.theme.button.background};
  color: ${props => props.theme.button.color};
  width: ${props => props.width};

  &:focus {
    outline: none;
  }

  ${props =>
    !props.label &&
    css`
      padding: 0.5em;
    `}

  /* Style: Icon */
  ${props =>
    props.icon &&
    css`
      display: inline-flex;
      align-items: center;
    `}

  ${props =>
    props.tooltip &&
    css`
      overflow: visible;
      vertical-align: top;
    `}

  .icon {
    font-size: 1.2865em;

    ${props =>
      props.iconPosition === 'left' &&
      css`
        margin-right: 0.25em;
      `}

    ${props =>
      props.iconPosition === 'right' &&
      css`
        margin-left: 0.25em;
      `}

    ${props =>
      !props.label &&
      css`
        margin: 0;
      `}
  }

  /* Colors */
  ${props =>
    props.primary &&
    css`
      background: ${props.theme.button.primary.background};
      color: ${props.theme.button.primary.color};
    `}

  ${props =>
    props.secondary &&
    css`
      background: ${props.theme.colors.lighterGray};
      color: ${props.theme.defaultColor.white};
    `}

  ${props =>
    props.accent &&
    css`
      background: ${props.theme.button.accent.background};
      color: ${props.theme.button.accent.color};
    `}

  ${props =>
    props.danger &&
    css`
      background: ${props.theme.button.danger.background};
      color: ${props.theme.button.danger.color};
    `}

  ${props =>
    props.compliance &&
    css`
      background: ${() => rgba('#FA8700', 0.2)};
      color: #fa8700;
    `}

  ${props =>
    props.fancy &&
    css`
      background: ${props.theme.colors.darkPurple};
      background-image: linear-gradient(
        -85deg,
        ${props.theme.colors.darkPurple} 0%,
        ${props.theme.colors.purple} 100%
      );
      color: ${props.theme.defaultColor.white};
    `}

  ${props =>
    props.yellow &&
    css`
      background: ${props.theme.defaultColor.yellow};
      color: ${props.theme.defaultColor.white};
    `}

  ${props =>
    props.dark &&
    css`
      background: ${props.theme.colors.darkPurple};
      color: ${props.theme.colors.lightPurple};
    `}

  ${props =>
    props.glow &&
    css`
      box-shadow: 0 0 1rem 0 ${rgba(props.theme.defaultColor.darkPurple, 0.15)};
    `}

  /* Disabled */
  ${props =>
    props.disabled &&
    css`
      background: ${rgba(props.theme.button.background, 0.15)} !important;
      color: ${props.theme.button.color} !important;
      cursor: not-allowed;
    `}

  ${props =>
    props.iconDisabled &&
    css`
      color: ${rgba(props.theme.defaultColor.purple, 0.5)} !important;
      cursor: not-allowed;
    `}
  
  /* Text Button */
  ${props =>
    props.text &&
    css`
      padding: 0.5em 0.5em;
      background: none;
      color: ${props.theme.colors.gray};

      /* Shape */
      ${props.primary &&
        css`
          color: ${props.theme.defaultColor.purple};
        `}

      .icon {
        ${props.iconPosition === 'left' &&
          css`
            margin-right: 0.1em;
          `} ${props.iconPosition === 'right' &&
          css`
            margin-left: 0.1em;
          `};
      }
    `}

  /* Shape */
  ${props =>
    props.pill &&
    css`
      padding: 0.5em 1.25em;
      border-radius: 2em;
    `}

  ${props =>
    props.outlined &&
    css`
      background: none;
      border: ${props.disabled ? 'none' : '1px solid'};
      color: ${props.theme.button.background};

      &:hover {
        background: ${props.theme.button.background};
        border-color: ${props.disabled ? 'transparent' : props.theme.button.background};
        color: ${props.theme.button.color};
      }
    `}

  ${props =>
    props.outlined &&
    props.secondary &&
    css`
      color: ${props.theme.colors.lightGray};
      &:hover,
      a:hover & {
        background: ${props.theme.colors.lighterGray};
        border-color: ${props.theme.colors.lightGray};
        color: ${props.theme.colors.white};
      }
    `}

  ${props =>
    props.outlined &&
    props.danger &&
    css`
      color: ${props.theme.button.danger.background};

      &:hover {
        background: ${props.theme.button.danger.background};
        border-color: ${props.theme.button.danger.background};
        color: ${props.theme.button.danger.color};
      }
    `}

  /* Alignment */
  ${props =>
    props.align === 'center' &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}

  ${props =>
    props.align === 'right' &&
    css`
      margin-left: auto;
    `}
  
  /* Spacing */
  ${props =>
    props.spacedL &&
    css`
      margin-left: 1rem;
    `}

  ${props =>
    props.spacedR &&
    css`
      margin-right: 1rem;
    `}
  
  ${props =>
    props.inline &&
    css`
      display: inline-block;
      margin: ${props.margin ? props.margin : '5px'};
    `}
  
  /* Size */
  ${props =>
    props.small &&
    css`
      padding: .27em 1.2em;

      ${!props.label &&
        css`
          padding: 0.725em;
        `}

      .icon {
        ${props.iconPosition === 'left' &&
          css`
            margin-right: 0.35em;
          `}

        ${props.iconPosition === 'right' &&
          css`
            margin-left: 0.35em;
          `}

        ${!props.label &&
          css`
            margin: 0;
          `}
      }
    `}

  ${props =>
    props.large &&
    css`
      padding: .725em 1.25em;

      ${!props.label &&
        css`
          padding: 0.725em;
        `}

      .icon {
        ${props.iconPosition === 'left' &&
          css`
            margin-right: 0.35em;
          `}

        ${props.iconPosition === 'right' &&
          css`
            margin-left: 0.35em;
          `}

        ${!props.label &&
          css`
            margin: 0;
          `}
      }
    `}

  ${props =>
    props.jumbo &&
    css`
      padding: 1em 1.5em;
      font-size: 1em;

      .icon {
        ${props.iconPosition === 'left' &&
          css`
            margin-right: 0.5em;
          `}

        ${props.iconPosition === 'right' &&
          css`
            margin-left: 0.5em;
          `}

        ${!props.label &&
          css`
            margin: 0;
          `}
      }
    `}
  

  ${props =>
    props.block &&
    css`
      width: 100%;
    `}
  
  /* Loading */
  ${props =>
    props.loading &&
    css`
      min-height: calc(1.25rem + 1em);
      pointer-events: none;
      color: transparent;
    `}

  ${props =>
    props.active &&
    css`
      background: ${props.theme.button.secondary.background};
      border-color: ${props.theme.button.secondary.background};
      color: ${props.theme.button.color};
    `}


    ${({ styledAsLink }) =>
      styledAsLink
        ? css`
            background: none !important;
            border: none;
            padding: 0 !important;
            font-family: arial, sans-serif;
            color: ${({ theme }) => theme.defaultColor.purple};
            cursor: pointer;
          `
        : ''}
`
const LoadingLabel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    transition: all .5s linear, transform .1s ease;

  ${props =>
    props.loading &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.fancy &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.primary &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.secondary &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.secondaryLight &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.danger &&
    css`
      color: ${props.theme.button.loading_color};
    `}
  ${props =>
    props.loading &&
    props.compliance &&
    css`
      color: ${props.theme.button.loading_color};
    `}
`
const TransitionLabel = styled.div`
  position: static;
  width: 100%;
  display: block;
  transition: all 0.15s ease;
  background: inherit;
  color: inherit;
  transform: translateY(-4em);
  height: 0;
  ${props =>
    props.visible &&
    css`
      transform: translateY(-1.375em);
    `};
`
const Label = styled.div``

Button.defaultProps = {
  display: 'block',
  loading: false,
  hoverLabel: '',
  width: 'auto',
  loadingLabel: 'Loading..',
  type: 'button'
}

Button.propTypes = {
  label: PropTypes.string,
  display: PropTypes.string,
  type: PropTypes.string,
  hoverLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  pill: PropTypes.bool,
  lg: PropTypes.bool
}

Button.displayName = 'Button'
export { Button }
