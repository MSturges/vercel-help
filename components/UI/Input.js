/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/sort-comp */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// TODO: this should not be a stateful component due to performance issues
// Should be refactored to be less convuluted - trying to do too much here
class Input extends React.Component {
  constructor(props) {
    super(props)

    const initialState = {
      checked: props.checked,
      filled: !!props.value,
      selectedValue: props.value,
      value: props.value,
      controlValue: props.value,
      type: 'password',
      remaining: null
    }
    if (props.limit) {
      initialState.remaining = props.limit ? props.limit - props.value.length : null
    }
    this.state = initialState

    this.showHide = this.showHide.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  // eslint-disable-next-line react/sort-comp
  onChange(e) {
    const { limit } = this.props
    const { value } = this.state
    const val = e.target.value.substr(0, 150)
    const remaining = limit ? limit - val.length : null
    const state = {
      filled: typeof e.target.value !== 'undefined',
      value: val,
      remaining
    }
    if (limit && remaining < 0) {
      state.value = value
    }

    state.remaining = remaining < 0 ? 0 : remaining

    this.setState(state)
  }

  // eslint-disable-next-line react/sort-comp
  showHide(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  componentWillMount() {
    this.setState({ filled: this.props.value !== '' })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { limit } = nextProps
      const state = {
        selectedValue: nextProps.value,
        value: nextProps.value,
        filled: nextProps.value != '',
        controlValue: nextProps.value
      }

      if (limit) {
        state.remaining = limit ? limit - nextProps.value.length : null
      }

      this.setState(state)
    }
  }

  render() {
    const {
      type,
      mask,
      name,
      placeholder,
      description,
      autocomplete,
      label,
      togglePrivacy,
      centered,
      limit,
      disabled,
      optional,
      tip,
      error,
      showError,
      templateStyle,
      search,
      noFloatingLabel,
      hideOnClick,
      interactive
    } = this.props
    const { value, remaining } = this.state
    const Description = description ? <FormNote>{description}</FormNote> : ''
    const Limit = limit ? (
      <FormLimit remaining={remaining}>
        <LimitCount>{`${remaining} `}</LimitCount>
        characters
      </FormLimit>
    ) : (
      ''
    )

    return (
      <Fragment>
        <FormItem
          {...this.props}
          className={this.state.filled ? 'filled' : ''}
          disabled={disabled}
          hasDescription={description}
          id="inputWrapper"
        >
          {noFloatingLabel ? null : <FormLabel {...this.props}>{placeholder}</FormLabel>}
          <FormControl
            {...this.props}
            noFloatingLabel={!!noFloatingLabel}
            type={togglePrivacy ? this.state.type : type}
            hasPrivacy={togglePrivacy}
            centered={centered}
            value={value}
            name={name}
            autoComplete={autocomplete}
            placeholder={placeholder}
            limit={limit}
            onChange={e => this.onChange(e)}
            onBlur={() =>
              this.setState({
                filled: this.state.value !== ''
              })}
            onFocus={() =>
              this.setState({
                filled: true
              })}
            optional={optional}
            tip={tip}
            templateStyle={templateStyle}
          />

          {Limit}
          {Description}
          {showError ? <ErrorMessage>{error ? <span>{error}</span> : null}</ErrorMessage> : null}
        </FormItem>
      </Fragment>
    )
  }
}

const FormItem = styled.div`
  position: relative;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};

  margin-bottom: 1.25rem;
  max-width: ${props => (props.small ? '270px' : '100%')};

  ${props =>
    props.type === 'toggle' &&
    css`
      padding: 0.5em 5em 0.5em 0;
    `} ${props =>
    props.hasDescription &&
    css`
      margin-bottom: 2.25rem;
    `};

  ${props =>
    props.hasDescription &&
    props.disabled &&
    css`
      margin-bottom: 1.25rem;
    `};

  ${({ templateStyle }) =>
    templateStyle &&
    css`
      margin-bottom: 0.625rem;
    `}

  ${({ minimal }) =>
    minimal &&
    css`
      margin: 0;
    `}

  .toggle-privacy {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    padding: 0.4em 0.5em;
    min-width: 4.5em;
    text-align: center;
    transform: translateY(-50%);
    font-weight: 400;
    font-size: 0.7em;
    line-height: 1.5;
    cursor: pointer;
    user-select: none;
    color: ${props => rgba(props.theme.colors.gray, 0.5)};
    transition: all 0.15s linear;
  }

  .optional {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    padding: 0.5em 0.75em;
    border-radius: 2em;
    font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.75em;
    line-height: 0.9;
    border: 1px solid ${props => rgba(props.theme.defaultColor.gray, 0.4)};
    color: ${props => rgba(props.theme.defaultColor.gray, 0.4)};
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: all 0.15s linear;
  }

  .tip {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    padding: 0.125em;
    text-align: center;
    font-size: 0.75em;
    font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.25;
    background: ${props => rgba(props.theme.defaultColor.gray, 0.4)};
    color: ${props => props.theme.defaultColor.white};
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: all 0.15s linear;
  }

  &.filled {
    .optional,
    .tip {
      opacity: 0;
      visibility: hidden;
    }
  }
`

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.85em;
  padding: 0 1.25em;
  width: 100%;
  z-index: ${props => (props.lowZIndex ? 0 : 1)};
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  opacity: 0;
  font-weight: 700;
  font-size: 0.75em;
  color: ${props => rgba(props.theme.colors.gray, 0.65)};
  transform: translateY(0.25em);
  transition: all 0.15s ease-out;
  font-family: 'Anonymous Pro', Courier, monospace;


