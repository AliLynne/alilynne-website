import React from "react"

import { StaticQuery, graphql } from 'gatsby'

import stripeStyles from './stripe.module.scss'

const Checkout = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: this.props.stripe.public_key,
      plans: this.props.stripe.plans,
      selected: this.props.stripe.plans[1].id,
      error: '',
      buttonText: this.props.stripe.button_text,
      success: this.props.stripe.success_page,
      cancel: this.props.stripe.cancel_page,
      site: this.props.site
    }
  }

  componentDidMount() {
    this.stripe = window.Stripe(this.state.key)
  }

  handleSubmit = (event) => {
    const success = `${this.state.site}/${this.state.success}`
    const cancel = `${this.state.site}/${this.state.cancel}`
    console.log(success)
    event.preventDefault()
    this.stripe.redirectToCheckout({
      items: [{ plan: this.state.selected, quantity: 1 }],
      successUrl: success,
      cancelUrl: cancel,
    })
      .then((res) => {
        if (res.error) {
          this.setState({
            error: res.error.essage
          })
        }
      })
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
    const plans = this.state.plans
    return (
      <form className={stripeStyles.form} onSubmit={this.handleSubmit}>
        <h3 className={stripeStyles.form__title}>Support My Work</h3>
        <div className={stripeStyles.form__inputs}>
          {plans && plans.map(plan => {
            return (
              <label className={stripeStyles.form__label} key={plan.id}>
                <input
                  className={stripeStyles.form__input}
                  type="radio"
                  name="plan-type"
                  value={plan.id}
                  checked={this.state.selected === plan.id}
                  onChange={this.handleChange}
                />
                {plan.label}
              </label>
            )

          })}
        </div>
        <button
          className={stripeStyles.form__button}
          type="submit"
        >
          {this.state.buttonText}
        </button>
        <p>{this.state.error}</p>
        <p>or</p>
        <a href='https://ko-fi.com/Z8Z313JNG' target='_blank'><img height='36' style={{border:0, height:36}} src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </form>
    )
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query Stripe {
        site {
          id
          siteMetadata {
            siteUrl
            stripe {
              public_key
              plans {
                id
                label
              }
              button_text
              success_page
              cancel_page
            }
          }
        }
      }
    `}
    render={(data) => (
      <Checkout stripe={data.site.siteMetadata.stripe} site={data.site.siteMetadata.siteUrl} />
    )}
  />
)