const Template = conn => {
  if (conn.models.template) return conn.models.template

  const mongoose = require('mongoose')
  const primaryFont = 'Lora'
  const secondaryFont = 'Barlow'

  const Schema = new mongoose.Schema(
    {
      /**
       * Template Properties
       */
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      team_id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
      },
      name: {
        type: String,
        default: 'Default'
      },
      template_type: {
        type: String,
        default: 'landing'
      },
      default: {
        type: Boolean,
        default: true,
        index: true
      },

      /**
       * Components
       */
      components: {
        /**
         * Header
         */
        settings: {
          facebook_pixel: {
            type: String,
            default: ''
          }
        },
        header: {
          settings: {
            logo: {
              image: {
                url: {
                  type: String,
                  default: ''
                },
                width: {
                  type: Number,
                  default: 150
                }
              },
              title: {
                type: String,
                default: 'Capital Wealth Partners'
              },
              link: {
                type: String,
                default: ''
              }
            },
            navigation: {
              items: [
                {
                  title: {
                    type: String,
                    default: 'Subscribe'
                  },
                  // Url or Popup Sub Form
                  type: {
                    type: String,
                    default: 'popup'
                  },
                  link: {
                    type: String,
                    default: ''
                  },
                  style: {
                    type: String,
                    default: 'button'
                  }
                }
              ]
            },
            action: {
              active: {
                type: Boolean,
                default: true
              },
              type: {
                type: String,
                // could be link or popup
                default: 'popup'
              },
              title: {
                type: String,
                default: 'Subscribe'
              },
              link: {
                type: String,
                default: ''
              }
            }
          },
          styles: {
            background: {
              type: String,
              default: '#fff'
            },
            progress: {
              type: String,
              default: '#444cd1'
            },
            logo: {
              font_family: {
                type: String,
                default: secondaryFont
              },
              font_weight: {
                type: String,
                default: '600'
              },
              font_size: {
                type: Number,
                default: 24
              },
              color: {
                type: String,
                default: '#1e1e1e'
              }
            },
            scroll_title: {
              font_family: {
                type: String,
                default: secondaryFont
              },
              font_weight: {
                type: String,
                default: '600'
              },
              font_size: {
                type: Number,
                default: 24
              },
              color: {
                type: String,
                default: '#1e1e1e'
              }
            },
            navigation: {
              links: {
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '500'
                },
                font_size: {
                  type: Number,
                  default: 16
                },
                color: {
                  type: String,
                  default: '#1e1e1e'
                },
                color_hover: {
                  type: String,
                  default: '#444cd1'
                }
              },
              buttons: {
                base: {
                  background: {
                    type: String,
                    default: '#444cd1'
                  },
                  color: {
                    type: String,
                    default: '#fff'
                  },
                  font_family: {
                    type: String,
                    default: secondaryFont
                  },
                  font_weight: {
                    type: String,
                    default: '500'
                  },
                  font_size: {
                    type: Number,
                    default: 16
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                },
                hover: {
                  background: {
                    type: String,
                    default: '#444cd1'
                  },
                  color: {
                    type: String,
                    default: '#fff'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                }
              }
            },
            action: {
              base: {
                background: {
                  type: String,
                  default: '#444cd1'
                },
                color: {
                  type: String,
                  default: '#fff'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 32
                  },
                  style: {
                    type: String,
                    default: 'none'
                  },
                  size: {
                    type: Number,
                    default: 1
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                }
              },
              hover: {
                background: {
                  type: String,
                  default: '#444cd1'
                },
                color: {
                  type: String,
                  default: '#fff'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 32
                  },
                  style: {
                    type: String,
                    default: 'none'
                  },
                  size: {
                    type: Number,
                    default: 1
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                }
              }
            }
          }
        },

        /**
         * Aside Component
         */
        aside: {
          /**
           * Aside Settings
           */
          settings: {
            active: {
              type: Boolean,
              default: false
            },
            image: {
              url: {
                type: String,
                default: '/LP-default-avatar.png'
              },
              style: {
                type: String,
                default: 'circle'
              }
            },
            title: {
              type: String,
              default: 'Johnny Appleseed, CFP®'
            },
            subtitle: {
              type: String,
              default: 'Capital Wealth Partners'
            },
            content: {
              type: String,
              default: ''
            },
            links: [
              {
                icon: {
                  type: String,
                  default: 'facebook'
                },
                link: {
                  type: String,
                  default: 'https://facebook.com'
                }
              },
              {
                icon: {
                  type: String,
                  default: 'twitter'
                },
                link: {
                  type: String,
                  default: 'https://twitter.com'
                }
              },
              {
                icon: {
                  type: String,
                  default: 'linkedin'
                },
                link: {
                  type: String,
                  default: 'https://linkedin.com'
                }
              }
            ],
            action: {
              active: {
                type: Boolean,
                default: true
              },
              type: {
                type: String,
                // could be link or popup
                default: 'popup'
              },
              title: {
                type: String,
                default: 'Subscribe'
              },
              link: {
                type: String,
                default: ''
              }
            }
          },
          /**
           * Aside Styles
           */
          styles: {
            background: {
              type: String,
              default: '#fff'
            },
            border: {
              radius: {
                type: Number,
                default: 8
              },
              style: {
                type: String,
                default: 'solid'
              },
              size: {
                type: Number,
                default: 1
              },
              color: {
                type: String,
                default: 'rgba(30, 30, 30, 0.2)'
              }
            },
            color: {
              type: String,
              default: '#1e1e1e'
            },
            socialIcons: {
              base: {
                background: {
                  type: String,
                  default: 'rgba(30, 30, 30, 0.5)'
                },
                color: {
                  type: String,
                  default: '#ffffff'
                }
              },
              hover: {
                background: {
                  type: String,
                  default: '#1e1e1e'
                },
                color: {
                  type: String,
                  default: '#ffffff'
                }
              }
            },
            action: {
              base: {
                background: {
                  type: String,
                  default: '#444cd1'
                },
                color: {
                  type: String,
                  default: '#fff'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 32
                  },
                  style: {
                    type: String,
                    default: 'none'
                  },
                  size: {
                    type: Number,
                    default: 1
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                }
              },
              hover: {
                background: {
                  type: String,
                  default: '#444cd1'
                },
                color: {
                  type: String,
                  default: '#fff'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 32
                  },
                  style: {
                    type: String,
                    default: 'none'
                  },
                  size: {
                    type: Number,
                    default: 1
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                }
              }
            }
          }
        },
        /**
         * Lead Capture Component (overlay and embeded)
         */
        capture: {
          /**
           * Capture Settings
           */
          settings: {
            title: {
              type: String,
              default: 'Get more personal finance tips'
            },
            subtitle: {
              type: String,
              default: 'Weekly insights delivered directly to your inbox.'
            },
            action: {
              title: {
                type: String,
                default: 'Sign Me Up'
              }
            },
            submitButtonText: {
              type: String,
              default: 'Sign Me Up'
            },
            overlay: {
              display: {
                location: {
                  type: String,
                  default: 'bottom-right'
                },
                style: {
                  type: String,
                  default: 'classic'
                },
                delay: {
                  type: Number,
                  default: 3
                },
                auto_display: {
                  type: Boolean,
                  default: true
                },
                on_close: {
                  type: Boolean,
                  default: false
                },
                on_submit: {
                  type: Boolean,
                  default: false
                }
              }
            },
            success: {
              title: {
                type: String,
                default: 'Success!'
              },
              subtitle: {
                type: String,
                default: 'You’ve been successfully added.'
              },
              action: {
                active: {
                  type: Boolean,
                  default: false
                },
                type: {
                  type: String,
                  default: 'custom'
                },
                title: {
                  type: String,
                  default: ''
                },
                link: {
                  type: String,
                  default: ''
                }
              }
            },
            /**
             * contentBlock settings
             */
            contentBlock: {
              title: {
                type: String,
                default: 'Sign up to continue reading'
              },
              subtitle: {
                type: String,
                default: 'Weekly insights delivered directly to your inbox.'
              },
              action: {
                title: {
                  type: String,
                  default: 'Sign Me Up'
                }
              },
              submitButtonText: {
                type: String,
                default: 'Sign Me Up'
              },
              closeButtonText: {
                type: String,
                default: 'close'
              },
              success: {
                title: {
                  type: String,
                  default: 'Success!'
                },
                subtitle: {
                  type: String,
                  default: 'You’ve been successfully added.'
                },
                action: {
                  active: {
                    type: Boolean,
                    default: false
                  },
                  type: {
                    type: String,
                    default: 'custom'
                  },
                  title: {
                    type: String,
                    default: ''
                  },
                  link: {
                    type: String,
                    default: ''
                  }
                }
              }
            }
          },
          /**
           * Capture Styles
           */
          styles: {
            overlay: {
              backdrop: {
                type: String,
                default: 'rgba(255, 255, 255, 0.9)'
              },
              background: {
                type: String,
                default: '#444CD1'
              },
              border: {
                style: {
                  type: String,
                  default: 'none'
                },
                size: {
                  type: Number,
                  default: 2
                },
                radius: {
                  type: Number,
                  default: 8
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              },
              close_button: {
                color: {
                  type: String,
                  default: 'rgba(0, 0, 0, 0.25)'
                }
              },
              title: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 24
                }
              },
              subtitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 16
                }
              },
              successTitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 28
                }
              },
              successSubtitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 18
                }
              },
              fields: {
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '500'
                },
                font_size: {
                  type: Number,
                  default: 16
                },
                background: {
                  type: String,
                  default: 'rgba(0, 0, 0, 0.25)'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 6
                  },
                  style: {
                    type: String,
                    default: 'solid'
                  },
                  size: {
                    type: Number,
                    default: 2
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                },
                color: {
                  type: String,
                  default: '#ffffff'
                },
                color_placeholder: {
                  type: String,
                  default: 'rgba(255, 255, 255, 0.5)'
                }
              },
              buttons: {
                base: {
                  font_family: {
                    type: String,
                    default: secondaryFont
                  },
                  font_weight: {
                    type: String,
                    default: '500'
                  },
                  font_size: {
                    type: Number,
                    default: 16
                  },
                  background: {
                    type: String,
                    default: '#ffffff'
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                },
                hover: {
                  background: {
                    type: String,
                    default: '#ffffff'
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                }
              }
            },
            embedded: {
              background: {
                type: String,
                default: 'rgba(68, 76, 209, 0.1)'
              },
              border: {
                radius: {
                  type: Number,
                  default: 8
                },
                style: {
                  type: String,
                  default: 'none'
                },
                size: {
                  type: Number,
                  default: 2
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              },
              title: {
                color: {
                  type: String,
                  default: '#444cd1'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 28
                }
              },
              subtitle: {
                color: {
                  type: String,
                  default: '#444cd1'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 18
                }
              },
              successTitle: {
                color: {
                  type: String,
                  default: '#444cd1'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 28
                }
              },
              successSubtitle: {
                color: {
                  type: String,
                  default: '#444cd1'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 18
                }
              },
              fields: {
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '500'
                },
                font_size: {
                  type: Number,
                  default: 16
                },
                background: {
                  type: String,
                  default: '#fff'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 6
                  },
                  style: {
                    type: String,
                    default: 'solid'
                  },
                  size: {
                    type: Number,
                    default: 2
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                },
                color: {
                  type: String,
                  default: '#1e1e1e'
                },
                color_placeholder: {
                  type: String,
                  default: 'rgba(68, 76, 209, 0.5)'
                }
              },
              buttons: {
                base: {
                  font_family: {
                    type: String,
                    default: secondaryFont
                  },
                  font_weight: {
                    type: String,
                    default: '500'
                  },
                  font_size: {
                    type: Number,
                    default: 16
                  },
                  background: {
                    type: String,
                    default: '#444cd1'
                  },
                  color: {
                    type: String,
                    default: '#ffffff'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#444cd1'
                    }
                  }
                },
                hover: {
                  background: {
                    type: String,
                    default: '#444cd1'
                  },
                  color: {
                    type: String,
                    default: '#ffffff'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#444cd1'
                    }
                  }
                }
              }
            },
            emailBlock: {
              backdrop: {
                type: String,
                default: 'rgba(45, 45, 45, 0.5)'
              },
              blockBackground: {
                type: String,
                default: 'rgb(255, 255, 255)'
              },
              blockTopBorder: {
                style: {
                  type: String,
                  default: 'solid'
                },
                size: {
                  type: Number,
                  default: 2
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              },
              background: {
                type: String,
                default: '#444CD1'
              },
              border: {
                style: {
                  type: String,
                  default: 'none'
                },
                size: {
                  type: Number,
                  default: 2
                },
                radius: {
                  type: Number,
                  default: 8
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              },
              title: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 24
                }
              },
              subtitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 16
                }
              },
              successTitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '600'
                },
                font_size: {
                  type: Number,
                  default: 28
                }
              },
              successSubtitle: {
                color: {
                  type: String,
                  default: '#ffffff'
                },
                font_family: {
                  type: String,
                  default: primaryFont
                },
                font_weight: {
                  type: String,
                  default: '400'
                },
                font_size: {
                  type: Number,
                  default: 18
                }
              },
              fields: {
                font_family: {
                  type: String,
                  default: secondaryFont
                },
                font_weight: {
                  type: String,
                  default: '500'
                },
                font_size: {
                  type: Number,
                  default: 16
                },
                background: {
                  type: String,
                  default: 'rgba(0, 0, 0, 0.25)'
                },
                border: {
                  radius: {
                    type: Number,
                    default: 6
                  },
                  style: {
                    type: String,
                    default: 'solid'
                  },
                  size: {
                    type: Number,
                    default: 2
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  }
                },
                color: {
                  type: String,
                  default: '#ffffff'
                },
                color_placeholder: {
                  type: String,
                  default: 'rgba(255, 255, 255, 0.5)'
                }
              },
              buttons: {
                base: {
                  font_family: {
                    type: String,
                    default: secondaryFont
                  },
                  font_weight: {
                    type: String,
                    default: '500'
                  },
                  font_size: {
                    type: Number,
                    default: 16
                  },
                  background: {
                    type: String,
                    default: '#ffffff'
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                },
                hover: {
                  background: {
                    type: String,
                    default: '#ffffff'
                  },
                  color: {
                    type: String,
                    default: '#444cd1'
                  },
                  border: {
                    radius: {
                      type: Number,
                      default: 32
                    },
                    style: {
                      type: String,
                      default: 'none'
                    },
                    size: {
                      type: Number,
                      default: 1
                    },
                    color: {
                      type: String,
                      default: '#ffffff'
                    }
                  }
                }
              }
            }
          }
        },
        /**
         * brokercheck
         */
        brokercheck: {
          active: {
            type: Boolean,
            default: false
          },
          crd: {
            type: String,
            default: ''
          },
          account_type: {
            type: String,
            default: 'firm'
          }
        },
        /**
         * Footer
         */
        footer: {
          settings: {
            content: {
              type: String,
              default:
                '<p>Information presented on this site is for informational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any product or security. Investments involve risk and unless otherwise stated, are not guaranteed. Be sure to first consult with a qualified financial adviser and/or tax professional before implementing any strategy discussed here. The information being provided is strictly as a courtesy. When you link to any of the web sites provided here, you are leaving this web site. We make no representation as to the completeness or accuracy of information provided at these web sites.</p>'
            }
          },
          styles: {
            background: {
              type: String,
              default: '#F7F8FA'
            },
            color: {
              type: String,
              default: '#1e1e1e'
            },
            links: {
              base: {
                color: {
                  type: String,
                  default: '#444cd1'
                }
              },
              hover: {
                color: {
                  type: String,
                  default: '#444cd1'
                }
              }
            }
          }
        }
      },
      /**
       * Global Settings
       */
      settings: {
        whitelabeled: {
          type: Boolean,
          default: false
        }
      },

      /**
       * Global Styles
       */
      styles: {
        /**
         * Page Styles
         */
        page: {
          font_family: {
            type: String,
            default: primaryFont
          },
          font_weight: {
            type: String,
            default: '400'
          },
          font_size: {
            type: Number,
            default: 16
          },
          background: {
            type: String,
            default: '#ffffff'
          },
          color: {
            type: String,
            default: '#1e1e1e'
          }
        },

        /**
         * Article Styles
         */
        article: {
          title: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '700'
            },
            font_size: {
              type: Number,
              default: 48
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          categories: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '600'
            },
            font_size: {
              type: Number,
              default: 16
            },
            color: {
              type: String,
              default: '#444cd1'
            }
          },
          author: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '600'
            },
            font_size: {
              type: Number,
              default: 14
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          date: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '600'
            },
            font_size: {
              type: Number,
              default: 14
            },
            color: {
              type: String,
              default: 'rgba(30, 30, 30, 0.5)'
            }
          },
          details: {
            font_family: {
              type: String,
              default: primaryFont
            },
            font_weight: {
              type: String,
              default: '400'
            },
            font_size: {
              type: Number,
              default: 16
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          links: {
            base: {
              color: {
                type: String,
                default: '#444cd1'
              }
            },
            hover: {
              color: {
                type: String,
                default: '#444cd1'
              }
            }
          },
          buttons: {
            base: {
              background: {
                type: String,
                default: 'rgba(68, 76, 209, 0)'
              },
              color: {
                type: String,
                default: '#444cd1'
              },
              font_family: {
                type: String,
                default: secondaryFont
              },
              font_weight: {
                type: String,
                default: '500'
              },
              font_size: {
                type: Number,
                default: 16
              },
              border: {
                radius: {
                  type: Number,
                  default: 32
                },
                style: {
                  type: String,
                  default: 'solid'
                },
                size: {
                  type: Number,
                  default: 1
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              }
            },
            hover: {
              background: {
                type: String,
                default: '#444cd1'
              },
              color: {
                type: String,
                default: '#fff'
              },
              border: {
                radius: {
                  type: Number,
                  default: 32
                },
                style: {
                  type: String,
                  default: 'solid'
                },
                size: {
                  type: Number,
                  default: 1
                },
                color: {
                  type: String,
                  default: '#444cd1'
                }
              }
            }
          },
          h2: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '700'
            },
            font_size: {
              type: Number,
              default: 32
            },
            font_transform: {
              type: String,
              default: 'none'
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          h3: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '600'
            },
            font_size: {
              type: Number,
              default: 24
            },
            font_transform: {
              type: String,
              default: 'none'
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          h4: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '600'
            },
            font_size: {
              type: Number,
              default: 20
            },
            font_transform: {
              type: String,
              default: 'none'
            },
            color: {
              type: String,
              default: '#1e1e1e'
            }
          },
          quote: {
            font_family: {
              type: String,
              default: secondaryFont
            },
            font_weight: {
              type: String,
              default: '500'
            },
            font_size: {
              type: Number,
              default: 24
            },
            font_transform: {
              type: String,
              default: 'none'
            }
          }
        }
      },
      created_at: {
        type: Date,
        default: Date.now,
        index: true
      },
      updated_at: {
        type: Date,
        index: true
      }
    },
    { collection: 'template', versionKey: false }
  )

  return conn.model('template', Schema)
}

module.exports = Template
