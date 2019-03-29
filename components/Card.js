const Card = props => (
  <div className="card m-1" style={{ width: "20rem" }}>
    <img src="/static/juice.jpg" alt="Avatar" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">
        Vitamin Juice <span className="price">$24.99</span>
      </h5>
      <p className="card-text">
        Need a jump on your vitamins while drinking? Tired of popping the pills?
        Drink our vitamin enhanced juice, available in several flavours.
      </p>
    </div>
  </div>
)

export default Card