  ${({ minimal }) =>
    minimal &&
    css`
      display: none;
    `}
  

  ${({ templateStyle }) =>
    templateStyle &&
    css`
      font-size: 0.5625em;
    `}

  ${props =>
    !props.disabled &&
    css`
      .filled & {
        opacity: 1;
        transform: none;

        ${
          props.error &&
          props.showError &&
          css`
            color: ${props.theme.defaultColor.errorColor} !important;
          `};

    `};
  }
`

const FormControl = styled.input`
  display: block;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  background: ${props => props.theme.defaultColor.white};
  color: ${props => props.theme.defaultColor.darkPurple};
  border: 1px solid ${props => rgba(props.theme.defaultColor.midPurple, 0.5)};
  border-radius: 6px;
  padding: 1em 0.75em;
  height: ${props => (props.small ? '45px' : props.xsmall ? '40px' : '3.25em')};
  max-width: ${props => (props.small ? '270px' : '100%')};
  font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  transition: all 0.15s ease-out;

  ${props =>
    props.blend &&
    css`
      background: ${rgba(props.theme.defaultColor.white, 0.5)};
    `};

  ${props =>
    props.glow &&
    css`
      border-color: transparent;
      box-shadow: 0 0 16px 0 rgba(54, 43, 72, 0.15);
    `};

  ${props =>
    props.centered &&
    css`
      text-align: center;
    `};

  &:focus {
    border-color: ${props => props.theme.defaultColor.highlight};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.defaultColor.darkPurple};
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.defaultColor.white} inset;
  }

  ${props =>
    !props.disabled &&
    css`
      .filled & {
        border-color: ${props.theme.defaultColor.highlight};
        padding: ${(props.noFloatingLabel ? '0.5em 0.75em 0.5em' : '1.5em 0.75em 0.5em')};

        &:focus {
          &::-webkit-input-placeholder {
            color: transparent;
          }
          &::-moz-placeholder {
            color: transparent;
          }
          &:-ms-input-placeholder {
            color: transparent;
          }
          &:-moz-placeholder {
            color: transparent;
          }
        }
      }
    `};

  ${props =>
    props.hasPrivacy &&
    css`
      padding-right: 4.25em !important;
    `};

  ${props =>
    props.error &&
    props.showError &&
    css`
      border-color: ${props.theme.defaultColor.errorColor} !important;
    `};

  ${props =>
    props.disabled &&
    css`
      background: ${rgba(props.theme.defaultColor.darkPurple, 0.1)};
      border-color: transparent;
      color: ${props.theme.colors.gray};
      padding: 5px 12px !important;
      cursor: not-allowed;

      + span {
        opacity: 0;
        visibility: hidden;
      }
    `};

  ${({ templateStyle, theme }) =>
    templateStyle &&
    css`
      border: 1px solid ${rgba(theme.colors.gray, 0.5)};
      height: 2.5rem;
      font-size: 0.875em;
      line-height: 1.5;
      /* padding: 5px 12px; */

      &:focus {
        border-color: ${theme.defaultColor.darkPurple};
      }

      .filled & {
        border-color: ${theme.defaultColor.darkPurple};
        padding: 1.125em 0.75em 0.25em;
      }
    `}

  ${({ minimal, theme }) =>
    minimal &&
    css`
      border: 1px solid ${props => rgba(theme.defaultColor.midPurple, 0.5)};
      height: 2em;
      padding: 0.5em 0.75em;
      line-height: 1;

      &:focus {
        border-color: ${theme.defaultColor.darkPurple};
      }

      .filled & {
        border-color: ${theme.defaultColor.darkPurple};
        padding: 0 2em 0 0.75em;
      }
    `}
`

const FormNote = styled.span`
  display: inline-block;
  position: absolute;
  top: 100%;
  margin-top: 0.75em;
  margin-left: 1.2em;
  font-weight: 700;
  font-size: 0.625em;
  color: ${props => rgba(props.theme.colors.gray, 0.4)};
  transition: all 0.15s linear;
`

const FormLimit = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 0.75em;
  margin-right: 1.2em;
  font-weight: 700;
  font-size: 0.75em;
  ${props =>
    props.remaining <= 0 &&
    css`
      color: ${props.theme.defaultColor.errorColor};
    `};
  ${props =>
    props.remaining > 0 &&
    css`
      color: ${props.theme.colors.gray};
    `};
  transition: all 0.15s linear;
`

const ErrorMessage = styled.label`
  position: absolute;
  bottom: calc(100% - .875em);
  right: 0;
  font-weight: 400;
  font-size: .6em;
  line-height: 1.5;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${props => props.theme.defaultColor.errorColor};
  color: ${props => props.theme.defaultColor.white};

  span {
    display: block;
    padding: 0.25em 0.5em;
  }
}`

const LimitCount = styled.span``

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  limit: PropTypes.number
}

Input.defaultProps = {
  value: '',
  showError: false
}

Input.displayName = 'Input'
export { Input }
