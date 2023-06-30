const Title = ({ text}) => {
  return (
      <div className="title">
          <h2>{text || " Defaule Text"}</h2>
          <div className="title-underline"></div>
    </div>
  )
}
export default Title
