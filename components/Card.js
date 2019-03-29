const Card = props => (
  <div className="card col-2 m-2">
    <img src="/static/juice.jpg" alt="Avatar" className="mt-3 card-img-top" />
    <div className="card-body">
      <h3 className="card-title">
        Vitamin Juice <span className="price">$24.99</span>
      </h3>
      <p className="card-text">
        Need a jump on your vitamins while drinking? Tired of popping the pills?
        Drink our vitamin enhanced juice, available in several flavours.
      </p>
    </div>
  </div>
)

export default Card
