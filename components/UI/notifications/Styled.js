import { rgba } from 'polished'
import styled from 'styled-components'

export const Message = styled.p`
  margin: 0;
  font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875em;
  color: ${props => props.theme.colors.white};
`

export const NotifyWrapper = styled.div`
  .Toastify {
    &__toast-container {
      position: fixed;
      width: 100%;
      z-index: 9999;

      @media (min-width: 800px) {
        width: 35em;
      }

      &--top-left {
        top: 0;
        left: 0;
      }

      &--top-center {
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        @media (min-width: 800px) {
          left: calc(50% + 8.75rem);
        }
      }

      &--top-right {
        top: 0;
        right: 0;
      }

      &--bottom-left {
        bottom: 0;
        left: 0;

        @media (min-width: 800px) {
          left: 2.5em;
        }
      }

      &--bottom-center {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      &--bottom-right {
        bottom: 0;
        right: 0;

        @media (min-width: 800px) {
          right: 2.5em;
        }
      }
    }

    &__toast {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.75rem 1.25rem;
      overflow: hidden;
      cursor: pointer;

      @media (min-width: 800px) {
        border-radius: 6px 6px 0 0;
      }

      &:first-child {
        box-shadow: 0 -0.2rem 1rem 0 ${props => rgba(props.theme.colors.gray, 0.25)};
      }

      &--info {
        background-color: #3eaff7;
        color: ${props => props.theme.defaultColor.white};
      }

      &--success {
        background: ${props => props.theme.defaultColor.green};
        color: ${props => props.theme.defaultColor.white};
      }

      &--error {
        background: ${props => props.theme.defaultColor.errorColor};
        color: ${props => props.theme.defaultColor.white};
      }

      &-body {
        flex: 1;
      }

      i {
        font-size: 0.75em;
        color: ${props => props.theme.defaultColor.white};
        background: ${props => rgba(props.theme.defaultColor.black, 0.1)};
        border-radius: 50%;
        padding: 0.5em;
      }
    }

    &__progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      z-index: 9999;
      animation: Toastify__trackProgress linear 1 forwards;
      background-color: ${props => rgba(props.theme.defaultColor.black, 0.2)};
      transform-origin: left;
    }
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInUp {
    animation-name: slideInUp;
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }

  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 100%, 0);
    }
  }

  .slideOutDown {
    animation-name: slideOutDown;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  }
`
